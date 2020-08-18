import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
return <Route {...rest} render={() => {
if(localStorage.getItem('token')){
// render the component that is passed in via props.components
return <Component />
} else {
return <Redirect to='/login' />
}
}}/>
}

export default PrivateRoute