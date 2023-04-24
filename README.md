# strapi-integration

"npm install" i /strapi-integration
"npm run develop" i /strapi-integration/strapi för att starta strapi (http://localhost:1337)
"npm start" i /strapi-integration för att starta server (http://localhost:8008)

Endpoints för api:
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
