import express from "express";
import starService from "../services/StarService";

export default class StarController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .put("/:id", this.edit)
      .put("/:id/addPlanets", this.addPlanets)
      .put("/:id/removePlanets", this.removePlanets)
      .post("", this.create)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await starService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await starService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await starService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async addPlanets(req, res, next) {
    try {
      let data = await starService.addPlanets(req.params.id, req.body);
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async removePlanets(req, res, next) {
    try {
      let planets = [req.body];
      let data = await starService.removePlanets(req.params.id, planets);
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await starService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let data = await starService.delete(req.params.id);
      return res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}
