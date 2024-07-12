import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers');
    this.router.get('', this.getBurgers)
  }

  getBurgers(request, response, next) {
    const burger = burgerService.getBurger()
    response.send(burger)
  }
}
