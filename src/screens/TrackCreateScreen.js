import React,{useEffect, useState} from 'react'
import {View,StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'
import {SafeAreaView} from 'react-navigation';
import {requestPermissionsAsync} from 'expo-location';
import Map from '../components/Map'

const TrackCreateScreen = () => {
    const [err,setErr] = useState(null);
    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() =>{
        startWatching();
    },[]);

    return (
        <SafeAreaView forceInsert={{top: 'always'}} >
            <Text h2>create a new track</Text>
            <Map />
            {err ? <Text>Please enable location permissions</Text> : null }
        </SafeAreaView>
        );
};
TrackCreateScreen.navigationOptions = () => {
    return {
        headerShown: true
    };
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;