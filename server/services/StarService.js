import mongoose from "mongoose";
import Star from "../models/Star";

const _repository = mongoose.model("Star", Star);

class StarService {
  async delete(id) {
    await _repository.findByIdAndDelete(id)
  }
  async create(star) {
    return await _repository.create(star)
  }
  async edit(id, star) {
    return await _repository.findByIdAndUpdate(id, star, { new: true })
  }
  async addPlanets(id, planets) {
    let star = await _repository.findById(id)
    // @ts-ignore
    star.planets = [...star.planets, ...planets];
    // @ts-ignore
    star.planets.forEach(planet => {
      // @ts-ignore
      star.planets.push(planet);
    })
    await star.save();
  }
  async removePlanets(id, planets) {
    let star = await _repository.findById(id)
    // @ts-ignore
    planets.forEach(p => {
      star.planets.splice(star.planets.indexOf(p), 1)
    })
    await star.save();
  }
  async getById(id) {
    return await _repository.find({ id })
      .populate("planets", "name");
  }
  async getAll() {
    return await _repository.find({})
      .populate("planets", "name");
  }
}

const starService = new StarService();
export default starService;
