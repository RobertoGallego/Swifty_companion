import 'react-native-gesture-handler';
import React from 'react'
import type { Node } from 'react';
// const axios = require('axios').default;
// import { Route, Link } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';

import Axios from "axios"

import {
    Button,
    ImageBackground,
    SafeAreaView,
    View,
} from 'react-native';

import styles from "src/assets/App";
import { Background_home } from "src/assets/images"
import Example from "src/components/example"

// import Profile from "src/components/Profile"

// client_credentials

const App: () => Node = () => {
    // POST
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    // const image = { uri: "src/assets/background_home.jpg" };

    Axios.get('https://api.intra.42.fr/v2/users/tefourge', 
        {
            headers: { 
                Authorization: "Bearer c822f5461c421b5349936a3243a8bee7a8aae98e90e28d4d4063bc9e1127712e" 
            }}
        )
        .then(function (response: any) {
            console.log("res", response);
        })
        .catch(function (error: string) {
            console.log("err", error);
        })
        .then(function () {
            // always executed
    });  
    
    return (
        <NavigationContainer>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={Background_home} style={styles.imageBackground}>
                    <View>
                        <View style={styles.button}>
                            <Button
                                // style={styles.button}
                                onPress={() => {console.log("ok")}}
                                title="Learn More"
                                // color="#841584"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>
                    </View>
                    <Example name={"swifty companion"} />
                </ImageBackground>
            </SafeAreaView>
        </NavigationContainer>
    )
}

export default App;
