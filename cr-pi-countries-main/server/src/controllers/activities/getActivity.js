const { Country, Activity } = require("../../db.js");

module.exports = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      include: Country,
    });
    res.status(200).send(activities);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
