import React from 'react'
import LoginPage from './app/pages/LoginPage/LoginPage.page.js';
import {View} from 'react-native'

export default class App extends React.Component {
    render() {
        return (
            <View>
                <LoginPage />
            </View>

        )
    }
}