import React from 'react'
// import type { Node } from 'react';

import {
SafeAreaView,
ScrollView,
Text,
View,
} from 'react-native';

import Example from "src/components/example"

const App = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Example name={"swifty companion"}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default App;
