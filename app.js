import express from "express";
const app = express();
export default app;
app.use(express.json());

//import employees from "#db/employees";

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

import employeeRoutes from "./api/employees.js";

app.use("/employees", employeeRoutes);

app.use((err, req, res, next) => {
  res.status(500).send("error", err);
})