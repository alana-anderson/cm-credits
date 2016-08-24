import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';


/*
 * Payment Method
 * displays selected payment method
 */

const PaymentMethodPropTypes = {
  credits: PropTypes.number.isRequired,
  method: PropTypes.string.isRequired,
}

class PaymentMethod extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="control-group" id="methods">
        <p>{this.props.credits}</p>
        <p>{this.props.method}</p>
      </div>
    );
  }

}

PaymentMethod.propTypes = PaymentMethodPropTypes;

module.exports = PaymentMethod;
