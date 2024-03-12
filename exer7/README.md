# Exercise 7 - Train Tickets DB

## Description
In this exercise, bootcampers will familiarize themselves with MongoDB schemas/models, CRUD operations, and making request through API endpoints in Next.

## Submission
See the submission instructions down below.

## Instructions

We are going to start working with MongoDB using our knowledge of API endpoints! Make sure that once you `cd` into  `train-tickets` do `npm i`. To get the app to run again do `npm run dev`. We will not be working with any frontend in this exercise - you can interact with the backend using Postman and by seeing your database on MongoDB's website.

### CONNECT TO MONGODB
First, setup a cluster if you already do not have one in your MongoDB Atlas Cluster, and get the connection URL for VSCode.

Then, in `train-tickets` create a `.env` file in which you will set `DB_URL` equal to that url and replace password with your account password like this: `DB_URL="copied url with password"`. Also, add `DB_NAME="train-tickets"` underneath `DB_URL`.

Go to your installed "MongoDB Compass" application, log in, and press the "New Connection" button. Paste the same url as the one in `DB_URL` into the URI field and press 'Save and Connect', then name this connection whatever you want! This will let you view your cluster's database's collections and documents in a simplified UI.

The function to connect to the database is in `server/mongodb/index.js`.

### MODELS
All models should exist in the `server/mongodb/models` folder of your Next.js project. 

You will fill in the models for a ticket and a user. When working with MongoDB models make sure to install mongoose by doing `npm i mongoose` in `train-tickets`. You will also need to import it into the file along with `Schema` from `mongoose.Schema`. We want to make sure the model exists before we try to export it, so at the bottom of each file please write `export default mongoose.models?.Name || mongoose.model("Name", schemaName)` to export.

Users will have the fields of name (which is required) and age.

Tickets will have the fields of lineColor, station, and their userId (which will be represented by the user's ObjectId and is stored as `ref: 'User'` if the schema name is User). All of Ticket's fields are required.

### ACTIONS
All actions should exist in the `server/mongodb/actions` folder of your Next.js project. For each file you will need to import `connectDB` from index.js and import the models that you have made when needed for each action. Make sure to put `await connectDB()` in the functions of each of these actions. *VERY USEFUL DOCUMENTATION FOR MONGODB OPERATIONS:* https://mongoosejs.com/docs/queries.html.

1. createUser: Make an exportable async createUser function like in the lecture slides. This function we will create a new user with information we will pass in. The props will have name and age which you need to pass into the User model. Remember to save this new user created through the model to MongoDB.

2. createTicket: Follow the same process as createUser, but with the fields lineColor, station, and userID.

3. deleteTicket: Similarly to before, but instead of creating a ticket from a model, we will delete a ticket based on its ObjectID which will be passed in as a prop.

4. readTicketByUser: Here, we will query all Tickets and return a JSON object of the tickets that have a userID that matches the passed in userID.

5. updateTicketByUser: This will update the userID of a ticket based on a passed in ticketID and userID.

Important Note: for every function create a try/catch block for error handling and have some kind of distinguishable return such as return True if there is no error or False if there is.

### API ENDPOINTS

All API endpoints should exist in the `pages/api` folder of your Next.js project. This means all api routes will be prefixed with `/api` (helpful for testing). Note: The names we gave for these API ednpoints are not conventional, we just separated them to make it easier for learning.

```http
POST /registerUser
```
- Import createUser from the actions folder.
- Inside the handler function, call createUser and pass in the `req.body` as props.
- In Postman when you call registerUser, pass in values for name and age, such as {name : "Zini", age : 19} into the body.
- Sets status code to `200` and returns "Success" if a user is succesfully created or `500` and "Failed" if not.

```http
POST /buyTicket
```
- Import createTicket from the actions folder.
- Inside the handler function, call createTicket and pass in the `req.body`.
- In Postman when you call buyTicket, pass in values for lineColor, station, and userID into the body. *Important Note:* To get a valid userID you can just go to the database and copy the String inside ObjectID from a user, so it would just be a String of numbers, *and in your code convert it into an ObjectID type before passing it in*.
- Sets status code to `200` and returns "Success" if a ticket is succesfully created or `500` and "Failed" if not.

```http
DELETE /useTicket
```
- Import deleteTicket from the actions folder.
- Inside the handler function, call deleteTicket and pass in the `req.query`.
- In Postman when you call useTicket, pass in a ticketID, which you can again copy from the database, into the query.
- Sets status code to `200` and returns "Success" if a ticket is succesfully deleted or `500` and "Failed" if not. Bonus: If you can determine that the ticket does not exist and that there was not an issue with the database itself then you can set a `400` status code and return "Ticket Not Found" instead.

```http
GET /lookUpTickets
```
- Import readTicketsByUser from the actions folder.
- Inside the handler function, call readTicketsByUser and pass in the `req.query`.
- In Postman when you call lookUpTickets, pass in a userID, which you can again copy from the database, into the query.
- Sets status code to `200` and returns a JSON of the tickets associated to the passed in userID or `500` and "Failed" if not. Bonus: If you can determine that the user does not exist and that there was not an issue with the database itself then you can set a `400` status code and return "User Not Found" instead.


```http
PATCH /transferTicket
```
- Import updateTicketsByUser from the actions folder.
- Inside the handler function, call updateTicketsByUser and pass in the `req.body`.
- In Postman when you call transferTicket, pass in a ticketID and a userID (preferably not the one associated with the ticket), which you can again copy from the database, into the body.
- Sets status code to `200` and returns "Success" if the userID field of the ticket is successfully updated or `500` and "Failed" if not. Bonus: If you can determine that the ticket or user does not exist and that there was not an issue with the database itself then you can set a `400` status code and return "Ticket Not Found" or "User Not Found" instead.

### VIDEO
PLEASE MAKE A 1-5 MIN DEMO VIDEO SHOWING EACH OF YOUR OPERATIONS TO THE DATABASE USING POSTMAN AND THROUGH COMPASS ITSELF!

In this video:
- Create at least 2 users and show in MongoDB
- Create at least 3 tickets all assigned to the same user and show in MongoDB
- Delete one of those tickets and show in MongoDB
- Display the tickets for the user that all the tickets were assigned to in Postman
- Display the tickets for the user that has no tickets assigned to them in Postman
- Transfer a ticket from one user to a different user and show in MongoDB

**Requirements:**
- Create a User and Ticket model in `server/models`
- Complete all the operations in `server/actions`
- Fill in all the endpoints in `pages/api`
- Create a 1-5 demo video that does all the tasks mentioned in the instructions
