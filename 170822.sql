CREATE DATABASE "Ministera"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE public.users (
    id integer NOT NULL,
    name character(200) NOT NULL,
    email character(200) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT email_unique UNIQUE (email)
) WITH (OIDS = FALSE);

ALTER TABLE public.users OWNER to postgres;



-- FUNCTION cle_metier


CREATE OR REPLACE FUNCTION public.updateid()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
    BEGIN
        NEW.cle_metier =(SELECT concat('com',NEW.id));
        RETURN NEW;
    END;
$function$
;
--TRIGGER cle_metier
CREATE TRIGGER makeid BEFORE INSERT ON public.users FOR EACH ROW EXECUTE PROCEDURE updateid();




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
    BEGIN
        IF NEW."estAlerteur" is true THEN
			id_tache=NEW.id;
			configs=(select config from "Priorite" where id=NEW."PrioriteId");
            dateAlerte=(select date (NEW.debut)  + (configs || ' hours')::INTERVAL);
            INSERT INTO "TacheAlerte" ("TacheId","dateAlerte") values (id_tache,dateAlerte);
			RETURN NEW;
		ELSE 	
			RETURN NULL;
									   
           
        END IF;    
    END;
$function$
;

-- TRIGGER ALERTEUR

CREATE TRIGGER alerte AFTER INSERT ON public."Tache" FOR EACH ROW EXECUTE PROCEDURE alerteur();






npx sequelize-cli model:generate --name tache --attributes id_projet:string,id_priorite:string,output:string,id_statut:string ,titre:string,debut:date,fin:date
npx sequelize-cli model:generate --name historique --attributes id_tache:string,id_statut:string
npx sequelize-cli model:generate --name region --attributes intitule:string
npx sequelize-cli model:generate --name departement --attributes intitule:string
npx sequelize-cli model:generate --name tacheAlerte --attributes id_tache:string,dateAlerte:date

