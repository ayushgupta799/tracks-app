import React, { useContext}from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);
    return <SafeAreaView>
        <Text style={{fontSize:48}}>AccountScreen</Text>
        <Button title="Sign out" onPress={signout} />
    </SafeAreaView>
};

const styles = StyleSheet.create({});

export default AccountScreen;