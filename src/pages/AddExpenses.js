import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AddExpenses extends React.Component {
  render() {
    const { optCurrency } = this.props;
    return (
      <form>
        <label htmlFor="input-value">
          Valor:
          <input
            id="input-value"
            data-testid="value-input"
            name="inputValue"
          />
        </label>
        <label htmlFor="input-description">
          Descrição:
          <input
            id="input-description"
            data-testid="description-input"
            name="inputDescription"
          />
        </label>
        <label htmlFor="input-currency">
          Moeda:
          <select
            data-testid="currency-input"
            id="input-currency"
            name="inputCurrency"
          >
            {optCurrency.map((currency) => (
              <option
                value={ currency }
                key={ currency }
              >
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="input-method">
          Método de pagamento:
          <select
            id="input-method"
            data-testid="method-input"
          >
            <option value="cartão de débito">
              Cartão de débito
            </option>
            <option value="dinheiro">
              Dinheiro
            </option>
            <option value="cartão de crédito">
              Cartão de crédito
            </option>
          </select>
        </label>
        <label htmlFor="input-tag">
          Categoria
          <select
            id="input-tag"
            data-testid="tag-input"
          >
            <option value="alimentação">
              Alimentação
            </option>
            <option value="lazer">
              Lazer
            </option>
            <option value="trabalho">
              Trabalho
            </option>
            <option value="transporte">
              Transporte
            </option>
            <option value="saúde">
              Saúde
            </option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  optCurrency: state.wallet.currencies,
});

export default connect(mapStateToProps)(AddExpenses);

AddExpenses.propTypes = {
  optCurrency: PropTypes.array,
}.isRequired;
