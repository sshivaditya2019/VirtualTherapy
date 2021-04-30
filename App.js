import React from 'react'
import HomePage from './app/pages/HomePage/HomePage.page.js';
import {View} from 'react-native'

export default class App extends React.Component {
    render() {
        return (
            <View>
                <HomePage />
            </View>

        )
    }
}