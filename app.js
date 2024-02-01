const data = require("./data.json");
const app = express();

app.get("/", (req, res) => {
  res.send(`this is my app O_o`);
});

app.use("/users", () => {});
module.exports = app;
