import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App1 = () => {

    return (
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
                <View style={styles.footer}>
                    <Icon name="home" style={styles.icon1} size={24} color="#8b78ff" />
                    <Icon name="calendar" style={styles.icon2} size={23} />
                    <Icon name="paperclip" style={styles.icon3} size={24} />
                    <Icon name="user" style={styles.icon4} size={24} />

                </View>
                
        </View>
    );
};


const styles = StyleSheet.create({
    date: {
        fontSize: 14,
        color: '#7F7F7F',
        textAlign: 'left',
        marginLeft: 24,
        marginTop: 60, 
        fontWeight: 400,
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
        fontWeight: 700,
        letterSpacing: 0.5,
    },
    circle: {
        width: 56,
        height: 56,
        borderRadius: 28, // Half of the width and height to create a circle
        borderWidth: 1, // Width of the outline
        borderColor: '#adadad', // Color of the outline
        justifyContent: 'center', // Optional: Center the content vertically
        alignItems: 'center', // Optional: Center the content horizontally
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
        fontWeight: 700,
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
        fontWeight: 700,
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
        top: 700,
        marginBottom: 20,
        backgroundColor: '#F8F6FF',
        width: '90%',
        alignSelf: 'center',
        height: 88,
        borderRadius: 25,
    },
    icon1: {
        marginTop: 34,
        marginLeft: 34.5,
        width: 19,
        height: 20,
    },
    icon2: {
        marginTop: -20,
        marginLeft: 128,
        opacity: 0.1,
    },
    icon3: {
        marginTop: -22,
        marginLeft: 224,
        opacity: 0.1,
    },
    icon4: {
        marginTop: -22,
        marginLeft: 300,
        opacity: 0.1,
    }
});

export default App1;
