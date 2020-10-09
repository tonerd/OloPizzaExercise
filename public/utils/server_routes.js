class ServerRoutes {
  constructor() {
    this.baseUrl = '/api/';
  }

  get pizzas() {
    let base = this.baseUrl + 'pizzas';
    return {
      getOrders: base + '/orders'
    }
  }
}

export default ServerRoutes
