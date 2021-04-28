import React from 'react'
import ChatPage from './app/pages/ChatPage/ChatPage.page.js';
import {View} from 'react-native'

export default class App extends React.Component {
    render() {
        return (
            <View>
                <ChatPage />
            </View>

        )
    }
}