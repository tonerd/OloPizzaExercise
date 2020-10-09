import React, {Component} from 'react';

class ToppingsRow extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tr>
        <td>#{this.props.index}</td>
        <td>{this.props.item.toppings.replace(/,/g, ', ')}</td>
        <td>{this.props.item.count}</td>
      </tr>
    );
  }
}

export default ToppingsRow
