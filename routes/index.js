// The function is used to create a new router object with a middle path
const router = require("express").Router();

// import all routes object in api folder
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");

// Mount the "apiRoutes" object as middleware - a new router object at middle path "/api"
router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
