import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {verticalScale} from '../Dimensions/Metric';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
 


  //  Check email format
  const handleCheckEmail = userEmail => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(userEmail);
    if (re.test(userEmail) || regex.test(userEmail)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  //Login Logic
  const Login = () => {
    if (email && password) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/user-not-found') {
            setError('This mail is not register!');
          }

          if (error.code === 'auth/wrong-password') {
            setError('Please enter correct password!');
          }
        });
    } else {
      alert('please enter Valid Details');
    }
  };

  return (
    <KeyboardAvoidingView behavior="height">
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <View style={styles.MainContainer}>
          <Image
            style={styles.tinyLogo3}
            source={{
              uri: 'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000',
            }}
          />
        </View>
        <Text style={styles.container}>Blockchain</Text>
        <Text style={styles.container2}>
          Welcome! Please login your account.
        </Text>

        <View style={{marginTop: verticalScale(35)}}>
          <Text style={{paddingLeft: 17, fontSize: 20, color: 'black'}}>
            Username
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={userEmail => handleCheckEmail(userEmail)}
            placeholder="Enter your username"
            value={email}
            autoFocus={true}
          />
            {checkValidEmail && email ? (
          <Text
            style={{
              paddingRight: 17,
              color: 'red',
              fontSize: 12,
              marginTop: -12,
              textAlign: 'right',
            }}>
            Wrong format email.
          </Text>
        ) : null}
          <Text style={{paddingLeft: 17, fontSize: 20, color: 'black'}}>
            Password
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={userPassword => setPassword(userPassword)}
            value={password}
            placeholder="Enter your password"
            maxLength={6}
            secureTextEntry={true}
          />
          {password && password.length!==6?(
          <Text
            style={{
              fontSize: 12,
              paddingLeft: 17,
              marginTop: -10,
              color: 'red',
            }}>
            Password must be in 6 charecters only.
          </Text>):null}
          
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('forget')}>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 15,
                color: 'blue',
                paddingRight: 15,
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: 'red',
              fontSize: 15,
              textAlign: 'center',
              paddingTop: 5,
            }}>
            {error}
          </Text>
          <TouchableOpacity onPress={Login} activeOpacity={0.8}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{textAlign: 'center', marginTop: 20, color: 'blue'}}>
              Don`t have an account? create here.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    margin: 0,
    padding: 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    width: 370,
    height: 40,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    color: 'white',
    marginTop: verticalScale(15),
  },
  tinyLogo3: {
    marginTop: verticalScale(25),
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  container: {
    marginTop: verticalScale(15),
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
  },
  container2: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
  },
});

export default LoginScreen;
