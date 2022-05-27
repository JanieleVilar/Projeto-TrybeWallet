import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/wallet.module.css';

class Header extends React.Component {
  render() {
    const { emailUser, totalExpenses } = this.props;
    return (
      <header>
        <h4
          data-testid="email-field"
          className="title-header"
        >
          {`Email: ${emailUser}`}
        </h4>
        <h4 data-testid="total-field" className="title-header">
          {
            totalExpenses ? totalExpenses.toFixed(2) : 0
          }
        </h4>
        <h4 data-testid="header-currency-field" className="title-header">
          BRL
        </h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  totalExpenses: state.wallet.somAsk,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  userEmail: PropTypes.string,
}.isRequisred;
