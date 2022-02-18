import React from "react";
import { View, Image, Text, StyleSheet, ImageBackground } from "react-native";

const bgImage = require("../assets/home_image.jpg");
const styles = require("../Styles.js");

const Home = props => {
  return (
    <View>
      <ImageBackground source={bgImage} style={styles.bgImage}>
        <Text>Dog's Best Friend</Text>
        <Text>
          The app that helps you support NYC shelter dogs even if you can't
          adopt.{" "}
        </Text>
      </ImageBackground>
    </View>
  );
};
export default Home;
