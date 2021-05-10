import 'react-native-gesture-handler';
import React from 'react'
import type { Node } from 'react';

import {
    ImageBackground,
    SafeAreaView,
} from 'react-native';

import Axios from "axios"

import Navigation from "src/navigation/Navigation"

import styles from "src/assets/App";
import { Background_home } from "src/assets/Images"
// import Example from "src/components/Example"


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
        <SafeAreaView style={styles.container}>
            <ImageBackground source={Background_home} style={styles.imageBackground}>
                <Navigation />
                {/* <View>
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
                <Example name={"swifty companion"} /> */}
            </ImageBackground>
        </SafeAreaView>
    )
}

export default App;
