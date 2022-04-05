import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchActionExp } from '../actions';

class AddExpenses extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Lazer',
      id: 0,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { atualExpenses } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
      id,
    } = this.state;
    atualExpenses(
      {
        id,
        value,
        description,
        currency,
        method,
        tag,
      },
    );
    this.setState({
      id: id + 1,
      value: '',
      description: '',
    });
  }

  render() {
    const { value, description } = this.state;
    const { optCurrencies } = this.props;
    return (
      <form>
        <label htmlFor="input-value">
          Valor:
          <input
            id="input-value"
            data-testid="value-input"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-description">
          Descrição:
          <input
            id="input-description"
            data-testid="description-input"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-currency">
          Moeda:
          <select
            data-testid="currency-input"
            id="input-currency"
            name="currency"
            onChange={ this.handleChange }
          >
            {optCurrencies.map((currencies) => (
              <option
                value={ currencies }
                key={ currencies }
              >
                {currencies}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="input-method">
          Método de pagamento:
          <select
            id="input-method"
            data-testid="method-input"
            name="method"
            onChange={ this.handleChange }
          >
            <option
              value="Cartão de crédito"
            >
              Cartão de crédito
            </option>
            <option
              value="Dinheiro"
            >
              Dinheiro
            </option>
            <option
              value="Cartão de débito"
            >
              Cartão de débito
            </option>
          </select>
        </label>
        <label htmlFor="input-tag">
          Categoria
          <select
            id="input-tag"
            data-testid="tag-input"
            name="tag"
            onChange={ this.handleChange }
          >
            <option
              value="Lazer"
            >
              Lazer
            </option>
            <option
              value="Alimentação"
            >
              Alimentação
            </option>
            <option
              value="Trabalho"
            >
              Trabalho
            </option>
            <option
              value="Transporte"
            >
              Transporte
            </option>
            <option
              value="Saúde"
            >
              Saúde
            </option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesas
        </button>
      </form>
    );
  }
}

AddExpenses.defaultProps = {
  totalSoma: 0,
};

const mapStateToProps = (state) => ({
  optCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  atualExpenses: (expenses) => dispatch(fetchActionExp(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenses);

AddExpenses.propTypes = {
  optCurrencies: PropTypes.array,
}.isRequired;
