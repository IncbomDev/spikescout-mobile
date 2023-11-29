import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, LayoutAnimation } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Preloader } from './Preloader';
import { useCallback } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
    useResponsiveHeight,
    useResponsiveWidth,
    useDimensionsChange,
    useResponsiveFontSize
} from "react-native-responsive-dimensions";
import { PanGestureHandler } from 'react-native-gesture-handler';

const onSwipePerformed = (action) => {
    /// action : 'left' for left swipe
    /// action : 'right' for right swipe
    /// action : 'up' for up swipe
    /// action : 'down' for down swipe
    
    switch(action){
      case 'left':{
        console.log('left Swipe performed');
        break;
      }
       case 'right':{
        console.log('right Swipe performed');
        break;
      }
       case 'up':{
        console.log('up Swipe performed');
        break;
      }
       case 'down':{
        console.log('down Swipe performed');
        break;
      }
       default : {
       console.log('Undeteceted action');
       }
    }
}

const App1 = ({ navigation }) => {
    const height = useResponsiveHeight(25);
    const width = useResponsiveWidth(25);

    useDimensionsChange(
        useCallback(({ window, screen }) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        }, [])
    );
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

    return (
        <ScrollView>
            <PanGestureHandler onSwipePerformed={onSwipePerformed} gestureStyle={styles.swipesGestureContainer}>
                <View style={{ height: height, width: width }}>
                    <View style={{ height: percentHeight(20), width: percentWidth(100), paddingTop: percentHeight(10) }}>
                        <Text style={{ fontSize: percentFontSize(10), textAlign: 'center', fontFamily: 'Rounded Mplus 1c', color: '#7F7F7F', fontWeight: 400, position: 'absolute', top: percentHeight(12), paddingLeft: percentWidth(5) }}>Thursday</Text>
                        <Text style={{ fontSize: percentFontSize(15), textAlign: 'center', fontFamily: 'Rounded Mplus 1c', color: '#040415', fontWeight: 900, position: 'absolute', top: percentHeight(15), paddingTop: percentHeight(7.5), paddingLeft: percentWidth(5) }}>12 October</Text>
                        <Text style={{ fontSize: percentFontSize(17.5), textAlign: 'center', fontFamily: 'Rounded Mplus 1c', color: '#2F394B', fontWeight: 900, position: 'absolute', top: percentHeight(50), paddingLeft: percentWidth(3) }}>Hi Nathan.</Text>
                        <Text style={{ fontSize: percentFontSize(10), textAlign: 'center', fontFamily: 'Rounded Mplus 1c', color: '#7F7F7F', fontWeight: 400, position: 'absolute', top: percentHeight(70), paddingLeft: percentWidth(3) }}>1 Competition Upcoming.</Text>
                    </View>
                </View>
            </PanGestureHandler>
        </ScrollView>
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
