import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import { fetchAction } from '../actions';
import AddExpenses from './AddExpenses';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchActions } = this.props;
    fetchActions();
  }

  render() {
    return (
      <>
        <Header />
        <AddExpenses />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchActions: () => dispatch(fetchAction()),
});

export default connect(null, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  fetchActions: PropTypes.func,
}.isRequired;
