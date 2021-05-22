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
import { Background_home, Logo_42_w } from "src/assets/Images";

export type Props = {
  navigation: any;
  token: any;
};

const HomeScreen: React.FC<Props> = ({ navigation, token }) => {
  const [NewSearch, setNewSearch] = useState("");
  const [Error, setError] = useState(false);
  const [Loading, setLoading] = useState(false);

  const updateSearch = (value: string) => {
    setNewSearch(value);
  };

  const handleReset = () => {
    setNewSearch("");
  };

  const handleSearch = () => {
    let regex = new RegExp("^[a-zA-Z-]{3,20}$");

    setLoading(true);
    if (regex.test(NewSearch)) {
      Axios.get(`https://api.intra.42.fr/v2/users/${NewSearch}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(function (response: any) {
          setError(false);
          setLoading(false);
          setNewSearch("");
          navigation.navigate("Profile", { response: response });
        })
        .catch(function (error: string) {
          setError(true);
          setLoading(false);
        });
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background_home} style={styles.imageBackground}>
        {/* <ScrollView> */}
        <View style={styles.searchContainer}>
          <Image source={Logo_42_w} style={styles.imageLogo} />
          {/* <Text>USER</Text> */}
            <View style={{ position: "relative"}}>
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
                <TouchableOpacity
                    style={{ position: "absolute", right: 10, bottom: 57, width: 20, height: 20, backgroundColor: "#86ac94", borderRadius: 100 }}
                    onPress={() => handleReset()}
                >
                    <Text style={{ alignSelf: "center", color: "#476954", fontWeight: "bold", lineHeight: 17.5 }}>x</Text>
                </TouchableOpacity>
            </View>
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
