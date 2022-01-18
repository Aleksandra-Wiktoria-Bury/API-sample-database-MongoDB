const Restaurants = require("../models/restaurantSchema");
const {urlToSearch} = require("../helpers/helpers");

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const searchResult = await Restaurants.findById(id)
      .lean()
      .select(["cuisine", "name", "address", "borough", "grades"]);

    if (!searchResult) {
      return res.status(404).json("Restaurant not found");
    }
    res.status(200).json(searchResult);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getByName = async (req, res) => {
  const { name } = req.params;
  const { query } = req;

  try {
    const searchResult = await Restaurants.find({ name: urlToSearch(name) })
      .lean()
      .limit(Number(query.limit) || 10)
      .select(["cuisine", "name"]);

    if (!searchResult.length) {
      return res.status(404).json("Restaurant not found");
    }
    res.status(200).json(searchResult);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getById,
  getByName,
};
