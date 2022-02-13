import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Insumos = sequelize.define(
  "insumos",
  {
    id_insumo: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion: {
      type: Sequelize.TEXT,
    },
    stock: {
      type: Sequelize.INTEGER,
    },
    cantidad: {
      type: Sequelize.INTEGER,
    },
    id_categoria_insumo: {
      type: Sequelize.INTEGER,
    },
    id_usuario_registro: {
      type: Sequelize.INTEGER,
    },
    fecha_registro: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    id_usuario_edicion: {
      type: Sequelize.INTEGER,
    },
    fecha_edicion: {
      type: Sequelize.DATE,
    },
    activo: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);

export default Insumos;
