import React, { useState, useEffect, useRef } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Animated, 
  Dimensions,
  StatusBar 
} from 'react-native'
import { Video, ResizeMode } from 'expo-av'

const { width, height } = Dimensions.get('window')

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const scaleAnim = useRef(new Animated.Value(0.8)).current
  const [showVideo, setShowVideo] = useState(true) // Start with video visible
  const videoRef = useRef(null)

  useEffect(() => {
    console.log('SplashScreen mounted, showVideo:', showVideo)
    
    // Start fade and scale animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      })
    ]).start()

    // Show video after text animation (redundant now since we start with true)
    const videoTimer = setTimeout(() => {
      console.log('Setting showVideo to true')
      setShowVideo(true)
    }, 500)

    // Navigate to home after splash duration
    const navigationTimer = setTimeout(() => {
      navigation.replace("LoginScreen")
    }, 7000) // Increased time to accommodate video

    return () => {
      clearTimeout(videoTimer)
      clearTimeout(navigationTimer)
    }
  }, [fadeAnim, scaleAnim, navigation])

  const handleVideoEnd = () => {
    // Optional: Navigate immediately when video ends
    navigation.replace("LoginScreen")
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      {/* Animated Title */}
      <Animated.View 
        style={[
          styles.titleContainer,
          { 
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }]
          }
        ]}
      >
        <Text style={styles.title}>Sign Language App</Text>
        <Text style={styles.subtitle}>Learn • Practice • Connect</Text>
      </Animated.View>

      {/* Video Logo */}
      {showVideo && (
        <Animated.View 
          style={[
            styles.videoContainer,
            { 
              opacity: fadeAnim 
            }
          ]}
        >
          <Video
            ref={videoRef}
            source={require('../assets/Splashvideo.mp4')}
            style={styles.video}
            resizeMode={ResizeMode.COVER}
            shouldPlay={true}
            isLooping={false}
            isMuted={true}
            useNativeControls={false}
            onLoad={(status) => {
              console.log('Video loaded:', status.isLoaded)
              if (status.isLoaded && videoRef.current) {
                videoRef.current.playAsync()
              }
            }}
            onPlaybackStatusUpdate={(status) => {
              if (status.didJustFinish) {
                handleVideoEnd()
              }
            }}
            onError={(error) => {
              console.log('Video error:', error)
            }}
          />
        </Animated.View>
      )}

      {/* Loading indicator */}
      {/* <Animated.View 
        style={[
          styles.loadingContainer,
          { opacity: fadeAnim }
        ]}
      >
        <View style={styles.loadingDots}>
          <View style={[styles.dot, styles.dot1]} />
          <View style={[styles.dot, styles.dot2]} />
          <View style={[styles.dot, styles.dot3]} />
        </View>
      </Animated.View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7fbfbff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "Black",
    letterSpacing: 2,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
    letterSpacing: 1,
    textAlign: "center",
  },
  videoContainer: {
    width: width * 0.8,
    height: width * 0.8,
    marginVertical: 20,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#000',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  video: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
  },
  loadingDots: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginHorizontal: 4,
  },
  dot1: {
    animationDelay: '0s',
  },
  dot2: {
    animationDelay: '0.2s',
  },
  dot3: {
    animationDelay: '0.4s',
  },
})

export default SplashScreen
