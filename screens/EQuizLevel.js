import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"

const QuizLevelsScreen = ({ navigation }) => {
  // Handler for button press to navigate to Quiz page with selected level
  const handleLevelPress = (level) => {
    navigation.navigate('QuizPage', { level });
  };

  return (
    <View style={styles.container}>
    <LinearGradient colors={["#e0f7fa","#fce4ec"]} style={styles.gradient}>
      <Text style={styles.title}>Select Quiz Level</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("EnglishQuiz")}
      >
        <Text style={styles.buttonText}>Basic</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLevelPress('Basic')}
      >
        <Text style={styles.buttonText}>Intermediate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLevelPress('Advanced')}
      >
        <Text style={styles.buttonText}>Advanced</Text>
      </TouchableOpacity>
  
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  scrollView: {
    flex: 1,
    
  },
  title: {
  fontSize: 32,
    color: "#374151",
    fontFamily: "Sniglet",
    paddingTop: 50,
    paddingBottom: 50,
  },
  button: {
    backgroundColor: '#4b84d4ff',
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
    width: 250,
    height:100,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    paddingTop: 20,
    fontFamily: "Sniglet",
    textAlign: 'center',
  },
  gradient: {
    flex: 1,
    padding: 100,
  },
});

export default QuizLevelsScreen;
