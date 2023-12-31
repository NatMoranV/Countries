const { Country, Activity } = require("../../db.js");

module.exports = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    if (!name || !difficulty || !duration || !season || !countries) {
      return res.status(400).send("Information is missing");
    }

    // Crear la nueva actividad en la base de datos
    let newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    // Encontrar los países correspondientes a los códigos recibidos
    const activityCountries = await Country.findAll({
      where: {
        name: countries,
      },
    });

    // Asociar los países a la nueva actividad
    await newActivity.addCountries(activityCountries);

    res.status(200).send("Activity has been succesfully created");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
