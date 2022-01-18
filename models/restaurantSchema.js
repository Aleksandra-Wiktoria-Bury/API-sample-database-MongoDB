const { Schema, model } = require("mongoose");

const restauranTSchema = new Schema({
  address: {
    building: String,
    coord: [Number],
    street: String,
    zipcode: { type: Number, length: 5 },
  },
  borough: {
    type: String,
    enum: ["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"],
  },
  cuisine: String,
  grades: [
    {
      _id: false,
      date: { type: Date },
      grade: {
        //New York City has required restaurants to post letter grades that correspond to scores received from sanitary inspections. An inspection score of 0 to 13 is an A, 14 to 27 points is a B, and 28 or more points is a C
        type: String,
        default: function () {
          if (this.score <= 13) {
            return "A";
          } else if (this.score <= 27) {
            return "B";
          } else {
            return "C";
          }
        },
      },
      score: { type: Number, min: 0 },
    },
  ],
  name: String,
  restaurant_id: Number,
});

const Restaurant = model("restaurants", restauranTSchema);

module.exports = Restaurant;
