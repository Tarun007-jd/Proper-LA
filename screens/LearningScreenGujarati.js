"use client"

import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"
import { signLanguageContentGujarati } from "../constants/Data"
import { Video } from "expo-av"

const { width } = Dimensions.get("window")

const LearningScreenGujarati = ({ navigation, route }) => {
  const { module, level, userProgress, setUserProgress } = route.params
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)

  const content = signLanguageContentGujarati[module.id] || [
    {
      letter: module.name,
      sign: "📚",
      description: `Learn about ${module.name}`,
    },
  ]

  const currentContent = content[currentLessonIndex] || content[0]

  const completeModule = () => {
    const updatedProgress = { ...userProgress }
    const moduleIndex = updatedProgress[level].findIndex((m) => m.id === module.id)
    if (moduleIndex !== -1) {
      updatedProgress[level][moduleIndex].completed = true
      setUserProgress(updatedProgress)
    }
    navigation.navigate("Quiz", { module, level })
  }

  const nextLesson = () => {
    if (currentLessonIndex < content.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1)
    } else {
      completeModule()
    }
  }

  const previousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#f9e1ffff", "#b2ffcdff", "#75dfd3ff"]} style={styles.gradient}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>{module.name}</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.lessonCard}>
            {currentContent.Video ? (
              <Video
                source={currentContent.Video}
                style={{ width: 350, height: 350, borderRadius: 10, marginBottom: 0 }}
                resizeMode="contain"
                isLooping
                shouldPlay
                isMuted     
              />
            ) : (
              <Text style={styles.signEmoji}>{currentContent.sign}</Text>
            )}
            <Text style={styles.letterText}>{currentContent.letter || currentContent.number}</Text>
            <Text style={styles.descriptionText}>{currentContent.description}</Text>
          </View>
        </View>

        <View style={styles.navigation}>
          <TouchableOpacity
            style={[styles.navButton, currentLessonIndex === 0 && styles.navButtonDisabled]}
            onPress={previousLesson}
            disabled={currentLessonIndex === 0}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={24} color="white" />
            <Text style={styles.navButtonText}>પાછળ</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navButton, currentLessonIndex === content.length - 1 && styles.completeButton]}
            onPress={nextLesson}
            activeOpacity={0.7}
          >
            {currentLessonIndex === content.length - 1 ? (
              <Text style={styles.navButtonText}>મોડ્યુલ પૂર્ણ કરો! 🎉</Text>
            ) : (
              <>
                <Text style={styles.navButtonText}>આગળ</Text>
                <Ionicons name="chevron-forward" size={24} color="white" />
              </>
            )}
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  content: { flex: 1, paddingHorizontal: 20 },
  lessonCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 25,
    padding: 30,
    alignItems: "center",
    marginTop: 50,
  },
  signEmoji: { fontSize: 120, marginBottom: 20 },
  letterText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
    lineHeight: 24,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    minWidth: 100,
  },
  navButtonDisabled: { opacity: 0.5 },
  completeButton: { backgroundColor: "#10b981" },
  navButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default LearningScreenGujarati
