import Insumos from "../models/Insumos";

export async function createInsumo(req, res) {
  const {
    descripcion,
    stock,
    cantidad,
    id_categoria_insumo,
    id_usuario_registro,
  } = req.body;
  try {
    let insumoCreated = await Insumos.create({
      descripcion,
      stock,
      cantidad,
      id_categoria_insumo,
      id_usuario_registro,
      activo: 1,
    });

    res.json({
      message: "Insumo created successfully",
      data: insumoCreated,
    });
  } catch (err) {
    console.log(err);
  }
}
