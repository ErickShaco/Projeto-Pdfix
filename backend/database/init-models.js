import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _competencias from  "./competencias.js";
import _experiencias_profissionais from  "./experiencias_profissionais.js";
import _formacao_academica from  "./formacao_academica.js";
import _usuario from  "./usuario.js";

export default function initModels(sequelize) {
  const competencias = _competencias.init(sequelize, DataTypes);
  const experiencias_profissionais = _experiencias_profissionais.init(sequelize, DataTypes);
  const formacao_academica = _formacao_academica.init(sequelize, DataTypes);
  const usuario = _usuario.init(sequelize, DataTypes);

  competencias.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(competencias, { as: "competencia", foreignKey: "usuario_id"});
  experiencias_profissionais.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(experiencias_profissionais, { as: "experiencias_profissionais", foreignKey: "usuario_id"});
  formacao_academica.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(formacao_academica, { as: "formacao_academicas", foreignKey: "usuario_id"});

  return {
    competencias,
    experiencias_profissionais,
    formacao_academica,
    usuario,
  };
}
