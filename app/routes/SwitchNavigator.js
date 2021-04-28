import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../pages/LoginPage/LoginPage.component.js'
import Signup from '../pages/SignUpPage/SignUpPage.component.js'
import Profile from '../pages/Profile/Profile.component.js'

const SwitchNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)
