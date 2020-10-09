import Fetch from '../utils/fetch';
import ServerRoutes from '../utils/server_routes';

class PizzaService {
  constructor() {
    this.routes = new ServerRoutes();
    this.fetch = new Fetch();
  }

  getOrders(start, size, minRating) {
    return this.fetch.get(this.routes.pizzas.getOrders);
  }
}

export default PizzaService
