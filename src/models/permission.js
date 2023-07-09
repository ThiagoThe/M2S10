const { STRING, DATE } = require("sequelize");
const connection = require("../config/db");
const Role = require("./role");
const PermissionRole = require("./permissionRole");

const Permission = connection.sequelize.define(
  "permissions",
  {
    description: {
      type: STRING,
      validate: {
        len: { args: [1, 100] },
      },
      unique: { msg: "Permissão criada já existe" },
    },
    createdAt: DATE,
    updatedAt: DATE,
  },
  {
    underscored: true,
    paranoid: true,
  }
);

Permission.belongsToMany(Role, { through: PermissionRole });
Role.belongsToMany(Permission, { through: PermissionRole });

module.exports = Permission;
