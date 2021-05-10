import React from 'react'

import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

export type Props = {
    navigation: any;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
    return (


      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
    );
  };

export default HomeScreen
