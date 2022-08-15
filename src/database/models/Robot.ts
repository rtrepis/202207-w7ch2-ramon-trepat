import { Schema, model } from "mongoose";

const robotSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  specs: {
    speed: {
      type: Number,
      required: true,
    },
    stamina: {
      type: Number,
      required: true,
    },
    createDate: {
      type: Number,
      required: true,
    },
  },
});

const Robot = model("robot", robotSchema, "robots");

export default Robot;
