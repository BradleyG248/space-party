import mongoose from "mongoose";
import Moon from "../models/Moon";

const _repository = mongoose.model("Moon", Moon);

class MoonService {
  async delete(id) {
    await _repository.findByIdAndDelete(id)
  }
  async create(moon) {
    return await _repository.create(moon)
  }
  async edit(id, moon) {
    return await _repository.findByIdAndUpdate(id, moon, { new: true })
  }
  async getById(id) {
    return await _repository.find({ id })
  }
  async getAll() {
    return await _repository.find({});
  }
}

const moonService = new MoonService();
export default moonService;
