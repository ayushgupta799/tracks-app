import React, { useContext}from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import {FontAwesome} from '@expo/vector-icons';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);
    return <SafeAreaView>
        <Text style={{fontSize:48}}>AccountScreen</Text>
        <Button title="Sign out" onPress={signout} />
    </SafeAreaView>
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon : <FontAwesome name="gear" size={20} />
};

const styles = StyleSheet.create({});

export default AccountScreen;