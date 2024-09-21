import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
        style={StyleSheet.absoluteFillObject}
        start={[0.5, 0.8]}
      ></LinearGradient>

      <View style={styles.image}>
        <Image source={require("./images/lock.png")} style={styles.iconImage} />
      </View>
      
      <View style={styles.text}>
        <Text style={styles.title}>FORGET PASSWORD</Text>
        <Text style={styles.subTitle}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>

      
      <View style={styles.inputContainer}>
        <Image source={require("./images/mail.png")} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="gray"
        />
      </View>

      
      <TouchableOpacity style={styles.btnNext}>
        <Text style={styles.textBtn}>NEXT</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#B3E5FC",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    alignItems: "center",
    marginBottom: 50,
  },
  iconImage: {
    width: 80,
    height: 80,
  },
  text: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  btnNext: {
    backgroundColor: "#E3C000",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  textBtn: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

export default App;
