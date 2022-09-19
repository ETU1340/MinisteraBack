
module.exports = (sequelize, Sequelize) => {
  const Projet = sequelize.define("projets", {
    // id:
    titre: {
      type: Sequelize.STRING
    },

    debut: {
      type: Sequelize.DATE
    },
    
    fin: {
      type: Sequelize.DATE
    }
  });
  return Projet;
};