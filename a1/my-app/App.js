import { StatusBar } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.image}>
          <Image source={require("./images/circle.png")}></Image>
        </View>
        <View style={styles.text}>
          <View style={styles.text1}>
            <Text
              style={[
                { fontSize: 30 },
                { color: "black" },
                { fontWeight: "bold", textAlign:'center',width:300,height:100 },
              ]}
            >
              GROW YOUR BUSINESS
            </Text>
          </View>
          <View style={styles.text2}>
            <Text
              style={[
                { fontSize: 17 },
                { color: "black" },
                { fontWeight: "bold" },
                { textAlign: "center",paddingHorizontal:20  },
              ]}
            >
              We will help you to grow your business using online server
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textBtn}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSign}>
            <Text style={styles.textBtn}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.text3}>
          <Text style={[
            {fontSize :18},
            {color : "black"},
            {fontWeight: "bold", textAlign:'center',width:500,height:90}
          ]}>
            HOW WE WORK?
          </Text>
        </View>
    </View>
  );
};

const buttonStyle = {
  flex: 1,
  backgroundColor: "#E3C000",
  height: 50,
  marginHorizontal: 40,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 50,
  borderRadius: 10,
  backgroundColor: "#E3C000",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C7F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 3,
  },
  text1: {
    flex: 1,
    alignItems: "center",
    marginTop:10
  },
  text2: {
    width: "100%",
    flex: 1,
    marginHorizontal: 20,
    textAlign: "center",
    marginTop:40
  },
  text3:{
    flex: 3,
    alignItems: "center",
    marginTop:0
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 60,
  },
  btnLogin: {
    ...buttonStyle,
  },
  btnSign: {
    ...buttonStyle,
  },
  textBtn:{
    fontSize:17,
    fontWeight:'bold'
  },
});
export default App;