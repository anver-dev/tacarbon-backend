"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _type = _interopRequireDefault(require("sequelize/type"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Insumos = _database.sequelize.define("insumos", {
  id_insumo: {
    type: _type["default"].INTEGER,
    primaryKey: true
  },
  descripcion: {
    type: _type["default"].TEXT
  },
  stock: {
    type: _type["default"].INTEGER
  },
  cantidad: {
    type: _type["default"].INTEGER
  },
  id_categoria_insumo: {
    type: _type["default"].INTEGER
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

var _default = Insumos;
exports["default"] = _default;