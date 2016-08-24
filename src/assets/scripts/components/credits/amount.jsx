import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';


/*
 * Amount selection
 * component stores credit amount
 */

const AmountPropTypes = {
  amount: PropTypes.object.isRequired,
}

class Amount extends React.Component {
  constructor(props) {
    super(props);

    [
      '_handleCardSelection'
    ].forEach(method => { this[method] = this[method].bind(this); });
  }


  _handleCardSelection(event) {
    const $parent = $('.bc');
    $parent.removeClass('active');

    const selection = event.target.closest('.bc');
    selection.setAttribute('class', 'bc active');
  }

  render() {
    return (
      <div
        className="bc"
        data-amount={this.props.amount.amount}
        onClick={this._handleCardSelection}
      >
        <i className="icon-check-corner"></i>
        <div className="bc-wrapper">
          <div className="bc-row">
            <p className="callout">{this.props.amount.callout}</p>
            <h3>${this.props.amount.amount}</h3>

            <p>{this.props.amount.bonus}</p>
          </div>
          <div className="bc-row">
            <p className="callout">{this.props.amount.callout}</p>
            <button type="submit" className="btn btn-new btn-full">Continue on <i className="icon-logo-paypal">PayPal</i></button>
          </div>
        </div>
      </div>
    );
  }
}

Amount.propTypes = AmountPropTypes;

module.exports = Amount;
