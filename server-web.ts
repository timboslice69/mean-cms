import * as express from "express";

// Create
const app = express();

// Configure
app
    .set("port", process.env.port || 3000)
    .use(express.static(__dirname + "/public/web"));

// Start
app.listen(app.get("port"), function () {
    console.log("Web server listening on port %d in %s mode", app.get("port"), app.settings.env);
});

module.exports = app;