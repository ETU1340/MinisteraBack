'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Taches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // mandefa
      this.hasOne(models.TacheAlerte);
      this.hasOne(models.Historique);
      this.hasOne(models.SousTache);
      this.hasOne(models.ProblemeTache);


      this.belongsTo(models.Projet);
      this.belongsTo(models.User);
      this.belongsTo(models.Statut);
      this.belongsTo(models.Priorite);
      // this.belongsTo(models.Projets);    
    }

  }
  Taches.init({
    debut: { type: DataTypes.DATEONLY, allowNull: false },
    fin: { type:DataTypes.DATEONLY, allowNull: false },
    // titre: DataTypes.STRING,
    description: { type: DataTypes.STRING(200), allowNull: false },
    output: { type: DataTypes.STRING(200), allowNull: false },
    estAlerteur: { type: DataTypes.BOOLEAN, allowNull: false }
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Tache',
    freezeTableName: true,
  });
  return Taches;
};
