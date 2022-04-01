import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { emailUser, atualCurrencie } = this.props;
    return (
      <header>
        <h4 data-testid="email-field">
          {`Email: ${emailUser}`}
        </h4>
        <h4 data-testid="total-field">
          {`Despesas Totais: ${0}`}
        </h4>
        <h4 data-testid="header-currency-field">
          {atualCurrencie}
        </h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  atualCurrencie: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  userEmail: PropTypes.string,
}.isRequisred;
