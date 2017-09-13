import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux';
import { emailChanged, passwordChange, loginUser } from '../actions/index'
import { Card, CardSection, Input, Button, Spinner } from './common'

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }
  onPasswordChange(text) {
    this.props.passwordChange(text)
  }
  onButtonPress() {
    const { email,password } = this.props
    this.props.loginUser( email, password )
  }
  renderButton() {
    if(this.props.loading){
      return < Spinner size="large"/>
    }
    return (
      <Button  onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  }
  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}

          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth
  return { email, password, error, loading }
}

export default connect(mapStateToProps, {
  emailChanged, passwordChange, loginUser
})(LoginForm);
