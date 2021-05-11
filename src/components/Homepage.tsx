import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";

import Axios from "axios";

import styles from "src/assets/App";
import { Background_home, Logo_42_w } from "src/assets/images";

export type Props = {
  navigation: any;
  token: any;
};

const HomeScreen: React.FC<Props> = ({ navigation, token }) => {
  // const [User, setUser] = useState("tefourge");
  const [NewSearch, setNewSearch] = useState("");
  const [Error, setError] = useState(false);
  const [Loading, setLoading] = useState(false);

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
  };

  const handleSearch = () => {
    let regex = new RegExp("^[a-zA-Z]{3,20}$");

    setLoading(true);
    if (regex.test(NewSearch)) {
      Axios.get(`https://api.intra.42.fr/v2/users/${NewSearch}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(function (response: any) {
          setError(false);
          setLoading(false);
          navigation.navigate("Profile", { response: response });
          console.log("res", response.data.first_name);
        })
        .catch(function (error: string) {
          setError(true);
          setLoading(false);
          console.log("err get ", error);
        });
    } else {
      setError(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background_home} style={styles.imageBackground}>
        {/* <ScrollView> */}
        <View style={styles.searchContainer}>
          <Image source={Logo_42_w} style={styles.imageLogo} />
          {/* <Text>USER</Text> */}
          <TextInput
            onChangeText={(value) => updateSearch(value)}
            style={styles.searchInput}
            autoCapitalize="none"
            placeholder={"John Doe..."}
            placeholderTextColor="#86ac94"
            clearButtonMode="always"
            value={NewSearch}
            maxLength={20}
          />
          {Error ? (
            <Text style={styles.searchError}>Upss! user not found</Text>
          ) : (
            <Text style={styles.searchError}></Text>
          )}
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => handleSearch()}
          >
            {Loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.searchButtonText}>SEARCH</Text>
            )}
          </TouchableOpacity>
        </View>
        {/* </ScrollView> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
