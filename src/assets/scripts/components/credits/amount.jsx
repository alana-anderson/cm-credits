import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';


/*
 * Amount selection
 * stores credit amount
 */

const AmountPropTypes = {
  amount: PropTypes.object.isRequired,
}

class Amount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bc" data-amount={this.props.amount.amount}>
        <i className="icon-check-corner"></i>
        <div className="bc-wrapper">
          <div className="bc-row">
            <p className="callout">{this.props.amount.callout}</p>
            <h3>${this.props.amount.amount}</h3>

            <p>{this.props.amount.bonus}</p>
          </div>
          <div className="bc-row">
            <p className="callout">{this.props.amount.callout}</p>
            <button type="submit" className="btn btn-new btn-full">Continue on <i class="icon-logo-paypal">PayPal</i></button>
          </div>
        </div>
      </div>
    );
  }
}

Amount.propTypes = AmountPropTypes;

module.exports = Amount;
