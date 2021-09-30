# ikt2020

Take Notes soll dazu dienen flexibel und von jedem möglichen Gerät aus seine Notizen erstellen und abrufen zu können. Die Webseite funktioniert sowohl am Desktop als auch an anderen Geräten, ist installierbar und funktioniert selbst bei einer instabilen Internetverbindung.

# Datenbank Konfiguration

## Für den Fall eines WindowsOS:

https://www.postgresql.org/download/windows/

## Für den Fall eines MacOS:

brew install postgresql
brew services start postgresql

## Verbindung herstellen

psql postgres

## Erstellen einer Rolle 
CREATE ROLE chef WITH LOGIN PASSWORD 'pw';
ALTER ROLE chef CREATEDB;
\q

##Einloggen in die neue Rolle
psql -d postgres -U chef

## Erstellen der Datenbank

CREATE DATABASE datas;

## Verbindung zur Datenbank 

\c datas

## Erstellen der Tabelle

CREATE TABLE entries (
ID SERIAL PRIMARY KEY,
title varchar(255) not null,
text text,
location varchar(255)
);

## Mockdaten

INSERT INTO entries (title, text, location)
VALUES ('PROCASTINATION', 'Sei dir das eine Lehre. Wie kann es sein, dass du erneut erst wieder so spät anfängst. Aber okay, zieh jetzt durch. Das ist deine letzte Arbeit vor der Bachelorarbeit!! Wenigstens eine 4.0 sollte drin sein, aber setz deinen Maßstab lieber nicht so niedrig.', 'Muss ich noch herausfinden'), ('PRIORITÄTENSETZUNG', 'Fun Fact: Die Klänge und Töne, die in dem Film Dune wiedergegeben werden, kommen von Instrumenten, die extra für diesen Film erfunden wurden. Außer der Dudelsack natürlich. Woher ich das weiß? Weil ich anstatt rechtzeitig mit der Semesterarbeit anzufangen ins Kino gegangen bin. Ab wann lernt man diszipliniert zu arbeiten? Oder regelmäßig zu essen? Erst wenn man eigene Kinder hat?', 'Sike');
