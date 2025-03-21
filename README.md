###Backend Project - Subscription Management System API 

Authenticating users using JWTs, connecting to a Mongo DB database, creating models and schemas, and integrating it with ORMs. Structuring the architecture of the API to ensure scalability and seamless communication with the frontend.

Tech Stack:
 - Node.js
 - Express.js
 -  MongoDB
 -  
###Features:

 - Advanced Rate Limiting and Bot Protection: with Arcjet that helps you secure the whole app.

 - Database Modeling: Models and relationships using MongoDB & Mongoose.

 - JWT Authentication: User CRUD operations and subscription management.

 - Global Error Handling: Input validation and middleware integration.

 - Logging Mechanisms: For better debugging and monitoring.

 - Email Reminders: Automating smart email reminders with workflows using Upstash.


###How To run the app locally:

Cloning The App: 
 - git clone https://github.com/gerardinhoo/subscription-tracker-api.git
 - cd to subscription-tracker-api

###Installation
 - npm install 

Set Up Environment Variables 

####PORT
PORT=5500
SERVER_URL="http://localhost:5500"

####ENVIRONMENT
NODE_ENV=development

####DATABASE
DB_URI=

####JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

####ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

####UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

####NODEMAILER
EMAIL_PASSWORD=

###Running the App
  - npm run dev







