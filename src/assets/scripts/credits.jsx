import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';


/*
 * Credits
 * Base credits entry jsx
 */

class Credits extends React.Component {

  render() {
    return (
      <div>
        <p>Project setup</p>
      </div>
    );
  }
}

ReactDOM.render(<Credits />, document.getElementById('credits'))
