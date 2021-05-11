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
    // const [User, setUser] = useState("tefourge");
    const [NewSearch, setNewSearch] = useState("");

    
    // console.log("NewSearch", NewSearch)

    // useEffect(() => {
    //     console.log("Homepage token", token)

    //     Axios.get(`https://api.intra.42.fr/v2/users/${NewSearch}`, 
    //         {
    //             headers: { 
    //                 Authorization: `Bearer ${token}`,
    //             }
    //         })
    //         .then(function (response: any) {
    //             console.log("res", response.data.first_name);
    //         })
    //         .catch(function (error: string) {
    //             console.log("err get ", error);
    //         })
    //         .then(function () {
    //             // always executed
    //     });  
    // }, [])

    const updateSearch = (value: string) => {
        setNewSearch(value);
    }

    const handleSearch = () => {
        Axios.get(`https://api.intra.42.fr/v2/users/${NewSearch}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(function (response: any) {
                navigation.navigate("Profile", { response: response })
                console.log("res", response.data.first_name);
            })
            .catch(function (error: string) {
                console.log("err get ", error);
            });  
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={Background_home} style={styles.imageBackground}>
                {/* <ScrollView> */}
                    <View style={styles.searchContainer}>
                        <Image source={Logo_42_w} style={styles.imageLogo}/>
                        {/* <Text>USER</Text> */}
                            <TextInput 
                                onChangeText={ (value) => updateSearch(value) }
                                style={styles.searchInput} 
                                autoCapitalize="none" 
                                placeholder={"John Doe..."} 
                                placeholderTextColor="#86ac94"
                                clearButtonMode="always"
                                value={NewSearch}
                            />
                            {/* {
                                Error message
                            } */}
                            <TouchableOpacity 
                                style={styles.searchButton}
                                onPress={ () => handleSearch() }
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
