import * as types from '../constants/action_types';
import PizzaService from '../services/pizza_service';

const pizzaService = new PizzaService();

export const getTopOrders = (count) => {
  return dispatch => {
    pizzaService.getOrders()
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw true;
      })
      .then(orders => dispatch({ type: types.PIZZAS_GET_TOP_ORDERS, topOrders: filterTopOrders(orders, count) }))
      .catch(() => dispatch({ type: types.PIZZAS_SERVICE_ERROR }));
  };
}

function filterTopOrders(orders, count) {
  let map = {};

  for(let i = 0; i < orders.length; i++) {
    let key = orders[i].toppings.sort();

    if(map[key]) {
      map[key]++;
    }
    else {
      map[key] = 1;
    }
  }

  let keys = Object.keys(map);
  let items = [];

  Object.keys(map).forEach((key) => {
	   items.push({ count: map[key], toppings: key });
  });

  items.sort((a, b) => b.count - a.count);
  return items.slice(0, count);
}
