import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext'; // Düzgün path olduğundan əmin ol

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
        {this.context.user.isLoggedIn ? (
          <p id="contactUs">
            <a>Contact us</a>
          </p>
        ) : null}
      </footer>
    );
  }
}

Footer.contextType = AppContext;

export default Footer;