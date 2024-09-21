import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
        style={StyleSheet.absoluteFillObject}
        start={[0.5, 0.8]}
      ></LinearGradient>
      <Text style={styles.title}>CODE</Text>
      <Text style={styles.subtitle}>VERIFICATION</Text>
      <Text style={styles.description}>Enter ontime password sent on ++849092605798</Text>
      
 
      <View style={styles.codeContainer}>
        {Array(6).fill(0).map((_, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(value) => {
              const newCode = code.split('');
              newCode[index] = value;
              setCode(newCode.join(''));
            }}
          />
        ))}
      </View>

     
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
  },
  title: {
    flex:1,
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  subtitle: {
    flex:1,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  description: {
    flex:2,
    fontSize: 15,
    textAlign: 'center',
  },
  codeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  codeInput: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 0,
  },
  verifyButton: {
    backgroundColor: '#E3C000',
    width: '100%',
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default App;
