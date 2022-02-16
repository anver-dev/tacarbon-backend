import Sequelize from "sequelize/type";
import { sequelize } from "../database/database";
import Insumos from "./Insumos";

const InsumosProducto = sequelize.define(
  "insumos_producto",
  {
    id_insumo_producto: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    id_insumo: {
      type: Sequelize.INTEGER,
    },
    id_producto: {
      type: Sequelize.INTEGER,
    },
    cantidad: {
      type: Sequelize.TEXT,
    },
    id_usuario_registro: {
      type: Sequelize.INTEGER,
    },
    fecha_registro: {
      type: Sequelize.DATE,
    },
    id_usuario_edicion: {
      type: Sequelize.INTEGER,
    },
    fecha_edicion: {
      type: Sequelize.DATE,
    },
    activo: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

InsumosProducto.hasMany(Insumos, {
  foreignKey: "id_insumo",
  sourceKey: "id_insumo",
});
Insumos.belongsTo(InsumosProducto, {
  foreignKey: "id_insumo",
  sourceKey: "id_insumo",
});

export default InsumosProducto;
