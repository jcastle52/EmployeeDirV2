import express from "express";
const router = express.Router();
export default router;

import employees from "../db/employees.js";


router
  .route("/")
  .get((req, res) => {
    res.send(employees);
  })
  .post((req, res) => {
    const { name } = req.body;

    if (req = undefined) {

    }

    if (!name) {
      res.status(400).send("Name is invalid");
    } else if (!isNaN(name)) {
      res.status(400).send("Name cannot be a number");
    } else {
      const lastEmployee = employees[employees.length - 1];
      let id = lastEmployee.id + 1;

      const obj = {
        id,
        name,
      };
      employees.push(obj);
      res.status(201).send(obj);
    }
  });

router.route("/random").get((req, res) => {
  let index;
  const randomIndex = Math.floor(Math.random() * employees.length);

  if (index != randomIndex) {
    index = randomIndex;
    res.send(employees[randomIndex]);
  }
});

router.route("/:id").get((req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    res.status(404).send("Id must be a number");
  } else if (id > employees.length) {
    res.status(404).send("Id must be a number less than " + employees.length);
  } else {
    res.send(employees[id - 1]);
  }
});
