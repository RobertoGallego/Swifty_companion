import React from 'react'

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

import styles from "src/assets/App";
import { Background_home, Logo_42_w } from "src/assets/Images"


export type Props = {
    navigation: any;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
    return (

        <SafeAreaView style={styles.container}>
            <ImageBackground source={Background_home} style={styles.imageBackground}>
                {/* <ScrollView> */}
                    <View style={styles.searchContainer}>
                        <Image source={Logo_42_w} style={styles.imageLogo}/>
                        {/* <Text>HOME</Text> */}
                            <TextInput 
                                style={styles.searchInput} 
                                autoCapitalize="none" 
                                placeholder={"John doe"} 
                                placeholderTextColor="#2E323E"
                                // placeholderFontStyle= 'italic'
                                // placeholderFontSize="italic"
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
