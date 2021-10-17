# crud-fetch-rest-api
<img src="https://miro.medium.com/max/1400/1*WX2EiCdNPqB1V4TJQbvd9w.jpeg" width="500">

Základní práce s FETCH API

###### Server

- Na serveru se přidaly koncové body pro HTTP metody **GET**, **POST**, **PUT**, **PATCH** a **DELETE**
- Tyto koncové body převezmou data od **clienta** a pošlou je zpátky
- Přidal se modul `nodemon`. Tento modul restartuje **server** pokaždé když detekuje změnu v souborech - nemusíme ručně restartovávat server (pro automatický restart je nutné změnu v souboru uložit)
- V souboru `package.json` se přidal script `start`. Tento script využívá modul **nodemon**. Syntax: `nodemon nazev_main_souboru.js`. V naším případě `nodemon index.js`.

###### Client

- U clienta se vytvořilo několik tlačítek pro požadavky GET, POST, PUT, PATCH a DELETE
- V JavaScriptu se pomocí FETCH API vytvořil kód pro posílání HTTP požadavků na server

###### Základní potřebné commandy
- `npm start` - spustí server


