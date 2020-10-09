import * as types from '../constants/action_types'

export default function sitters(state = { topOrders: [] }, action) {
  switch (action.type) {
    case types.PIZZAS_GET_TOP_ORDERS:
      return Object.assign({}, state, {
        topOrders: action.topOrders,
        serviceError: false
      });
    case types.PIZZAS_SERVICE_ERROR:
      return Object.assign({}, state, {
        serviceError: true
      });
    default:
      return state;
  }
}
