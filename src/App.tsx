import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import type { Node } from 'react';
import {decode, encode} from 'base-64'

import {
    ImageBackground,
    SafeAreaView,
    View,
    Text
} from 'react-native';

import Axios from "axios"

import Navigation from "src/navigation/Navigation"

import styles from "src/assets/App";
import { Background_home } from "src/assets/Images"
// import Example from "src/components/Example"

const App: () => Node = () => {
    const [Token, setToken] = useState<any>([])

    if (!global.btoa) {
        global.btoa = encode;
    }

    if (!global.atob) {
        global.atob = decode;
    }
    // POST ENV
    useEffect(() => {
        Axios.request({
            // url: "/oauth/token",
            method: "post",
            baseURL: "https://api.intra.42.fr/oauth/token",
            auth: {
              username: "env",
              password: "env"
            },
            data: {
              "grant_type": "client_credentials",
              "scope": "public"    
            }
        }).then(respose => {
            // console.log("post", respose.data);  
            setToken(respose.data)
        }); 
    }, [])

    console.log(Token)

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={Background_home} style={styles.imageBackground}>
                { Token !== undefined 
                ? 
                    <Navigation token={Token.access_token}/>
                :
                    <View>
                        <Text style={styles.loadingText}>Loading...</Text>
                    </View>
                }
                {/* <Example name={"swifty companion"} /> */}
            </ImageBackground>
        </SafeAreaView>
    )
}

export default App;
