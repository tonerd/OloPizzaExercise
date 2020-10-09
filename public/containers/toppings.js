import { connect } from 'react-redux'
import { getTopOrders } from '../actions/pizzas'
import Toppings from '../components/toppings/toppings'

const mapStateToProps = state => {
  return {
    topOrders: state.pizzas.topOrders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopOrders: (count) => dispatch(getTopOrders(count))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toppings);
