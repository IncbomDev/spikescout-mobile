import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Onboard = () => {
    return (
        <View style={styles.main}>
            <LinearGradient
                colors={['#A096FF', '#725FFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientBackground}
            >
                <View style={styles.heading}>
                    <Image style={styles.headingImage} source={require('./assets/onboard.png')} />
                </View>
            </LinearGradient>
            <View style={styles.popout}>
                {/* Your other elements here */}
            </View>


        </View>

    );
};


const styles = StyleSheet.create ({
    main: {
        flex: 1, // Ensure the component takes the entire screen
    },
    gradientBackground: {
        flex: 1, // Take the full space to act as a background
    },
    headingImage: {
        width: 406,
        height: 305,
        position: 'absolute',
        top: 50,
        left: -50,
        zIndex: 100000000,
    },

    heading: {
        
    },
    popout: {
        width: 375,
        height: 433,
        position: 'absolute',
        top: 379,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        overflow: 'hidden',
        zIndex: 100000000,
    },
    e1: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: '#725FFF',
        position: 'absolute',
        top: 326,
        left: 10,
        overflow: 'hidden',

    },
    e24: {
        width: 340,
        height: 340,
        position: 'absolute',
        top: 272,
        right: 179,
        backgroundColor: '#6C5CFF',
        overflow: 'hidden',
        borderRadius: 170,
    },
    e23: {
        width: 340,
        height: 340,
        position: 'absolute',
        top: 265,
        left: 94,
        backgroundColor: '#6652FF',
        overflow: 'hidden',
        borderRadius: 170, 
    },
    e2: {
        width: 46,
        height: 46,
        borderRadius: 23,
        position: 'absolute',
        top: 328,
        left: 62,
        overflow: 'hidden',
        backgroundColor: '#725FFF',
        zIndex: 5,

    },
    e4: {
        width: 46,
        height: 46,
        borderRadius: 23,
        position: 'absolute',
        top: 318,
        left: 178,
        overflow: 'hidden',
        backgroundColor: '#725FFF',
        zIndex: 5,
    }, 
    e1: {
        width: 46,
        height: 46,
        borderRadius: 23,
        position: 'absolute',
        top: 326,
        left: 10,
        overflow: 'hidden',
        backgroundColor: '#725FFF',
        zIndex: 5,
    }, 
    e5: {
        width: 46,
        height: 46,
        borderRadius: 23,
        position: 'absolute',
        top: 326,
        left: 227,
        overflow: 'hidden',
        backgroundColor: '#725FFF',
        zIndex: 5,
    }, 
    e6: {
        width: 46,
        height: 46,
        borderRadius: 23,
        position: 'absolute',
        top: 326,
        left: 293,
        overflow: 'hidden',
        backgroundColor: '#5A47FD',
        zIndex: 5,
    }, 
    e7: {
        width: 46,
        height: 46,
        borderRadius: 23,
        position: 'absolute',
        top: 322,
        left: 332,
        overflow: 'hidden',
        backgroundColor: '#725FFF',
        zIndex: 5,
    }, 
    e8: {
        width: 46,
        height: 46,
        borderRadius: 23,
        position: 'absolute',
        top: 328,
        left: 345,
        overflow: 'hidden',
        backgroundColor: '#5440F6',
        zIndex: 5,
    },
    e9: {
        width: 282,
        height: 282,
        borderRadius: 141,
        marginRight: 0,
        overflow: 'hidden',
        backgroundColor: '#A399FF',
        zIndex: 100,
    }
    
});
export default Onboard;
