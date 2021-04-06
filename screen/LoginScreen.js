import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Homescreen = () => {

  const navigation = useNavigation();

}

export default class App extends React.Component {
  state = {
    username: "",
    password: ""
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>เข้าสู่ระบบ POS</Text>
          <Text style={styles.texts}>
            ชื่อผู้ใช้งาน
          </Text>
            <View style={styles.inputView}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Username"
                  placeholderTextColor="white"
                  onChangeText={text => this.setState({ username: text })} 
                />
            </View>
          <Text style={styles.texts}>
            รหัสผ่าน
          </Text>
            <View style={styles.inputView}>
              <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="white"
                onChangeText={text => this.setState({ password: text })} 
              />
            </View>
        <TouchableOpacity style={styles.loginBtn} onPress={Homescreen}>
          <Text style={styles.loginText} >
              เข้าสู่ระบบ
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "black",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "gray",
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  texts: {
    width: "80%",
    justifyContent: 'flex-start',
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "black",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#108f88",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  }
  
});
