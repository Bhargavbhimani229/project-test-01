const { Router } = require("express");

const blogRoter = Router();

const blogController = require("../controllers/blogController");
const upload = require("../middlewares/blogMiddleware");


blogRoter.get("/",blogController.homePage);

blogRoter.get("/addBlog",blogController.AddBlogPage);
blogRoter.post("/addBlog",upload,blogController.addBlog);

blogRoter.get("/delete/:id",blogController.deleteBlog);

blogRoter.get("/edit/:id",blogController.editPage);
blogRoter.post("/edit/:id",upload,blogController.editBlog);

blogRoter.get("/views/:id",blogController.viewPage);

blogRoter.get("/register",blogController.registerPage);
blogRoter.get("/login" , blogController.loginPage);
blogRoter.post("/createCred", blogController.createCred);


module.exports = blogRoter; 