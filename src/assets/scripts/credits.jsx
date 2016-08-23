import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Amount from './components/credits/amount.jsx';


/*
 * Credits
 * Base credits entry jsx
 */

class Credits extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataAmounts: [
        {'amount':20, 'callout':'Individual', 'bonus':'No Bonus'},
        {'amount':50, 'callout':'Professional', 'bonus':'No Bonus'},
        {'amount':100, 'callout':'Most Popular', 'bonus':'$10 Bonus'},
        {'amount':200, 'callout':'Big Bonus', 'bonus':'$22 Bonus'},
        {'amount':500, 'callout':'Best Value', 'bonus':'$60 Bonus'}
      ],
    };
  }
  render() {

    return (
      <div>
        <div id="bulk-hero" className="hero-transparent">
          <h1>Stock up on Credits</h1>
          <div className="blurb">Save money and get free bonus credits when you buy in bulk</div>
        </div>
        <form method="" action="" id="settings-credits" className="form-horizontal form-column">
          <div className="bc-group">
            {this.state.dataAmounts.map((card, idx) => (
              <Amount
                amount={card}
              />
            ))}
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Credits />, document.getElementById('bulk-credits'))
