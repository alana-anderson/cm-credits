/*
 * Helpers - helper functions
 * Use these bad boys anywhere
*/


/*
 * Credit card Validation
 *
 * feel free to make use the following globally:
 * - validateCard
 * - getCardTypeValidation
 * - expirationDateValidation
 */

var regEx = {
  'discover': '6011[0-9]{12}',
  'mastercard': '5[1-5][0-9]{14}',
  'visa': '4(?:[0-9]{12}|[0-9]{15})',
  'americanexpress': '3[47][0-9]{13}',
  'jcb': '(?:3[0-9]{15}|(2131|1800)[0-9]{11})',
  'dinersclub': '3(?:0[0-5][0-9]{11}|[68][0-9]{12})'
};


function resetYear(year) {
  // Make sure its the right century
  var twentiethCentury = 20;
  return "" + twentiethCentury + year;
}


export function getCardTypeValidation(num) {
  // return card type name
  for (var key in regEx) {
    if(num.match('^' + regEx[key] + '$')){
      return key;
    }
  }
}


export function expirationDateValidation(val) {
  // check if expiration digits
  var value = val.match(/^\s*(0?[1-9]|1[0-2])\/(\d\d|\d{4})\s*$/);
  if (!value) {
    return 'Error: Enter a valid expiration date\n';
  }

  var now = new Date();
  var expiration = new Date(resetYear(value[2])).valueOf();
  var month = new Date(now.getFullYear(),now.getMonth(),1).valueOf();

  if (expiration <= month) {
    return 'Error: This card has expired\n';
  } else if (val[1] > 12){
    return 'Error: Enter a valid expiration date\n';
  } else {
    return 'success';
  };
}


export function validateCard(card) {
  // validate total card values
  var flags = [];
  var response;

  var cardResponse = getCardTypeValidation(card.number);
  var expirationResponse = expirationDateValidation(card.expiration);
  var cvcResponse = card.cvc;

  // check for card number validation
  if (cardResponse) {
    flags.push('check');
  } else {
    response += 'Error: Please enter a valid card number\n';
  }

  // check for card expiration for validation
  if (expirationResponse == 'success') {
    flags.push('check');
  } else {
    response += expirationResponse;
  }

  // check for card expiration for validation
  if (!cvcResponse.match(/^[0-9]{3,4}$/)) {
    response += 'Error: Enter a 3 or 4 digit cvc number\n';
  } else {
    flags.push('check');
  }

  // if all 3 flags pass
  if (flags.length === 3) {
    // success
    return alert('Payment success!');
  } else {
    // validation failed
    return alert(response);
  }
}
