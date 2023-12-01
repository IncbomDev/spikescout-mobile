import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, LayoutAnimation, Dimensions, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { Preloader } from './Preloader';
import { useCallback } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { TouchableOpacity } from 'react-native';

import {
    useResponsiveHeight,
    useResponsiveWidth,
    useDimensionsChange,
    useResponsiveFontSize
} from "react-native-responsive-dimensions";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
        
const App1 = ({ navigation }) => {
    const { height, width } = Dimensions.get('window');

    function percnetHeight(percent) {
        return (percent / 100) * height;
    }

    function percentWidth(percent) {
        return (percent / 100) * width;
    }

    /*const [fonts] = useFonts({
        'Product Sans': require('./assets/fonts/ProductSans.ttf')
    });*/
    function percentHeight(percent) {
        return (percent / 100) * height;
    }

    function percentWidth(percent) {
        return (percent / 100) * width;
    }

    function percentFontSize(percent) {
        return (percent / 100) * height;
    }

    const user = {
        fName: 'Nathan',
        lName: 'Edgington'
    }

    return (
        <GestureHandlerRootView>
            <ScrollView style={{border: '1px red solid'}}>
                {/* <PanGestureHandler onSwipePerformed={onSwipePerformed} gestureStyle={styles.swipesGestureContainer}> */}
                    <View style={{ height: height, width: width }}>
                        <View style={{ height: percentHeight(10), width: '100%', paddingTop: percentHeight(10) }}>
                            <Text style={{ fontSize: percentFontSize(2.5), textAlign: 'center', fontFamily: 'Rounded Mplus 1c', color: '#7F7F7F', fontWeight: 400, position: 'absolute', top: percentHeight(12), paddingLeft: percentWidth(5) }}>Thursday</Text>
                            <Text style={{ fontSize: percentFontSize(3), textAlign: 'center', fontFamily: 'Rounded Mplus 1c', color: '#040415', fontWeight: 900, position: 'absolute', top: percentHeight(15), paddingLeft: percentWidth(5) }}>12 October</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ position: 'absolute', top: percentHeight(13.5), right: percentWidth(10) }}>
                                <View style={{ width: percentWidth(6.5), height: percentWidth(6.5), borderRadius: percentWidth(6.5), backgroundColor: '#E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon name="search-outline" style={{ color: '#040415' }} size={percentWidth(4)} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{ fontSize: percentFontSize(3), textAlign: 'center', fontFamily: 'Rounded Mplus 1c', color: '#2F394B', fontWeight: 900, position: 'absolute', top: percentHeight(20), paddingLeft: percentWidth(3), paddingTop: percentHeight(2.5) }}>Hi, {user.fName}</Text>
                            <Text style={{ fontSize: percentFontSize(2), textAlign: 'center', fontFamily: 'Rounded Mplus 1c', color: '#7F7F7F', fontWeight: 400, position: 'absolute', top: percentHeight(25), paddingLeft: percentWidth(3), paddingTop: percentHeight(1.5) }}>1 Competition Upcoming.</Text>
                            <View style={{ width: percentWidth(100), height: percentHeight(10), display: 'flex', alignItems: 'center', position: 'absolute', top: percentHeight(31) }}>
                                <LinearGradient 
                                    colors={['#8B78FF', '#5451D6']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{ width: percentWidth(90), height: percentHeight(10), borderRadius: percentHeight(1), display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <TouchableOpacity onPress={() => navigation.navigate('Competition')} style={[{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', paddingLeft: percentWidth(2) }]}>
                                        <Text style={{ fontSize: percentFontSize(2), textAlign: 'left', fontFamily: 'Rounded Mplus 1c', color: '#FFFFFF', fontWeight: 900 }}>Montgomery</Text>
                                        <Text style={{ fontSize: percentFontSize(1.5), textAlign: 'left', fontFamily: 'Rounded Mplus 1c', color: '#fff', fontWeight: 400 }}>Starts in 2 days</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'left', alignItems: 'center' }}>
                                            <Icon name="person-circle" style={{ width: percentWidth(3), height: percentWidth(3), borderRadius: percentWidth(3), zIndex: 1, color: 'white' }} size={percentWidth(3)} />
                                            <Icon name="person-circle" style={{ width: percentWidth(3), height: percentWidth(3), borderRadius: percentWidth(3), marginLeft: percentWidth(-1.25), zIndex: 2, color: 'blue' }} size={percentWidth(3)} />
                                            <Icon name="person-circle" style={{ width: percentWidth(3), height: percentWidth(3), borderRadius: percentWidth(3), marginLeft: percentWidth(-1.25), zIndex: 3, color: 'red' }} size={percentWidth(3)} />
                                        </View>
                                        <Icon name="chevron-forward-outline" style={{ position: 'absolute', right: percentWidth(2), color: 'white' }} size={percentWidth(3)} />
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                            <Text style={{ fontSize: percentFontSize(3), textAlign: 'center', fontFamily: 'Rounded Mplus 1c', color: '#040415', fontWeight: 900, position: 'absolute', top: percentHeight(40), paddingLeft: percentWidth(3), paddingTop: percentHeight(1.5) }}>Monthly Preview</Text>
                            <View style={{ fontSize: percentFontSize(3), textAlign: 'left', fontFamily: 'Rounded Mplus 1c', color: '#000000', fontWeight: 200, position: 'absolute', top: percentHeight(90), paddingLeft: percentWidth(3), left: percentWidth(3), width: percentWidth(94), height: percentHeight(40), backgroundColor: 'purple', borderRadius: percentHeight(7) }}>
                                <Text style={{ color: 'black' }}>Montgomery</Text>
                            </View>
                            <View style={{ height: percentHeight(1000 )}} />
                        </View>
                        <View style={{ 
                            height: percentHeight(15),
                            width: width,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            position: 'fixed',
                            marginTop: percentHeight(100),
                            backgroundColor: '#fff',
                            borderTopWidth: 1, 
                            borderTopColor: '#ccc', 
                        }}>
                            <Icon name="home" />
                            <Icon name="calendar-outline"/>
                            <Icon name="chatbubble-ellipses-outline"/>
                            <Icon name="person-circle-outline"/>
                        </View>
                    </View>
                {/* </PanGestureHandler> */}
            </ScrollView>
        </GestureHandlerRootView>
    );

};

const styles = StyleSheet.create({
    swipesGestureContainer:{
        height:'100%',
        width:'100%'
    },
    body: {
        backgroundColor: '#fff',
    }
});

export default App1;
