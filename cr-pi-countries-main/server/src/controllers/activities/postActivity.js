const { Country, Activity } = require("../../db.js");

module.exports = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    if (!name || !difficulty || !duration || !season || !countries) {
      return res.status(400).send("Information is missing");
    }
    let newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    countries.forEach(async (country) => {
      let activityCountry = await Country.findOne({
        where: {
          id: country,
        },
      });
      await newActivity.addCountry(activityCountry);
    });
    res.status(200).send("Activity has been succesfully created");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
