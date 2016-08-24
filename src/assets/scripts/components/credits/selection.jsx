import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';


/*
 * Payment Selection
 * radio options
 */

const RadioPaymentSelectionPropTypes = {
  getPaymentMethod: PropTypes.func.isRequired,
}

class RadioPaymentSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    [
      '_handlePaymentMethod'
    ].forEach(method => { this[method] = this[method].bind(this); });
  }


  _handlePaymentMethod(event) {
    this.props.getPaymentMethod(event.target.value);
  }


  render() {
    return (
      <div className="control-group">
        <label className="control-label">Payment Method:</label>
        <div className="controls">
          <div className="radiobtn-group">
            <label id="method-creditcard">
              <span className="cm-radiobtn cm-radiobtn-checked"></span>
              <input
                type="radio"
                name="method"
                value="creditcard"
                checked=""
                onClick={this._handlePaymentMethod}
              />
              <i className="icon-credit-card"></i> Credit Card
            </label>
          </div>
          <div className="radiobtn-group">
            <label id="method-paypal">
              <span className="cm-radiobtn"></span>
              <input
                type="radio"
                name="method"
                value="paypal"
                onClick={this._handlePaymentMethod}
              />
              <i className="icon-paypal-card"></i> PayPal
            </label>
          </div>
        </div>
      </div>
    );
  }
}

RadioPaymentSelection.propTypes = RadioPaymentSelectionPropTypes;

module.exports = RadioPaymentSelection;
