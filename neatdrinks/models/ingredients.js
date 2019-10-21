module.exports = function(sequelize, DataTypes) {
    const Ingredient = sequelize.define("Ingredient", {
        display_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        active: {
            type: DataTypes.STRING,
            defaultValue: "Y"
        }
    });

    return Ingredient;
  };