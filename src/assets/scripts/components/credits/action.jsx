import React, { PropTypes } from 'react';


/*
 * Action
 * displays the selected payment methods necessary action button
 */

const ActionPropTypes = {
  method: PropTypes.string.isRequired,
  credits: PropTypes.number.isRequired,
  handleCreditsPurchaseSubmission: PropTypes.func.isRequired,
};

function Action(props) {
  const method = props.method;

  return (
    <div className="actions">
      <div className={'method-' + method + ' active'}>
        <a
          className={method === 'creditcard' ?
            'btn btn-3d btn-huge btn-full' : 'btn btn-grey btn-huge btn-full'}
          onClick={props.handleCreditsPurchaseSubmission}
        >
          {method === 'creditcard' ? (
            <span>Buy ${props.credits} Credits</span>
          ) : (
            <span>Continue on <i className="icon-logo-paypal">PayPal</i></span>
          )}
          <span className="cm-loading hidden">
  	        <span className="loading-dot"></span>
  	        <span className="loading-dot"></span>
            <span className="loading-dot"></span>
          </span>
        </a>
  		</div>
    </div>
  );
}

Action.propTypes = ActionPropTypes;

export default Action;
