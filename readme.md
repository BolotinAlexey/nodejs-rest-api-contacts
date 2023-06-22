# Contacts-reader. (Node.js)

### *You may be using [Link to server](https://first-project-nelo.onrender.com/).*

## Features:

- hw02-express (morgan,cors,routes)
- hw03-mongoDB (Mongoose,Joi)
- hw04-authentication (jsonwebtoken,bcrypt(bryptjs for Docker))
- hw05-avatars (fs,Multer,jest)
- hw06-email (SendGrid,Docker)

## Commands:

- `npm start` &mdash; start of the server in the mode Production
- `npm run start:dev` &mdash; start of the server in the mode Development
- `npm run lint` &mdash; run the code check with Eslint, must be performed before each PR and correct all Linter errors
- `npm lint:fix` &mdash; same check of Linter but with automatic corrections of simple errors

## Routes:

 ### Contacts   *(The headers must include the Authorization: Bearer {{token}})*
>- **GET /api/contacts**
>- **GET /api/contacts:id**
>- **POST /api/contacts**   body:{name, email, phone}
>- **DELETE /api/contacts/:id**   no body
>- **PUT /api/contacts/:id**   body:{name or/and email or/and phone}
>- **PATCH /api/contacts/:contactId/favorite**   body:{favorite:true or false(default)}


 ### Authorization
>- **POST api/auth/register**   body:{email,password}
>- **POST api/auth/signin**  body:{email,password} `Must have verify email`
>- **POST api/auth/logout**   body:{id}  *The headers must include the Authorization: Bearer {{token}}*
>- **GET api/auth/current**   *(The headers must include the Authorization: Bearer {{token}})*
>- **PATCH api/auth/avatars**  body must have form-data with the field 'avatar'  *The headers must include the Authorization: Bearer {{token}}*
>- **GET api/auth/verify/:verificationToken** 
>- **POST api/auth/verify/**   body:{email}.  It is performed when requesting a resending verificationToken  
