import React, { useEffect, useState } from 'react'

import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Button,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import Axios from "axios"

import styles from "src/assets/App";
import { Background_home, Logo_42_w } from "src/assets/Images"


export type Props = {
    navigation: any;
    token: any
};

const HomeScreen: React.FC<Props> = ({navigation, token}) => {
    const [User, setUser] = useState("tefourge")
    console.log("user", User, "token 2", token)

    useEffect(() => {
        console.log(token)

        Axios.get(`https://api.intra.42.fr/v2/users/${User}`, 
            {
                headers: { 
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(function (response: any) {
                console.log("res", response);
            })
            .catch(function (error: string) {
                console.log("err", error);
            })
            .then(function () {
                // always executed
        });  
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={Background_home} style={styles.imageBackground}>
                {/* <ScrollView> */}
                    <View style={styles.searchContainer}>
                        <Image source={Logo_42_w} style={styles.imageLogo}/>
                        {/* <Text>USER</Text> */}
                            <TextInput 
                                style={styles.searchInput} 
                                autoCapitalize="none" 
                                placeholder={"John Doe..."} 
                                placeholderTextColor="#86ac94"
                                clearButtonMode="always"
                            />
                            <TouchableOpacity 
                                style={styles.searchButton}
                                onPress={() =>
                                navigation.navigate("Profile")
                                }
                            >
                                <Text style={styles.searchButtonText}>SEARCH</Text>
                            </TouchableOpacity>
                    </View>
                {/* </ScrollView> */}
            </ImageBackground>
        </SafeAreaView>
      
    );
  };

export default HomeScreen
