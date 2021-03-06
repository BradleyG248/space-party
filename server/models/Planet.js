import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Planet = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    moons: [{ type: ObjectId, ref: "Moon" }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;
