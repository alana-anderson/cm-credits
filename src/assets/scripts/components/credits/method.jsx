import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { getCardTypeValidation } from '../../helpers';


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

    this.state = {
      cardType: '',
    };

    [
      '_getCreditCardType'
    ].forEach(method => { this[method] = this[method].bind(this); });
  }


  _getCreditCardType() {
    const cardNum = $('.cc-number').val();
    const type = getCardTypeValidation(cardNum);
    this.setState({ cardType: type });
  }


  render() {
    return (
      <div className="control-group" id="methods">
        {this.props.method === 'creditcard' ? (
          <div className="control-group" id="methods">
          	<div className="method-creditcard active">
              <div className="credit-card-widget credit-card-select-widget">
                <div className="card-preview card">
                  <div className="strip">
                    <div className="payment-methods">
                      <label htmlFor="credit_card">
                        <span className="cm-radiobtn cm-radiobtn-checked"></span>
                        <input
                          type="radio"
                          id="credit_card"
                          name="selection"
                          value="creditcard"
                          checked=""
                        />
                        <div className="card-type">
                          <i className="icon-credit-card"></i>
                        </div>
                      </label>
                    </div>
                    <span className="price">${this.props.credits}</span>
                  </div>
                </div>

                <div className="card-edit card active">
                  <div className="strip">
                    <div className="payment-methods">
                      <label htmlFor="credit_card">
                        <span className="cm-radiobtn cm-radiobtn-checked"></span>
                        <input
                          type="radio"
                          id="credit_card"
                          name="selection"
                          value="creditcard"
                          checked=""
                        />
                      {this.state.cardType == '' || typeof this.state.cardType == 'undefined' ? (
                        <div className="card-type">
                          <i className="icon-card-visa"></i>
                          <i className="icon-card-mastercard"></i>
                          <i className="icon-card-jcb"></i>
                          <i className="icon-card-americanexpress"></i>
                          <i className="icon-card-discover"></i>
                          <i className="icon-card-dinersclub"></i>
                          <i className="icon-card-unknown animate selected"></i>
                        </div>
                        ) : (
                          <div className="card-type">
                            <i className={'icon-card-' + this.state.cardType + ' animate selected'}></i>
                          </div>
                        )}
                      </label>
                    </div>

                    <span className="checkbox-group">
                      <span className="cm-checkbox cm-checkbox-checked"></span>
                      <input type="checkbox" checked="" value="1" />
                      Save
                    </span>

                    <span className="price">${this.props.credits}</span>
                  </div>

                  <div className="fields new-credit-card-fields">
                    <div className="form-field">
                      <i className="icon-lock"></i>
                      <input
                        name="cc"
                        type="number"
                        required=""
                        pattern="[0-9]*"
                        inputMode="numeric"
                        className="cc-number"
                        autoComplete="cc-number"
                        placeholder="Card Number"
                        onChange={this._getCreditCardType}
                      />
                    </div>

                    <div className="inline">
                      <div className="form-field expiry">
                        <input
                          name="exp"
                          type="text"
                          required=""
                          maxLength="5"
                          pattern="\d{5}"
                          className="cc-exp"
                          autoComplete="cc-exp"
                          placeholder="MM / YY"
                        />
                      </div>

                      <div className="form-field cvc">
                        <input
                          name="cvc"
                          type="text"
                          required=""
                          maxLength="4"
                          pattern="\d{4}"
                          placeholder="CVC"
                          className="cc-cvc"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

  					<div className="method-paypal">
  						<div className="credit-card-widget paypal paypal-large">
  							<div className="card card-preview active">
  								<div className="strip">
  									<i className="icon-logo-paypal"></i>
  									<i className="icon-lock"></i>
  									<span className="price" id="paypal-amount">
                      ${this.props.credits}
                    </span>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
        ) : (
          <div className="method-paypal active">
            <div className="credit-card-widget paypal paypal-large">
              <div className="card card-preview active">
                <div className="strip">
                  <i className="icon-logo-paypal"></i>
                  <i className="icon-lock"></i>
                  <span className="price" id="paypal-amount">
                    ${this.props.credits}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

}

PaymentMethod.propTypes = PaymentMethodPropTypes;

module.exports = PaymentMethod;
