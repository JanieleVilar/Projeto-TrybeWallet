import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { emailUser } = this.props;
    return (
      <header>
        <h4 data-testid="email-field">
          {`Email: ${emailUser}`}
        </h4>
        <h4 data-testid="total-field">
          {`Despesas Totais: ${0}`}
        </h4>
        <h4 data-testid="header-currency-field">
          BRL
        </h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  userEmail: PropTypes.string,
}.isRequisred;
