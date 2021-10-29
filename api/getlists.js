const express = require("express");
const router = express.Router();
const listModel = require("../models/listmodel");

/*Get All Lists */
router.get("/", (request, response) => {
  listModel.find().then((listsFound) => {
    if (!listsFound) {
      return res.status(404).end();
    }
    return response.status(200).json(listsFound);
  });
});

module.exports = router;
