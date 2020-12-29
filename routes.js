var controllers = require("./app/controllers/");

module.exports = function (app) {

  app.get("/", controllers.home.landingRoute);

  app.use((req, res, next) => {
    var err = new Error("Sorry, Page Not Found");
    err.status = 404;
    next(err);
  });

  if (app.get("env") === "development") {
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.render("error", {
        message: err.message,
        error: err,
        title: "error",
      });
    });
  }

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: {},
      title: "error"
    });
  });

  app.use((req, res, next) => {
    if (req.cookies["connect.sid"] && !req.session.user) {
      res.clearCookie(user.id);
    }
    next();
  });
}