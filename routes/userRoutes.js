const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/users", userController.createUser); // http://localhost:3000/api/users
router.get("/users/:id",userController.getUser); // http://localhost:3000/api/users/id
router.get("/users", userController.getAllUsers);
router.put("/users/update/:id", userController.updateUser);
router.delete("/users/delete/:id", userController.deleteUser);

module.exports = router;