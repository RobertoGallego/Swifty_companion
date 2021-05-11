import React from 'react'

import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Button,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

import styles from "src/assets/App";
import { Background_home } from "src/assets/Images"


export type Props = {
    navigation: any;
    route: any;
};

const HomeScreen: React.FC<Props> = ({route, navigation}) => {
    const { response } = route.params;

    console.log("response --->", response.data);

    return (

        <SafeAreaView style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <ImageBackground source={Background_home} style={styles.imageBackground}>
                {/* <ScrollView> */}
                    <View style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", borderColor: "#fff",}}>
                        <Text style={{ fontSize: 20, color: "#fff", }}>PROFILE</Text>
                        <Text style={{ fontSize: 15, color: "#fff", marginVertical: 50}}>{response.data.last_name} {response.data.first_name}</Text>
                        <TouchableOpacity 
                            style={[styles.searchButton, { width: "70%"}]}
                            onPress={() =>
                            navigation.navigate("Home")
                            }
                        ><Text style={styles.searchButtonText}>BACK HOME</Text></TouchableOpacity>
                    </View>
                {/* </ScrollView> */}
            </ImageBackground>
        </SafeAreaView>
      
    );
  };

export default HomeScreen
