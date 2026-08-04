# 🤟 Sign Language App

An innovative mobile and web application built to bridge communication gaps by translating sign language in real-time. Built with **Expo**, **React Native**, **Next.js**, and powered by **Firebase** and modern UI tools.

---

## 🌟 Features

- **Real-Time Translation**: Leveraging device cameras and machine learning via `react-native-vision-camera` to interpret sign language.
- **Cross-Platform**: Seamless experience across iOS, Android, and Web platforms using Expo and Next.js.
- **Modern UI/UX**: Beautifully designed interfaces using Tailwind CSS, Radix UI, and Framer Motion.
- **Secure Backend**: Real-time data and user authentication handled smoothly by Firebase.
- **Engaging Animations**: Integrated Lottie animations for a lively and interactive user experience.

## 🚀 Technology Stack

- **Frameworks**: [Expo](https://expo.dev/) (SDK 52), [React Native](https://reactnative.dev/), [Next.js](https://nextjs.org/) (14.2)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), Radix UI Primitives, Lucide Icons
- **Backend & Auth**: [Firebase](https://firebase.google.com/)
- **Camera & Vision**: React Native Vision Camera
- **Routing**: React Navigation (Native), Next.js App Router (Web)
- **State Management & Validation**: React Hook Form, Zod

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Expo Go app on your physical device, or an iOS Simulator / Android Emulator.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/sign-language-app.git
   cd sign-language-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   - Create a project on the Firebase Console.
   - Add your `google-services.json` and ensure environment variables for Firebase config are set up.

### Running the App

- **Start the Expo Development Server (Mobile):**
  ```bash
  npm start
  ```
  *Press `a` for Android, `i` for iOS, or scan the QR code with the Expo Go app.*

- **Start the Next.js Development Server (Web):**
  ```bash
  npm run dev
  ```

## 📱 Scripts Overview

- `npm run dev`: Starts the Next.js web application.
- `npm start`: Starts the Expo Metro bundler.
- `npm run android`: Runs the app natively on an Android device/emulator.
- `npm run ios`: Runs the app natively on an iOS simulator/device.
- `npm run web`: Starts the Expo web bundler.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check out the [issues page](https://github.com/your-username/sign-language-app/issues).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
