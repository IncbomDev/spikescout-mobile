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
import { SafeAreaView } from 'react-native';
        
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
        fName: 'Gaylord',
        lName: 'Edge'
    }

    return (
        <SafeAreaView>
            <GestureHandlerRootView>
                <ScrollView>
                    {/* <PanGestureHandler onSwipePerformed={onSwipePerformed} gestureStyle={styles.swipesGestureContainer}> */}
                        <View style={{ height: percentHeight(85), width: width }}>
                            <LinearGradient
                                colors={['#fff', '#F8F6FF ']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={{ height: height, width: width }}
                            >
                                <View style={{ height: percentHeight(10), width: '100%', paddingTop: percentHeight(10) }}>
                                    <Text style={{ fontSize: percentFontSize(2.5), textAlign: 'center', fontFamily: 'Rounded Mplus 1c', color: '#7F7F7F', fontWeight: 400, position: 'absolute', top: percentHeight(7), paddingLeft: percentWidth(5) }}>Thursday</Text>
                                    <Text style={{ fontSize: percentFontSize(3), textAlign: 'center', fontFamily: 'Rounded Mplus 1c', color: '#040415', fontWeight: 900, position: 'absolute', top: percentHeight(10), paddingLeft: percentWidth(5) }}>12 October</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ position: 'absolute', top: percentHeight(8.5), right: percentWidth(10) }}>
                                        <View style={{ width: percentWidth(6.5), height: percentWidth(6.5), borderRadius: percentWidth(6.5), backgroundColor: '#E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Icon name="search-outline" style={{ color: '#040415' }} size={percentWidth(4)} />
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: percentFontSize(3), textAlign: 'center', fontFamily: 'Rounded Mplus 1c', color: '#2F394B', fontWeight: 900, position: 'absolute', top: percentHeight(15), paddingLeft: percentWidth(3), paddingTop: percentHeight(2.5) }}>Hi, {user.fName}</Text>
                                    <Text style={{ fontSize: percentFontSize(2), textAlign: 'center', fontFamily: 'Rounded Mplus 1c', color: '#7F7F7F', fontWeight: 400, position: 'absolute', top: percentHeight(20), paddingLeft: percentWidth(3), paddingTop: percentHeight(1.5) }}>1 Competition Upcoming.</Text>
                                    <View style={{ width: percentWidth(100), height: percentHeight(10), display: 'flex', alignItems: 'center', position: 'absolute', top: percentHeight(26) }}>
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
                                    <Text style={{ fontSize: percentFontSize(3), textAlign: 'center', fontFamily: 'Rounded Mplus 1c', color: '#040415', fontWeight: 900, position: 'absolute', top: percentHeight(36.5), paddingLeft: percentWidth(3), paddingTop: percentHeight(1.5) }}>Monthly Preview</Text>
                                    <View style={{ width: percentWidth(100), height: percentHeight(26), position: 'absolute', top: percentHeight(43) }}>
                                        <View style={{ width: percentWidth(100), height: percentHeight(36), flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ width: '50%', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <View style={{ width: '85%', height: percentHeight(20), borderRadius: percentHeight(1), marginBottom: percentHeight(2) }}>
                                                    <LinearGradient
                                                        colors={['#A9FFEA', '#00B288']}
                                                        start={{ x: 0, y: 0 }}
                                                        end={{ x: 0, y: 1 }}
                                                        style={{ width: '100%', height: percentHeight(20), borderRadius: percentHeight(1), marginBottom: percentHeight(2), display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                                    >
                                                        <Text style={{ fontSize: percentFontSize(4), fontFamily: 'Rounded Mplus 1c', color: '#FFFFFF', fontWeight: 900 }}>22</Text>
                                                        <Text style={{ fontSize: percentFontSize(1.5), fontFamily: 'Rounded Mplus 1c', color: '#FFFFFF', fontWeight: 400 }}>Scouting Sheets Made</Text>
                                                    </LinearGradient>
                                                </View>
                                                <View style={{ width: '85%', height: percentHeight(16), borderRadius: percentHeight(1) }}>
                                                    <LinearGradient
                                                        colors={['#FFA0BC', '#FF1B5E']}
                                                        start={{ x: 0, y: 0 }}
                                                        end={{ x: 0, y: 1 }}
                                                        style={{ width: '100%', height: percentHeight(16), borderRadius: percentHeight(1), display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                                    >
                                                        <Text style={{ fontSize: percentFontSize(4), fontFamily: 'Rounded Mplus 1c', color: '#FFFFFF', fontWeight: 900 }}>12</Text>
                                                        <Text style={{ fontSize: percentFontSize(1.5), fontFamily: 'Rounded Mplus 1c', color: '#FFFFFF', fontWeight: 400 }}>Ongoing</Text>
                                                    </LinearGradient>
                                                </View>
                                            </View>
                                            <View style={{ width: '50%', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <View style={{ width: '85%', height: percentHeight(20), borderRadius: percentHeight(1) }}>
                                                    <LinearGradient
                                                        colors={['#FFD29D', '#FF9E2D']}
                                                        start={{ x: 0, y: 0 }}
                                                        end={{ x: 0, y: 1 }}
                                                        style={{ width: '100%', height: percentHeight(16), borderRadius: percentHeight(1), display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                                    >
                                                        <Text style={{ fontSize: percentFontSize(4), fontFamily: 'Rounded Mplus 1c', color: '#FFFFFF', fontWeight: 900 }}>1</Text>
                                                        <Text style={{ fontSize: percentFontSize(1.5), fontFamily: 'Rounded Mplus 1c', color: '#FFFFFF', fontWeight: 400 }}>Comp. Completed</Text>
                                                    </LinearGradient>
                                                </View>
                                                <View style={{ width: '85%', height: percentHeight(20), borderRadius: percentHeight(1) }}>
                                                    <LinearGradient
                                                        colors={['#B1EEFF', '#29BAE2']}
                                                        start={{ x: 0, y: 0 }}
                                                        end={{ x: 0, y: 1 }}
                                                        style={{ width: '100%', height: percentHeight(20), borderRadius: percentHeight(1), display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                                    >
                                                        <Text style={{ fontSize: percentFontSize(4), fontFamily: 'Rounded Mplus 1c', color: '#FFFFFF', fontWeight: 900 }}>1</Text>
                                                        <Text style={{ fontSize: percentFontSize(1.5), fontFamily: 'Rounded Mplus 1c', color: '#FFFFFF', fontWeight: 400 }}>Comp. Upcoming</Text>
                                                    </LinearGradient>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ height: percentHeight(1000 )}} />
                                </View>
                            </LinearGradient>
                        </View>
                    {/* </PanGestureHandler> */}
                </ScrollView>
                <View style={{ 
                    height: percentHeight(15),
                    width: width,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    borderTopWidth: 1,
                    borderTopColor: '#ccc',
                }}>
                    <Icon style={{ color: 'black' }}name="home" />
                    <Icon name="calendar-outline"/>
                    <Icon name="chatbubble-ellipses-outline"/>
                    <Icon name="person-circle-outline"/>
                </View>
            </GestureHandlerRootView>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    swipesGestureContainer:{
        height:'100%',
        width:'100%'
    },
    body: {
        backgroundColor: '#fff',
    }
});

export default App1;
