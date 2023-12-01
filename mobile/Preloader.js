import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
// import './styles/preloader.css';

class Preloader extends Component {
  componentDidMount() {
    const textElement = document.querySelector('.text');

    textElement.style.visibility = 'hidden';

    setTimeout(() => {
      textElement.style.visibility = 'visible';
      textElement.style.opacity = '1';
    }, 4000); 
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.splash}>
          <View style={styles.splash_logo}>
            <Text style={styles.text}>SpikeScout</Text>
          </View>
          <View style={styles.splash_svg}>
            <Svg width="100%" height="100%">
              <Rect width="100%" height="100%" />
            </Svg>
          </View>
          <View style={styles.splash_minimize}>
            <Svg width="100%" height="100%">
              <Rect width="100%" height="100%" />
            </Svg>
          </View>
        </View>
        <View style={styles.text}>
          <Text style={styles['text p']}>Duis quis</Text>
          <Text style={[styles['text p'], styles['text p:nth-child(2)']]}>nec sapien</Text>
          <TouchableOpacity style={styles['text button']}>
            <Text>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#191919',
    fontFamily: 'Open Sans, sans-serif',
  },
  text: {
    opacity: 0,
    position: 'absolute',
    zIndex: 7,
    textAlign: 'left',
    margin: -50,
    width: 300,
    height: 100,
    top: '50%',
    left: '50%',
    fontSize: 48,
    fontWeight: '700',
    animationDuration: 4000,
    animationFillMode: 'forwards',
  },
  'text p': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%',
    animationDuration: '3.7s',
    animationIterationCount: 1,
    animationTimingFunction: 'steps(60, end)',
  },
  'text p:nth-child(2)': {
    animationName: 'type2',
    animationDuration: '3.7s',
  },
  'text button': {
    border: 0,
    opacity: 0,
    backgroundColor: '#191919',
    color: '#f5d300',
    borderWidth: 1,
    letterSpacing: 2,
    paddingVertical: 0.5,
    paddingHorizontal: 2.5,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transitionProperty: 'color, background-color',
    transitionDuration: '0.5s',
    animationDuration: '0.6s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
  },
  'text button:hover': {
    backgroundColor: '#f5d300',
    color: '#191919',
    borderWidth: 1,
  },
  splash: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    display: 'flex',
    overflow: 'hidden',
  },
  splash_logo: {
    position: 'absolute',
    margin: -15,
    top: '50vh',
    zIndex: 5,
    left: '50vw',
    width: 50,
    textAlign: 'center',
    height: 30,
    fontSize: 26,
    fontWeight: '600',
    color: '#ffffff',
    opacity: 1,
    willChange: 'opacity',
    animationDuration: '0.3s',
    animationTimingFunction: 'ease-in',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
  },
  'splash_logo:before': {
    display: 'block',
    position: 'absolute',
    left: 15,
    bottom: -5,
    width: 20,
    height: 1,
    backgroundColor: '#757474',
    content: '""',
  },
  'splash_logo:after': {
    display: 'block',
    position: 'absolute',
    left: 15,
    top: -5,
    width: 20,
    height: 1,
    backgroundColor: '#757474',
    content: '""',
    willChange: 'width',
  },
  splash_svg: {
    position: 'relative',
    margin: 'auto',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bottom: 0,
    right: 0,
  },
  'splash_svg svg': {
    width: '100%',
    height: '100%',
    backfaceVisibility: 'visible',
  },
  'splash_svg rect': {
    width: '100%',
    height: '100%',
    fill: '#f5d300',
    stroke: 0,
    clipPath: 'polygon(45vw 40vh, 55vw 40vh, 55vw 60vh, 45vw 60vh)',
    animationDuration: '0.7s',
    animationTimingFunction: 'ease-in',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
  },
  splash_minimize: {
    position: 'absolute',
    margin: 'auto',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 4,
  },
  'splash_minimize svg': {
    width: '100%',
    height: '100%',
    backfaceVisibility: 'visible',
  },
  'splash_minimize rect': {
    width: '100%',
    height: '100%',
    clipPath: 'polygon(0vw 0vh, 100vw 0vh, 100vw 100vh, 0vw 100vh)',
    animationDuration: '0.2s',
    animationTimingFunction: 'ease-out',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
  },
  '@keyframes scale': {
    '100%': {
      clipPath: 'polygon(45vw 40vh, 55vw 40vh, 55vw 60vh, 45vw 60vh)',
    },
  },
  '@keyframes hide': {
    '100%': {
      fill: 'transparent',
    },
  },
  '@keyframes off': {
    '100%': {
      opacity: 0,
    },
  },
  '@keyframes on': {
    '100%': {
      opacity: 1,
    },
  },
  '@keyframes logo': {
    '100%': {
      color: '#292929',
    },
  },
  '@keyframes type': {
    '0%': {
      width: 0,
    },
  },
  '@keyframes type2': {
    '0%': {
      width: 0,
    },
    '50%': {
      width: 0,
    },
    '100%': {
      width: 100,
    },
  },
  '@keyframes expand': {
    '25%': {
      clipPath: 'polygon(0vw 0vh, 55vw 40vh, 55vw 60vh, 45vw 60vh)',
      fill: 'white',
    },
    '50%': {
      clipPath: 'polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 45vw 60vh)',
      fill: '#f5d300',
    },
    '75%': {
      clipPath: 'polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 0vw 100vh)',
      fill: 'white',
    },
    '100%': {
      clipPath: 'polygon(0vw 0vh, 100vw 0vh, 100vw 100vh, 0vw 100vh)',
      fill: '#f5d300',
    },
  },
});
  
export default Preloader;