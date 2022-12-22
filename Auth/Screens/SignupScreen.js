import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(null);
  const [confirmpassword, setConfirmPassword] = useState(null);
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

  //Signup Logic
  const signup = () => {
    if (email && password && confirmpassword && password==confirmpassword) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          alert('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setError('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            setError('That email address is invalid!');
          }
        });
    } else {
      alert('Please enter correct details');
    }
  };

  return (
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
        Welcome! Please register your account.
      </Text>

      <View style={{marginTop: 25}}>
        <Text style={{paddingLeft: 17, fontSize: 20, color: 'black'}}>
          Username
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={userEmail => handleCheckEmail(userEmail)}
          placeholder="Enter your username"
          value={email}
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
          secureTextEntry={true}
          maxLength={6}
        />
        {password && password.length !== 6 ? (
          <Text
            style={{
              fontSize: 12,
              paddingLeft: 17,
              marginTop: -10,
              color: 'red',
            }}>
            Password must be in 6 charecters only.
          </Text>
        ) : null}
        <Text style={{paddingLeft: 17, fontSize: 20, color: 'black'}}>
          Confirm password
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={userConfirmPassword =>
            setConfirmPassword(userConfirmPassword)
          }
          value={confirmpassword}
          placeholder="Enter your password"
          secureTextEntry={true}
          maxLength={6}
        />
        {password !== confirmpassword && confirmpassword ? (
          <Text
            style={{
              fontSize: 12,
              paddingLeft: 17,
              marginTop: -10,
              color: 'red',
            }}>
            password and confirm password are not in same.
          </Text>
        ) : null}

        <TouchableOpacity onPress={signup} activeOpacity={0.8}>
          <Text style={styles.button}>Signup </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{textAlign: 'center', marginTop: 20, color: 'blue'}}>
            Already have an account! Login here.
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{color: 'red', fontSize: 10, textAlign: 'center'}}>
        {error}
      </Text>
    </View>
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
    marginTop: 15,
  },
  tinyLogo3: {
    marginTop: 20,
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  container: {
    marginTop: 10,
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

export default SignupScreen;
