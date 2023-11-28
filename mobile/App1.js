import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Preloader } from './Preloader';

import {
    useResponsiveHeight,
    useResponsiveWidth
} from "react-native-responsive-dimensions";

const App1 = () => {
    /*const [fonts] = useFonts({
        'Product Sans': require('./assets/fonts/ProductSans.ttf')
    });*/
    return (
        <ScrollView>
            <Preloader />
            <View style={{backgroundColor: '#f2f2f2'}}>
                <Text style={styles.date}>Thursday</Text>
                <Text style={styles.day}>12 October</Text>
                <View style={[styles.circle]}>
                    <Icon name="search" size={20} color="#040415" />
                </View>
                <Image style={styles.pfp} source={require('./assets/avatars/1.png')} />
                <View style={[styles.notificon, {backgroundColor: 'black'}]}>
                </View>
                <Text style={styles.name}>Hi Nathan.</Text>
                <Text style={styles.competitions}>1 Competition Upcoming</Text>
                <View style={styles.compBox}>
                    <LinearGradient
                    colors={['#8B78FF', '#5451D6']}
                    style={styles.gradientBackground}
                    />
                    <Text style={styles.nextComp}>Montgomery</Text>
                    <Text style={styles.nextCompDate}>October 15</Text>
                    <Text style={styles.nextCompDateRelitive}>In 3 days</Text>
                    <View style={styles.row}>
                        <Image style={styles.rsvpAvatars} source={require('./assets/avatars/1.png')} />
                        <Image style={[styles.rsvpAvatars, styles.overlappingAvatar]} source={require('./assets/avatars/2.png')} />
                    </View>
                </View>
                <Text style={styles.monthlyPreview}>Monthly Preview</Text>
                <View style={styles.scoutingStat}> 
                    <LinearGradient
                            colors={['#A9FFEA', '#00B288']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientBackground}
                    />
                        <Text style={styles.scoutingNum}>22</Text>
                        <Text style={styles.scoutingNumSub}>Scouting Sheets Made</Text>
                </View>
                <View style={styles.compsCompleted}>
                        <LinearGradient
                            colors={['#FFD29D', '#FF9E2D']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientBackground}
                        />
                        <Text style={styles.compsCompletedNum}>1</Text>
                        <Text style={styles.compsCompletedNumSub}>Competition Completed</Text>
                </View>
                    <View style={styles.placeholderBox1}> 
                        <LinearGradient
                                colors={['#FFA0BC', '#FF1B5E']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradientBackground}
                            />
                            <Text style={styles.placeholderText1}>12</Text>
                            <Text style={styles.placeholderTextSub1}>Ongoing</Text>
                    </View>
                    <View style={styles.placeholderBox2}>
                        <LinearGradient
                                colors={['#B1EEFF', '#29BAE2']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradientBackground}
                            />
                            <Text style={styles.placeholderText2}>14</Text>
                            <Text style={styles.placeholderTextSub2}>Waiting For Review</Text>
                    </View>
                <View style={styles.dailyCalendar}>
                    <Text style={styles.dateCal}>October 12</Text>
                    <View style={{ height: 41, width: 4, borderRadius: 16, backgroundColor: '#4318FF', marginLeft: 28, marginTop: 30 }} />
                        <Text style={styles.event1Text}>Meet w/ Sullivan</Text>
                        <Text style={styles.event1Date}>01:00 PM - 02:00 PM</Text>
                        <View style={{ height: 41, width: 4, borderRadius: 16, backgroundColor: '#4318FF', marginLeft: 28, marginTop: 24 }} />
                            <Text style={styles.event2Text}>Prepare Autobalance</Text>
                            <Text style={styles.event2Date}>02:00 PM - 03:00 PM</Text>
                            <View style={{ height: 41, width: 4, borderRadius: 16, backgroundColor: '#4318FF', marginLeft: 28, marginTop: 24 }} />
                                <Text style={styles.event3Text}>Talk with Team</Text>
                                <Text style={styles.event3Date}>03:00 PM - 04:00 PM</Text>
                                <Text style={styles.viewCal}>View Calendar</Text>
                                <Icon name="chevron-right" style={{marginLeft:310, marginTop: -17}} size={20} color="#4318FF" />
                            </View>
                            <View style={styles.upgrade}>
                                <View style={styles.iconOutline}>
                                    <Icon name="lock" size={50} color="#4318FF" style={styles.iconLock} />
                                    <Text style={styles.upgradeTo}>Upgrade to</Text>
                                        <View style={styles.proBackground}>
                                            <Text style={styles.proText}> PRO </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.footer}>
                                    <Icon name="home" style={styles.icon1} size={24} color="#8b78ff" />
                                    <Icon name="calendar" style={styles.icon2} size={23} />
                                    <Icon name="paperclip" style={styles.icon3} size={24} />
                                    <Icon name="user" style={styles.icon4} size={24} />
                                </View>
                <Text style={{marginTop: 1150}}> </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, // Make sure the content grows to fill the ScrollView
      },
    
    date: {
        fontSize: 14,
        color: '#7F7F7F',
        textAlign: 'left',
        marginLeft: useResponsiveWidth(5),
        marginTop: useResponsiveHeight(7.5), 
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        letterSpacing: 0.2,
    },
    day: {
        fontSize: 24,
        color: '#040415',
        textAlign: 'left',
        marginLeft: 24,
        marginTop: 0,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    circle: {
        width: 56,
        height: 56,
        borderRadius: 28, // Half of the width and height to create a circle
        borderWidth: 1, // Width of the outline
        borderColor: '#adadad', // Color of the outline
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 96,
        top: 60,
    },
    pfp: {
        width: 56,
        height: 56,
        position: 'absolute',
        right: 26,
        top: 60,
    },
    notificon: {
        width: 7.304,
        height: 7.304,
        position: 'absolute',
        right: 27.65,
        top: 63.65,
        borderRadius: 3.652,
        borderWidth: 1,
        borderColor: 'grey',
    },
    name: {
        fontSize: 28,
        textAlign: 'left',
        marginLeft: 16,
        marginTop: 36,
        color: '#2F394B',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        letterSpacing: -0.5,
        lineHeight: 45,
    },
    competitions: {
        fontSize: 14,
        textAlign: 'left',
        marginLeft: 16,
        marginTop: 0,
        color: '#8D8D8D',
        fontWeight: 400,
        fontFamily: 'Helvetica',
        letterSpacing: 0.2,
    },
    compBox: {
        width: 343,
        height: 93,
        borderRadius: 15,
        marginLeft: 16,
        marginTop: 23,
        overflow: 'hidden',
    },
    gradientBackground: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    },
    nextComp: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'left', 
        marginLeft: 15,
        marginTop: 14,
        fontWeight: 700,
        fontFamily: 'Helvetica',
        letterSpacing: 0.2,
    },
    nextCompDate: {
        fontSize: 10,
        color: '#FFFFFF',
        textAlign: 'left',
        marginLeft: 15,
        marginTop: 4,
        fontWeight: 400,
        fontFamily: 'Helvetica',
        letterSpacing: 0.2,
    },
    nextCompDateRelitive: {
        fontSize: 10,
        width: 50,
        color: '#FFFFFF',
        textAlign: 'left',
        position: 'absolute',
        bottom: 14,
        right: 20,
        fontWeight: 400,
        marginTop: 16,
        fontFamily: 'Helvetica',
        letterSpacing: 0.2,
    },
    rsvpAvatars: {
        width: 35,
        height: 35,
        borderRadius: 20,
        marginTop: -25,
        marginLeft: 15,
      },
    row: {
        marginTop: 25,
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -5,
    }, 
    overlappingAvatar: {
        marginLeft: -15, 
    },
    monthlyPreview: {
        fontSize: 24,
        color: '#000',
        textAlign: 'left',
        marginLeft: 16,
        marginTop: 25,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        backgroundColor: '#f2f2f2',
    },
    scoutingStat: {
        width: 162,
        height: 150,
        borderRadius: 15,
        position: 'absolute',
        top: 418,
        left: 16,
        overflow: 'hidden',
    },
    scoutingNum: {
        marginTop: 40,
        width: 162,
        fontSize: 36,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 700,
        fontFamily: 'Helvetica',
    },
    scoutingNumSub: {
        fontSize: 14,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 400,
        marginTop: 10,
        fontFamily: 'Helvetica',
    },
    compsCompleted: {
        width: 161,
        height: 105,
        borderRadius: 15,
        position: 'absolute',
        right: 16,
        top: 418,
        overflow: 'hidden',
    },
    compsCompletedNum: {
        fontSize: 36,
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        color: 'white',
        width: 162,
    },
    compsCompletedNumSub: {
        fontSize: 14,
        fontWeight: 400,
        marginTop: 5,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Helvetica',
    },
    placeholderBox1: {
        position: 'absolute',
        left: 16,
        top: 581,
        width: 162,
        height: 105,
        borderRadius: 15,
        overflow: 'hidden',
    },
    placeholderText1: {
        fontSize: 36,
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        color: 'white',
        width: 162,
    },
    placeholderTextSub1: {
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Helvetica',
    },
    placeholderBox2: {
        position: 'absolute',
        right: 16,
        top: 536,
        width: 161,
        height: 150,
        borderRadius: 15,
        overflow: 'hidden',
    },
    placeholderText2: {
        fontSize: 36,
        marginTop: 45,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        color: 'white',
        width: 162,
    },
    placeholderTextSub2: {
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Helvetica',
    },
    footer: {
        position: 'absolute',
        top: 1423,
        marginBottom: 20,
        backgroundColor: '#F8F6FF',
        width: 337,
        alignSelf: 'center',
        height: 88,
        borderRadius: 25,
    },
    icon1: {
        marginTop: 34,
        marginLeft: 35,
        width: 19,
        height: 20,
    },
    icon2: {
        marginTop: -20,
        marginLeft: 120,
        opacity: 0.1,
    },
    icon3: {
        marginTop: -22,
        marginLeft: 210,
        opacity: 0.1,
    },
    icon4: {
        marginTop: -22,
        marginLeft: 290,
        opacity: 0.1,
    },
    dailyCalendar: {
        width: 350,
        height: 345,
        position: 'absolute',
        top: 701,
        left: 13,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    dateCal: {
        fontSize: 34,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        color: '#1B2559',
        textAlign: 'left',
        marginLeft: 28,
        marginTop: 22,
    },
    event1Text: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        color: '#1B2559',
        textAlign: 'left',
        marginLeft: 42,
        marginTop: -40,
    },
    event1Date: {
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'Helvetica',
        color: '#1B2559',
        textAlign: 'left',
        marginLeft: 42,
        marginTop: 3,
    },
    event2Text: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        color: '#1B2559',
        textAlign: 'left',
        marginLeft: 42,
        marginTop: -40,
    },
    event2Date: {
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'Helvetica',
        color: '#1B2559',
        textAlign: 'left',
        marginLeft: 42,
        marginTop: 3,
    },
    event3Text: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        color: '#1B2559',
        textAlign: 'left',
        marginLeft: 42,
        marginTop: -40,
    },
    event3Date: {
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'Helvetica',
        color: '#1B2559',
        textAlign: 'left',
        marginLeft: 42,
        marginTop: 3,
    }, 
    viewCal: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        color: '#4318FF',
        textAlign: 'left',
        marginLeft: 193,
        marginTop: 60,
    },
    upgrade: {
        width: 350,
        height: 345,
        position: 'absolute',
        top: 1062,
        left: 13,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    iconOutline: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 34,
        marginLeft: 125,
        backgroundColor: '#F8F6FF',
    },
    iconLock: {
        marginTop: 24,
        marginLeft: 35,
    },
    upgradeTo: {
        marginLeft: -30,
        marginTop: 28,
        fontSize: 20,
        color: '#1B2559',
        fontWeight: 'bold',
    },
    proBackground: {
        width: 52,
        height: 19,
        borderRadius: 11,
        backgroundColor: '#F2B252',
        position: 'relative',
        marginTop: -20,
        marginLeft: 80,
    },
    proText: {
        fontSize: 15,
        color: '#1B2559',
        marginTop: 0,
        marginLeft: 7,
        fontWeight: 'bold',
    }
});

export default App1;
