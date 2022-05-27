import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionUser } from '../actions';
import styles from '../styles/login.module.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  disabledButton = () => {
    const { email, password } = this.state;
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const validationEmail = email.match(regex);
    const passwordLength = 6;
    const validationPassword = password.length >= passwordLength;
    if (validationEmail && validationPassword) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    }, () => {
      this.disabledButton();
    });
  }

  saveLogin = () => {
    const { history: { push }, emailUser } = this.props;
    const { email } = this.state;
    emailUser(email);
    push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <section className={ styles.bodyLogin }>
        <h1 className={ styles.titleLoginPage }>
          <img
            src="https://fontmeme.com/permalink/220408/99619ac9bb93fd88621a4f5b5ca2c4a6.png"
            alt="fontes-de-letras-cursivas"
            border="0"
          />
        </h1>
        <div className={ styles.inputsDiv }>
          <input
            className={ styles.inputs }
            type="email"
            data-testid="email-input"
            placeholder="Email"
            value={ email }
            name="email"
            onChange={ this.handleChange }
          />
          <input
            className={ styles.inputs }
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            value={ password }
            name="password"
            onChange={ this.handleChange }
          />
          <button
            className={ styles.buttonLogin }
            type="button"
            disabled={ disabled }
            onClick={ this.saveLogin }
          >
            Entrar
          </button>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailUser: (email) => dispatch(actionUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
