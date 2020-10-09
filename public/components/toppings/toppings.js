import React, {Component} from 'react';
import ToppingsRow from './toppings_row';

class Toppings extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getTopOrders(20);
  }

  render() {
    return (
      <div id='toppings'>
        <div className='container'>
          <div className='row'>
            <h1 className='col-sm-12'>Most Popular Pizza Toppings</h1>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <table className='table'>
                <tbody>
                <tr>
                  <th>Rank</th>
                  <th>Topping Combination</th>
                  <th># Ordered</th>
                </tr>
                {
                  this.props.topOrders.map((item, index) => (
                    <ToppingsRow item={item} index={index + 1} key={'toppingRow' + index} />
                  ))
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Toppings
