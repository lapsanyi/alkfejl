# Alkalmazások fejlesztése 1. beadandó

Téma: Ticket rendszer


## Követelmény-analízis

### Követelmények
- #### Funkcionális elvárások
	- Látogatóként regisztráció
	- Látogatóként bejelentkezés
	- Felhasználóként a feladatok megtekintése
	- Felhasználóként feladat kiírása
	- Felhasználóként feladat szerkesztése
	- Adminként(projekt manager) feladat törlése
	- Főoldalon az alkalmazás ismertetése

- #### Nem-funkcionális elvárások
    - Ergonómikus elrendezés
    - Hatákonyság működés
    - Biztonságos működés: jogosultságok ellenőrzése, jelszavak biztonságos tárolása


### Használatieset-modell

- #### Szerepkörök
    1. Vendég
	- főoldal megtekintése
	- bejelentkezés
	- regisztráció
        
    2. Felhasználó
        - Vendég szerepköre
        - ticketek megtekintése
        - neki szánt ticket státuszának módosítása

    3. Admin
        - Felhasználó szerepköre
	- új ticket létrehozása
        - ticket szerkesztése
        - ticket törlése

- #### Használatieset diagram
    ![Használati esetek](images/UseCaseDiagram.png)
