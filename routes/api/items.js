const express = require("express");
const router = express.Router();

// Item model
const Item = require("../../models/Item");

// @route GET api/items
// @desc Get All Items
// @access Public
router.get("/", (req, res) => {
	Item.find()
		.sort({ date: -1 })
		.then((items) => res.json(items));
});

// @route POST api/items
// @desc Create an Item
// @access Public
router.post("/", (req, res) => {
	const newItem = new Item({
		name: req.body.name,
		date: Date.now(),
	});
	newItem.save().then((item) => res.json(item));
});

// @route POST api/items/:id
// @desc Update an Item
// @access Public
router.post("/:id", (req, res) => {
	const newItem = new Item({
		_id: req.body.id,
		quantity: req.body.quantity,
		name: req.body.name,
	});
	Item.findOneAndUpdate({ _id: req.body.id }, newItem, {
		new: true,
		useFindAndModify: false,
	})
		.then((item) => {
			res.json(item);
		})
		.catch((err) => {
			res.status(404).json({ success: false });
		});
});

// @route DELETE api/items/:id
// @desc Delete an Item
// @access Public
router.delete("/:id", (req, res) => {
	Item.findById(req.params.id)
		.then((item) => item.remove().then(() => res.json({ success: true })))
		.catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
