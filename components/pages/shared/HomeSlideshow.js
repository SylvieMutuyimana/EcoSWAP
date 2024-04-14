import React, { useState, useRef, useEffect } from "react";
import { View, Text, ImageBackground, Animated, PanResponder, StyleSheet } from "react-native";
import { SlideshowData } from "../../data/slideshowData";
import { Color } from "../../../GlobalStyles";
import loader_image from '../../../assets/images/other/loading.png';

const HomeSlideshow = ({loading_page}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theData = SlideshowData['buyer'];

  const SlideshowDataCont = ()=>{
    useEffect(() => {
      if (!loading_page) {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide === theData.length - 1 ? 0 : prevSlide + 1));
        }, 2000);
        return () => clearInterval(interval);
      }
    }, [theData, loading_page]); 
    
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
          // Enable pan responder only for horizontal swipes
          const { dx, dy } = gestureState;
          return Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5;
        },
        onPanResponderMove: (event, gestureState) => {
          pan.setValue({ x: gestureState.dx, y: 0 });
        },
        onPanResponderRelease: (event, gestureState) => {
          if (gestureState.dx < -50) {
            setCurrentSlide((prevSlide) => (prevSlide === theData.length - 1 ? 0 : prevSlide + 1));
          } else if (gestureState.dx > 50) {
            setCurrentSlide((prevSlide) => (prevSlide === 0 ? theData.length - 1 : prevSlide - 1));
          }
          Animated.timing(pan, {
            toValue: { x: 0, y: 0 },
            duration: 300, // Adjust the duration as needed
            useNativeDriver: false
          }).start();
        }
      })
    ).current;
    const animatedStyle = {
      transform: [{ translateX: pan.x }]
    };
    return(
      <Animated.View {...panResponder.panHandlers} style={[SlideshowStyles.slide, animatedStyle]}>
        <ImageBackground source={{ uri: theData?.[currentSlide]?.img }}
          style={[SlideshowStyles.image]} resizeMode="cover"
        >
          <View style={[SlideshowStyles.halfCircle, { backgroundColor: theData?.[currentSlide]?.background }]}>
            <Text style={SlideshowStyles.text}>{theData?.[currentSlide]?.text}</Text>
          </View>
        </ImageBackground>
      </Animated.View>
    )
  }

    return (
      <View style={[SlideshowStyles.slideshow, loading_page?noDataStyles.slideshow:null]}>

        {
          loading_page?(
            <View style={[SlideshowStyles.slide]}>
            <ImageBackground source={{ uri: loader_image}}
            style={[SlideshowStyles.image]} resizeMode="cover"
          >
            <View style={[SlideshowStyles.halfCircle, noDataStyles.halfCircle]}>
              <View style={[SlideshowStyles.text, noDataStyles.text]}/>
            <View style={[SlideshowStyles.text, noDataStyles.text, noDataStyles.text1]}/>
            </View>
          </ImageBackground>
            </View>
          ):(
            <SlideshowDataCont/>
          )
        }
      </View>
    );
}

export default HomeSlideshow;

const SlideshowStyles = StyleSheet.create({
  slideshow: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    overflow: 'hidden',
    marginTop: 10,
    minWidth: 360,
    maxWidth: 400,
    width: 380
  },
  slide: {
    width: '100%',
    height: '100%',
    alignItems: 'center', 
  },
  halfCircle: {
    position: 'absolute',
    left: 0,top: 0,bottom: 0,
    width: '50%',
    borderTopRightRadius: 75,
    borderBottomRightRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});


const noDataStyles =  StyleSheet.create({
  slideshow: {
    backgroundColor: Color.silver,
  },
  halfCircle: {
    backgroundColor: Color.colorDarkgray,
    alignItems:'left',
  },
  text: {
    height: 14,
    backgroundColor: Color.silver,
    width: '80%',
    marginLeft:5
  },
  text1: {
    width: '70%',
    marginTop: 5
  },
});