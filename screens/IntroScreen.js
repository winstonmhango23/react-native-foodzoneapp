import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import colors from "../config/colors";
  import SPACING from "../config/SPACING";
  
  const IntroSreen = () => {
    return (
      <ImageBackground
        style={{ flex: 1,  width: 390,
          height: 800 }}
        source={require("../assets/restaurant/chickensplash.jpg")}
      >
        <View style={{ flex: 1, backgroundColor: colors.black, opacity: 0.2 }} />
        <View
          style={{
            position: "absolute",
            height: "100%",
            zIndex: 2,
            width: "100%",
            justifyContent: "flex-end",
            paddingHorizontal: SPACING * 2,
            paddingBottom: SPACING * 5,
          }}
        >
          <View>
            <Text
              style={{
                color: colors.white,
                fontWeight: "900",
                fontSize: SPACING * 4.5,
                textTransform: "capitalize",
                margin: 20,
              }}
            >
              Food on Heels!
            </Text>
            <Text
              style={{
                color: colors.white,
                fontWeight: "600",
                fontSize: SPACING * 1.7,
                marginBottom: 15,
              }}
            >
              With Food On Heels, you search, select, and it will be delivered right
              at your office!
            </Text>
            <TouchableOpacity
              style={{
                padding: SPACING * 2,
                backgroundColor: colors.orangeColor,
                borderRadius: SPACING * 2,
                alignItems: "center",
                marginTop: SPACING * 3,
              }}
            >
              <Text
                style={{
                  color: colors.black,
                  fontSize: SPACING * 2,
                  fontWeight: "700",
                }}
              >
                Viiew Menu Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  };
  
  export default IntroSreen;
  
  
  