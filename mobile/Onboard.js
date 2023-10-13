import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Haptics from 'expo-haptics';
import * as LocalAuthentication from 'expo-local-authentication';



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
                    <View style={styles.selectedBar}>
                        <LinearGradient
                            colors={['#8B78FF', '#5451D6']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientBackground}
                        />
                    </View>
                    <View style={styles.step2}>
                        <LinearGradient
                            colors={['#A096FF', '#725FFF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientBackground}
                        />
                    </View>
                    <View style={styles.step3}>
                        <LinearGradient
                            colors={['#A096FF', '#725FFF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientBackground}
                        />
                    </View>
                <Text style={styles.welcome}>Your warehouse for FRC</Text>
                <Text style={styles.subText}>Let's get you started with SpikeScout mobile</Text>
                <Pressable onPress={() => {
                
                    styles.button.opacity = 1;

                    Haptics.notificationAsync(
                        Haptics.NotificationFeedbackType.Warning
                    )
                    }
                }>
                <View style={styles.button}>
                    
                    <LinearGradient
                        colors={['#8B78FF', '#5451D6']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradientBackground}
                    />
                    <Text style={styles.buttonText}>Get Started</Text>
                </View>
                </Pressable>
            </View>


        </View>

    );
};


const styles = StyleSheet.create ({
    main: {
        flex: 1, // Ensure the component takes the entire screen
    },
    gradientBackground: {
        width: '100%',
        height: '100%',
        flex: 1, // Take the full space to act as a background
    },
    headingImage: {
        width: 406,
        height: 305,
        position: 'absolute',
        top: 50,
        left: -15,
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
    selectedBar: {
        width: 25,
        height: 5,
        overflow: 'hidden',
        borderRadius: 13,
        marginTop: 9,
        marginLeft: 153,
    },
    step2: {
        position: 'relative',
        marginTop: -5,
        width: 5,
        height: 5,
        marginLeft: 183,
        borderRadius: 2.5,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    step3: {
        position: 'relative',
        marginTop: -5,
        width: 5,
        height: 5,
        marginRight: 5,
        borderRadius: 2.5,
        marginLeft: 193,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    welcome: {
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 37,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2F394B',
        fontFamily: 'Helvetica',  
    },
    subText: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 14,
        textAlign: 'center',
        color: '#8D8D8D',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        marginLeft: 35,
        marginRight: 30,
        width: 300,
        height: 60,
        borderRadius: 15,
        overflow: 'hidden',
    },
    buttonText: {
        position: 'absolute',
        top: 19,
        left: 95,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Helvetica',
    },    
});

export default Onboard;