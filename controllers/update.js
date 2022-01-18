const Restaurants = require("../models/restaurantSchema");

//testing the schema:
// const add = async (req, res) => {
//  const { body } = req;
//   try {
//     const newResto = await Restaurants.create({
//       ...body,
//     });
//     res.status(201).json({ message: "New resto added", wizard: newResto });
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

const updateName = async (req, res) => {
  const { id } = req.params;
  try {
    const searchResult = await Restaurants.findByIdAndUpdate(id, {
      name: req.body.name,
    });

    if (!searchResult) {
      return res.status(404).json("Restaurant not found");
    }
    res.status(200).json({ message: "Restaurant name updated" });
  } catch (error) {
    return res.status(500).json(error);
  }
};
const updateCuisine = async (req, res) => {
  const { id } = req.params;
  try {
    const searchResult = await Restaurants.findByIdAndUpdate(id, {
      cuisine: req.body.cuisine,
    });

    if (!searchResult) {
      return res.status(404).json("Restaurant not found");
    }
    res.status(200).json({ message: "Restaurant cuisine type updated" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateLocation = async (req, res) => {
  const { id } = req.params;
  const { building, coord, street, zipcode, borough } = req.body;
  try {
    const searchResult = await Restaurants.findByIdAndUpdate(id, {
      address: {
        building: building,
        coord: coord, // could use some validation middleware to make sure we pass 2 values?
        street: street,
        zipcode: zipcode,
      },
      borough: borough,
    });

    if (!searchResult) {
      return res.status(404).json("Restaurant not found");
    }
    res.status(200).json({ message: "Restaurant address updated" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addGrades = async (req, res) => {
  const { id } = req.params;
  const { date, score } = req.body;
  try {
    const searchResult = await Restaurants.findByIdAndUpdate(id, {
      $push: {
        grades: {
          score: score,
          date: date,
        },
      },
    });

    if (!searchResult) {
      return res.status(404).json("Restaurant not found");
    }
    res.status(200).json({ message: "New inspection grade added" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteDocument = async (req, res) => {
  const { id } = req.params;
  try {
    const searchResult = await Restaurants.findByIdAndDelete(id);

    if (!searchResult) {
      return res.status(404).json("Restaurant not found");
    }
    res.status(200).json({ message: "Restaurant deleted" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  updateName,
  updateCuisine,
  updateLocation,
  addGrades,
  deleteDocument,
  //add
};
