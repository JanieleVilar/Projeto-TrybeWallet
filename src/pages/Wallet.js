import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchAction } from '../actions';
import AddExpenses from '../components/AddExpenses';
import ExpensesTable from '../components/expensesTable';

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
        <ExpensesTable />
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
