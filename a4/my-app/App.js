import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";


const LoginScreen = () => {
  return (
    <View style={styles.container}>
      

      <View style={styles.text}>
        <Text style={styles.title}>LOGIN</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="gray"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry={true}
        />
        <Image source={require("./images/eye.png")} style={styles.inputIcon} />
      </View>

      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.textBtn}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>When you agree to terms and conditions</Text>
      <Text style={styles.forgotPasswordText}>Forgot your password?</Text>

      <View style={styles.socialLoginContainer}>
        <Text style={styles.socialLoginText}>Or login with</Text>
        <View style={styles.socialIcons}>
          <Image source={require("./images/facebook.png")} style={styles.socialIcon} />
          <Image source={require("./images/zalo.png")} style={styles.socialIcon} />
          <Image source={require("./images/google.png")} style={styles.socialIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  btnLogin: {
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
  termsText: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    marginTop: 10,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "blue",
    textAlign: "center",
    marginTop: 10,
  },
  socialLoginContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  socialLoginText: {
    fontSize: 16,
    color: "black",
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
});

export default LoginScreen;
