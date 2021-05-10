import React from 'react'

import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Button,
    ImageBackground
} from 'react-native';

import styles from "src/assets/App";
import { Background_home } from "src/assets/Images"


export type Props = {
    navigation: any;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
    return (

        <SafeAreaView style={styles.container}>
            <ImageBackground source={Background_home} style={styles.imageBackground}>
                {/* <ScrollView> */}
                    <View>
                        <Text>PROFILE</Text>
                        <Button
                            title="Go Home"
                            onPress={() =>
                            navigation.navigate("Home")
                            }
                        />
                    </View>
                {/* </ScrollView> */}
            </ImageBackground>
        </SafeAreaView>
      
    );
  };

export default HomeScreen
