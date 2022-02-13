"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _type = _interopRequireDefault(require("sequelize/type"));

var _database = require("../database/database");

var _Insumos = _interopRequireDefault(require("./Insumos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InsumosProducto = _database.sequelize.define("insumos_producto", {
  id_insumo_producto: {
    type: _type["default"].INTEGER,
    primaryKey: true
  },
  id_insumo: {
    type: _type["default"].INTEGER
  },
  id_producto: {
    type: _type["default"].INTEGER
  },
  cantidad: {
    type: _type["default"].TEXT
  },
  id_usuario_registro: {
    type: _type["default"].INTEGER
  },
  fecha_registro: {
    type: _type["default"].DATE
  },
  id_usuario_edicion: {
    type: _type["default"].INTEGER
  },
  fecha_edicion: {
    type: _type["default"].DATE
  },
  activo: {
    type: _type["default"].BOOLEAN
  }
}, {
  timestamps: false
});

InsumosProducto.hasMany(_Insumos["default"], {
  foreignKey: "id_insumo",
  sourceKey: "id_insumo"
});

_Insumos["default"].belongsTo(InsumosProducto, {
  foreignKey: "id_insumo",
  sourceKey: "id_insumo"
});

var _default = InsumosProducto;
exports["default"] = _default;