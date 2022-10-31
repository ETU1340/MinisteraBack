CREATE DATABASE "Ministera" WITH OWNER = postgres ENCODING = 'UTF8' CONNECTION
LIMIT
    = -1 IS_TEMPLATE = False;

CREATE TABLE public.users (
    id integer NOT NULL,
    name character(200) NOT NULL,
    email character(200) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT email_unique UNIQUE (email)
) WITH (OIDS = FALSE);

ALTER TABLE
    public.users OWNER to postgres;

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
	dateAlerte  timestamp;
	id_tache  INTEGER;
    countTacheAlerte INTEGER;
    BEGIN
        IF NEW."estAlerteur" is true THEN
			id_tache=NEW.id;
			configs=(select config from "Priorite" where id=NEW."PrioriteId");
            dateAlerte=(select NEW.debut - (configs || '')::INTEGER);
            countTacheAlerte=(select count(id) from "TacheAlerte" where "TacheId"=id_tache);
            IF countTacheAlerte>0 THEN
                Update "TacheAlerte" SET "dateAlerte"= dateAlerte where "TacheId"=id_tache;
            ELSE
                INSERT INTO "TacheAlerte" ("TacheId","dateAlerte") values (id_tache,dateAlerte) ;

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
	countTache  INTEGER;
	debutDate Date;
	finDate Date;
	idProjet  INTEGER;
    BEGIN
	countTache=(select count(id) from "Tache" where "ProjetId"=New."ProjetId");
	idProjet=New."ProjetId";
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
--TRIGGEUR update tache
CREATE TRIGGER updateTache
After
Update
ON public."Tache" FOR EACH ROW EXECUTE PROCEDURE dateAfterUpdate();


--Avancement Tache
create view TacheByProjet as select "public"."Tache".*,CASE WHEN (select count(id) from "public"."SousTache" where "TacheId"="public"."Tache".id)>0  THEN (select (count("SousTache".id)*100)/(select count("SousTache".id) from "SousTache" where "TacheId"= "public"."Tache".id)  from "SousTache" where "TacheId"="public"."Tache".id and "isChecked"=true) ELSE 0 END AS avancement from "public"."Tache" ;
--Avancement Projet
create view ProjetByDept as SELECT *, CASE WHEN (select count(tache.id) from "public"."Tache" tache where tache."ProjetId"=projet.id)>0 THEN (select (100*sum(avancement))/(count(id)*100) from TacheByProjet where "public".tachebyprojet."ProjetId"=projet.id)  ELSE 0 END  AS avancement FROM "public"."Projet" projet;
--Condition Alerteur 
create or replace view dateAlerte as select "TacheAlerte".*,"Tache".debut,"Tache".titre,("Tache".debut-(select CURRENT_DATE)) as compteurJour,"Departement".id as iddept from "TacheAlerte" join "Tache" on "Tache".id="TacheAlerte"."TacheId"join "Projet" on "Projet" .id="Tache"."ProjetId" join "Departement" on "Departement".id="Projet"."DepartementId"  where "dateAlerte"=(select CURRENT_DATE) and "dateAlerte"<="Tache".fin;
--TODO to Progress update
 UPDATE "public"."Tache" SET debut = (select current_date),fin=(select current_date)+ (select (fin-debut)from "public"."Tache" where id=8),"StatutId"=2  where id=8
--Statistique todo progress finish projet by dept
select (select count(id) from projetbydept where avancement=0 and "DepartementId"=2 )as todo , (select count(id) from projetbydept where avancement=100  and "DepartementId"=2  )as finish ,(select count(id) from projetbydept where avancement>0 and avancement<100  and "DepartementId"=2  )as progress
npx sequelize - cli model :generate --name tache --attributes id_projet:string,id_priorite:string,output:string,id_statut:string ,titre:string,debut:date,fin:date
npx sequelize - cli model :generate --name historique --attributes id_tache:string,id_statut:string
npx sequelize - cli model :generate --name region --attributes intitule:string
npx sequelize - cli model :generate --name departement --attributes intitule:string
npx sequelize - cli model :generate --name tacheAlerte --attributes id_tache:string,dateAlerte:date