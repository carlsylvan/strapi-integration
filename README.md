# strapi-integration

"npm install" i /strapi-integration & i /strapi-integration/strapi.
"npm run develop" i /strapi-integration/strapi för att starta strapi (http://localhost:1337).
"npm start" i /strapi-integration för att starta server (http://localhost:8008).

Endpoints för elektronik:
"/computers"
"/mobiles"
"/audio"
"/televisions"

I Postman:
GET http://localhost:8008/televisions för att visa alla tv-apparater, likadant för resten av endpoints.
POST http://localhost:8008/televisions med JSON-formatet:
{
    "data": {
        "name":"string",
        "description":"string",
        "brand":"string",
        "price": number,
        "screen_size": number
    }
}
PUT http://localhost:8008/televisions/id med ovanstående JSON-format.
DELETE http://localhost:8008/televisions/id.

För att kunna göra POST/PUT/DELETE behöver du vara inloggad. Gör en POST till http://localhost:8008/users/register med JSON-formatet:
{
    "username": "string",
    "password": "string"
}
Logga sedan in genom en POST till http://localhost:8008/users/login med samma format. Då får du en JWT som svar. Klistra in JWT som value i Header till keyn Athorization när du gör dina POST/PUT/DELETE-requests.
