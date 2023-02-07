'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subject.hasOne(models.Instructor, {foreignKey: 'subjectId'});
    }
  }
  Subject.init(
    {
      subjectName: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'subjects',
      modelName: 'Subject',
    }
  );
  return Subject;
};
