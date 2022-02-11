import Sequelize from "sequelize/type";
import { sequelize } from "../database/database";

sequelize.define(
  "insumos",
  {
    id_insumo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    descripcion: {
      type: Sequelize.TEXT,
    },
    stock: {
      type: Sequelize.INTEGER,
    },
    cantidad: {
      type: Sequelize.TEXT,
    },
    id_categoria_insumo: {
      type: Sequelize.INTEGER,
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
      type: Sequelize.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);
