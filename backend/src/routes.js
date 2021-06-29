const express = require("express");

const UserController = require("./controllers/UserController");
const TravelerController = require("./controllers/TravelerController");
const DestinationProductsController = require("./controllers/DestinationProductsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessionsUser", SessionController.userLogin);
routes.post("/sessionsTraveler", SessionController.travelerLogin);

routes.get("/selectUsers", UserController.index);
routes.post("/createUsers", UserController.create);

routes.get("/selectTravelers", TravelerController.index);
routes.post("/createTravelers", TravelerController.create);

routes.get("/incidents", DestinationProductsController.index);
routes.post("/incidents", DestinationProductsController.create);
routes.delete("/incidents/:id", DestinationProductsController.delete);

routes.get("/profile", ProfileController.index);
routes.get("/user", ProfileController.selectUser);
routes.get("/traveler", ProfileController.selectTraveler);



module.exports = routes;
