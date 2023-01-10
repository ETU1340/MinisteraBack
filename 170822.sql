CREATE DATABASE "Ministera" WITH OWNER = postgres ENCODING = 'UTF8' CONNECTION
LIMIT
    = -1 IS_TEMPLATE = False;



-- FUNCTION cle_metier
CREATE
OR REPLACE FUNCTION public.updateid() RETURNS trigger LANGUAGE plpgsql AS $ function $ BEGIN NEW.cle_metier =(
    SELECT
        concat('com', NEW.id)
);

RETURN NEW;

END;

$ function $;

--TRIGGER cle_metier
CREATE TRIGGER makeid BEFORE
INSERT
    ON public.users FOR EACH ROW EXECUTE PROCEDURE updateid();

-- FUNCTION ALERTEUR


CREATE OR REPLACE FUNCTION public.alerteur()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
declare
	configs varchar(50);
	configshours varchar(50);
	dateDebutAlerte  timestamp;
	dateFinAlerte  timestamp;
	id_tache  INTEGER;
    countAlerteDebut INTEGER;
	countAlerteFin INTEGER;
    BEGIN
        IF NEW."estAlerteur" is true THEN
			id_tache=NEW.id;
			configs=(select config from "Priorite" where id=NEW."PrioriteId");
            dateDebutAlerte=(select NEW.debut - (configs || '')::INTEGER);
			dateFinAlerte=(select NEW.fin - (configs || '')::INTEGER);
            countAlerteDebut=(select count(id) from "TacheAlerte" where "TacheId"=id_tache and "typeAlerte"=0);
 		   countAlerteFin=(select count(id) from "TacheAlerte" where "TacheId"=id_tache and "typeAlerte"=1);
            IF countAlerteDebut>0 THEN
                Update "TacheAlerte" SET "dateAlerte"= dateDebutAlerte where "TacheId"=id_tache and "typeAlerte"=0 ;
            ELSE
                INSERT INTO "TacheAlerte" ("TacheId","dateAlerte","typeAlerte") values (id_tache,dateDebutAlerte,0) ;

            END IF;

   		IF countAlerteFin>0 THEN
                Update "TacheAlerte" SET "dateAlerte"= dateFinAlerte where "TacheId"=id_tache and "typeAlerte"=1 ;
            ELSE
                INSERT INTO "TacheAlerte" ("TacheId","dateAlerte","typeAlerte") values (id_tache,dateFinAlerte,1) ;

            END IF;


     
			RETURN NEW;
		ELSE 	
			RETURN NULL;
									   
           
        END IF;    
    END;
$function$
;


-- TRIGGER ALERTEUR
CREATE TRIGGER alerte
AFTER
INSERT
    OR
UPDATE
    ON public."Tache" FOR EACH ROW EXECUTE PROCEDURE alerteur();

--Function update projet before delete tache
CREATE OR REPLACE FUNCTION public.dateAfterDelete()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
declare
	countTache  INTEGER;
	debutDate Date;
	finDate Date;
	idProjet  INTEGER;
    BEGIN
	idProjet=OLD."ProjetId";
	countTache=(select count(id) from "Tache" where "ProjetId"=IdProjet);

        IF countTache >0 THEN	
			debutDate=(select min(debut) from "Tache" where "ProjetId"=idProjet);
            finDate=(select max(fin) from "Tache" where "ProjetId"=idProjet);
            Update "Projet" SET debut=debutDate ,fin=finDate where id=idProjet;
			RETURN NEW;
		ELSE 	
			RETURN NULL;
									   
           
        END IF;    
    END;
$function$
;

--TRIGGEUR delete tache
CREATE TRIGGER deleteTache
After
DELETE
ON public."Tache" FOR EACH ROW EXECUTE PROCEDURE dateBeforeDelete();



--Function update projet after update tache
CREATE OR REPLACE FUNCTION public.dateAfterUpdate()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
declare
    debutDate Date;
	finDate Date;
	idProjet  INTEGER;
    BEGIN
	idProjet=New."ProjetId";
	debutDate=(select min(debut) from "Tache" where "ProjetId"=idProjet);
    finDate=(select max(fin) from "Tache" where "ProjetId"=idProjet);
    Update "Projet" SET debut=debutDate ,fin=finDate where id=idProjet;
	RETURN NEW;  

    END;
$function$
;
--TRIGGEUR update tache
CREATE TRIGGER updateTache
After
INSERT
or
Update
ON public."Tache" FOR EACH ROW EXECUTE PROCEDURE dateAfterUpdate();





--Avancement Tache
create or replace view TacheByProjet as select "public"."Tache".*,"public"."Projet"."DepartementId","username",CASE WHEN (select count(id) from "public"."SousTache" where "TacheId"="public"."Tache".id)>0  THEN (select (count("SousTache".id)*100)/(select count("SousTache".id) from "SousTache" where "TacheId"= "public"."Tache".id)  from "SousTache" where "TacheId"="public"."Tache".id and "isChecked"=true) ELSE 0 END AS avancement from "public"."Tache" JOIN "public"."Projet" on "public"."Tache"."ProjetId"="public"."Projet"."id" JOIN public."User" on public."User".id="public"."Tache"."UserId";
--Avancement Projet
create  or replace view ProjetByDept as  SELECT projet.*,dept.intitule, CASE WHEN (select count(tache.id) from "public"."Tache" tache where tache."ProjetId"=projet.id)>0 THEN (select  (100*(select count(id) from "public"."Tache" where "public"."Tache"."ProjetId"=projet.id and "StatutId"=3))/count(id) from "public"."Tache" where "public"."Tache"."ProjetId"=projet.id)  ELSE 0 END  AS avancement FROM "public"."Projet" projet join "public"."Departement" dept on projet."DepartementId"=dept.id ;
--Condition Alerteur 
create or replace view dateAlerte as select "TacheAlerte".*,"Tache".debut,"Tache".description,"Departement".id as iddept,"Tache"."UserId","Priorite".config as comptejour,"Tache"."ProjetId","Projet".titre from "TacheAlerte" join "Tache" on "Tache".id="TacheAlerte"."TacheId"join "Projet" on "Projet" .id="Tache"."ProjetId" join "Departement" on "Departement".id="Projet"."DepartementId" Join "Priorite" on "Priorite".id="Tache"."PrioriteId"  where ( "dateAlerte"=(select CURRENT_DATE) and "Tache"."StatutId"=1 and "typeAlerte"=0) OR ("dateAlerte"=(select CURRENT_DATE) and "Tache"."StatutId"!=3 and "typeAlerte"=1) ;
--TODO to Progress update
 UPDATE "public"."Tache" SET debut = (select current_date),fin=(select current_date)+ (select (fin-debut)from "public"."Tache" where id=8),"StatutId"=2  where id=8
--Statistique todo progress finish projet by dept
select (select count(id) from projetbydept where avancement=0 and "DepartementId"=2 )as todo , (select count(id) from projetbydept where avancement=100  and "DepartementId"=2  )as finish ,(select count(id) from projetbydept where avancement>0 and avancement<100  and "DepartementId"=2  )as progress
npx sequelize - cli model :generate --name tache --attributes id_projet:string,id_priorite:string,output:string,id_statut:string ,titre:string,debut:date,fin:date
npx sequelize - cli model :generate --name historique --attributes id_tache:string,id_statut:string
npx sequelize - cli model :generate --name region --attributes intitule:string
npx sequelize - cli model :generate --name departement --attributes intitule:string
npx sequelize - cli model :generate --name tacheAlerte --attributes id_tache:string,dateAlerte:date