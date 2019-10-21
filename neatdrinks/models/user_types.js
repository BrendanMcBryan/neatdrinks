module.exports = function(sequelize, DataTypes) {
    const UserType = sequelize.define("UserType", {
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

    UserType.associate = function(models) {
        UserType.hasOne(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return UserType;
  };