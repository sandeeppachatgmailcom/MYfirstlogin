const express = require("express");
const app = express();
const path = require("path");
const url = require("url");

// Authentication middleware
const authenticate = (req, res, next) => {
  // Check if the user is authenticated
  const isAuthenticated = true; // Replace with your authentication logic

  if (isAuthenticated) {
    // User is authenticated, allow access to the next middleware or route handler
    next();
  } else {
    // User is not authenticated, redirect to login page
    res.redirect("/login");
  }
};

// Apply authentication middleware to specific routes
app.get("/home", authenticate, (req, res) => {
  res.sendFile(path.join(__dirname, "HomePage.html"));
});

app.post("/HomePage", authenticate, (req, res) => {
  res.sendFile(path.join(__dirname, "HomePage.html"));
});

// Routes for login and authentication
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.post("/login", (req, res) => {
  // Perform authentication logic here

  // If authentication is successful, redirect to the home page
  res.redirect("/home");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("Server Started");
});
