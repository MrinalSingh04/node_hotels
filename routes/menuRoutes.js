const express = require("express");
const router = express.Router();
const menuItem = require("../models/menu");

//Post method to add a menu Item
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new menuItem(data);
    const response = await newMenuItem.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Get method to get the menuItem data
router.get("/", async (req, res) => {
  try {
    const data = await menuItem.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (tasteType == "sweet" || tasteType == "spicy" || tasteType == "sour") {
      const response = await menuItem.find({ taste: tasteType });
      console.log("Response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid Taste type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
