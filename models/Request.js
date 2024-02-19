const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
// const bcrypt = require('bcrypt');

// class Request extends Model {
// 	checkPassword(loginPw) {
//         return bcrypt.compareSync(loginPw, this.password);
//     }
// }
class Request extends Model {}

Request.init(
    {
      stakeholderEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        //CHECK AGAINST DATABASE FOR EXISTING EMAIL
        // validate: {
        //     isEmail: true,
        // }
      },
      sme: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      problemStatement: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      problemData: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      attendanceReq: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      expectedGrowth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      urgency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        reference: {
          model: 'user',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'request',
    }
);




module.exports = Request;
