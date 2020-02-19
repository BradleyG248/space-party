import mongoose from "mongoose";
import Planet from "../models/Planet";

const _repository = mongoose.model("Planet", Planet);

class PlanetService {
  async addMoons(id, moons) {
    let planet = await _repository.findById(id)
    // @ts-ignore
    planet.moons = [...planet.moons, ...moons];
    // @ts-ignore
    planet.moons.forEach(moon => {
      // @ts-ignore
      planet.moons.push(moon);
    })
    await planet.save();
  }
  async delete(id) {
    await _repository.findByIdAndDelete(id)
  }
  async create(planet) {
    return await _repository.create(planet)
  }
  async edit(id, planet) {
    return await _repository.findByIdAndUpdate(id, planet, { new: true })
  }
  async getById(id) {
    return await _repository.find({ id })
  }
  async getAll() {
    return await _repository.find({});
  }
}

const planetService = new PlanetService();
export default planetService;
