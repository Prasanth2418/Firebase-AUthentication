import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const ForgetPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState(null);
  const Forgetpassword = () => {
    if (email) {
      auth()
        .sendPasswordResetEmail(email)
        .then(() =>
          setMsg(
            'Password reset mail sent successfully! Please check your inbox',
          ),
        )
        .catch(error => {
          if (error.code === 'auth/user-not-found') {
            setError('please enter correct email address!');
          }
        });
    } else {
      alert('Please enter user mail id');
    }
  };
  return (
    <View>
      <View>
        <Text style={{textAlign: 'center', color: 'red', fontSize: 15}}>
          {error}
        </Text>
        <Text style={{textAlign: 'center', color: 'green', fontSize: 15}}>
          {msg}
        </Text>
        <Text
          style={{
            marginTop: 100,
            fontSize: 25,
            color: 'black',
            paddingLeft: 10,
          }}>
          Reset password?
        </Text>
        <Text style={{fontSize: 15, paddingLeft: 10, fontWeight: 'normal'}}>
          Not to worry! Enter email address associated with your account and
          we’ll send a link to reset your password.
        </Text>
      </View>
      <View style={{marginTop: 40}}>
       
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
          }}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholder="Enter your email"
          value={email}
        />
      </View>
      <TouchableOpacity onPress={Forgetpassword} activeOpacity={0.8}>
        <Text
          style={{
            backgroundColor: 'blue',
            width: 370,
            height: 40,
            fontSize: 20,
            textAlign: 'center',
            textAlignVertical: 'center',
            alignSelf: 'center',
            borderRadius: 5,
            color: 'white',
            marginTop: 10,
          }}>
          Processed
        </Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{textAlign: 'center', marginTop: 20, color: 'blue'}}>
            Go back your login page? Click here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;
