import { CostumerModel } from "../models/costumers.models.js";

export const getCostumers = async (req, res) => {
  try {
    const result = await CostumerModel.getAll();
    res
      .status(200)
      .json({ status: 1, message: "Se envia respuesta", data: result });
  } catch (error) {
    res.status(500).json({ message: "No hay información disponible" }).r;
  }
};
export const createCostumer = async (req, res) => {};

export const getCostumersById = (req, res) => {
  const result = []
  res
    .status(200)
    .json({ status: 1, message: "Se envía respuesta", data: result });
};
