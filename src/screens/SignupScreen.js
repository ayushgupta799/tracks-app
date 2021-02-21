import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

const SignupScreen = ({navigation}) => {
    return (
        <>
        <Text style={{fontSize:48}}>SignupScreen</Text>
        <Button title="Go to Sign In Screen" onPress={() => navigation.navigate('Signin')} />
        </>
    );
};

const styles = StyleSheet.create({});

export default SignupScreen;