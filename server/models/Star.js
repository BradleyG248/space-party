import mongoose, { isValidObjectId } from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Star = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    coords: { type: Number, required: true },
    planets: [{ type: ObjectId, ref: "Planet" }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Star;
