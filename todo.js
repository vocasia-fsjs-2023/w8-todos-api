import { Model } from "sequelize";
import db from "./models/index.js";

export default class Todo extends Model {}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ["created", "in_progress", "done"],
    },
  },
  {
    sequelize,
    modelName: "Todo",
  }
);
