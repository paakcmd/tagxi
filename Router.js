import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginPage from './src/components/LoginPage'


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop:65 }}>
    <Scene key="auth">
      <Scene key ='login' component={LoginPage} title="Please Login" initial/>
    </Scene>

  </Router>
  )
}

export default RouterComponent;
