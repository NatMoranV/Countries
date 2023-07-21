const { Country, Activity } = require("../../db.js");
const { Op } = require("sequelize");
module.exports = async (req, res) => {
  try {
    const query = req.params.query;

    if (!query) {
      return res.status(400).json({ error: "Query parameter is missing" });
    }


    if (query.length === 3) {
      const theCountry = await Country.findByPk(query.toUpperCase(), {
        include: Activity,
      });

      if (!theCountry) {
        return res.status(404).json({ error: "Country not found" });
      }

      return res.status(200).json(theCountry);
    } else {
      const countriesByName = await Country.findAll({
        attributes: [
          "name",
          "image",
          "continent",
          "id",
          "capital",
          "subregion",
          "area",
          "population",
        ],
        where: {
          name: {
            [Op.iLike]: "%" + query + "%",
          },
        },
      });

      if (countriesByName.length === 0) {
        return res
          .status(404)
          .json({ message: "No countries found with the given name" });
      }

      return res.status(200).json(countriesByName);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
