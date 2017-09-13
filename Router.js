import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './src/components/LoginForm'


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop:65 }}>
    <Scene key="auth">
      <Scene key ='login' component={LoginForm} title="Please Login" initial/>
    </Scene>

  </Router>
  )
}

export default RouterComponent;

    // <Router sceneStyle={{ paddingTop:65 }}>
    //   <Scene key="auth">
    //     <Scene key ='login' component={LoginForm} title="Please Login" initial/>
    //   </Scene>
    //   <Scene key="main">
    //     <Scene
    //       onRight={() => Actions.employeeCreate()}
    //       rightTitle="Add"
    //       key='employeeList'
    //       component={EmployeeList}
    //       title="Employees"
    //       initial
    //     />
    //     <Scene key='employeeCreate' component={EmployeeCreate} title="Create Employee" />
    //     <Scene key='employeeEdit' component={EmployeeEdit} title="Edit Employee" />
    //   </Scene>

    // </Router>