import express from "express";
import planetService from "../services/PlanetService";

export default class PlanetController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .put("/:id", this.edit)
      .put("/:id/addMoons", this.addMoons)
      .post("", this.create)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await planetService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await planetService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await planetService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async addMoons(req, res, next) {
    try {
      let data = await planetService.addMoons(req.params.id, req.body);
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await planetService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let data = await planetService.delete(req.params.id);
      return res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}
