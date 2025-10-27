# User Explorer App 📱 For Post Interview Assessment

A modern React Native mobile application built with Expo that fetches and displays user data from a public REST API. The app provides an intuitive interface for browsing user information with search capabilities and detailed user profiles.

## 📝 Overview

The **User Explorer App** is a mobile application that displays a list of users fetched from the JSONPlaceholder API. Users can search through the list, view detailed information about each user, and enjoy a smooth, responsive experience with pull-to-refresh functionality.

## ⚙️ Features

### Core Features
- ✅ **User List Screen**: Displays all users with name, email, and company name
- ✅ **Search Functionality**: Filter users by name in real-time
- ✅ **User Details Screen**: View comprehensive user information including:
  - Full name
  - Email address
  - Phone number
  - Website
  - Complete address (street, city)
  - Company details
- ✅ **Navigation**: Smooth transitions between screens using React Navigation
- ✅ **Responsive Design**: Clean, modern UI optimized for mobile devices

### Additional Features
- ✅ **Loading Spinner**: Visual feedback while fetching data
- ✅ **Error Handling**: Displays error messages with retry functionality on API failure
- ✅ **Pull-to-Refresh**: Refresh user data by pulling down on the list
- ✅ **Empty State**: Clear message when no search results are found

## 🏗️ Technical Stack

- **Framework**: React Native with Expo
- **Navigation**: React Navigation (Native Stack Navigator)
- **HTTP Client**: Axios
- **State Management**: React Hooks (useState, useEffect)
- **Styling**: React Native StyleSheet

## 📁 Project Structure

```
UserExplorer/
├── screens/
│   ├── UserListScreen.js      # Main screen displaying list of users
│   └── UserDetailsScreen.js   # Detailed view of individual user
├── components/
│   └── UserItem.js            # Reusable user list item component
├── App.js                     # Main app entry with navigation setup
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go App](https://expo.dev/client) (for mobile testing)

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd UserExplorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the Expo development server**
   ```bash
   npx expo start
   ```

### Running the App

After starting the Expo server, you can run the app using:

- **iOS Simulator**: Press `i` in the terminal
- **Android Emulator**: Press `a` in the terminal
- **Physical Device**: Scan the QR code with the Expo Go app
  - iOS: Use the Camera app
  - Android: Use the Expo Go app

### Development Commands

```bash
# Start the development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on web
npm run web
```

## 📱 App Screenshots

![user list](https://github.com/user-attachments/assets/54ca50c1-7d3a-40c7-a1bd-5777ea84a2dd)

![user details](https://github.com/user-attachments/assets/863049e3-e596-4e44-adb6-ebcb30edbe87)

### User List Screen
- Displays all users in a scrollable list
- Search bar at the top for filtering
- Tap any user to view details

### User Details Screen
- Comprehensive user information display
- Formatted address and company details
- Clean, card-based layout

## 🔧 API Information

The app fetches data from:
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Response**: Array of user objects

### Sample User Object
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "address": {
    "street": "Kulas Light",
    "city": "Gwenborough",
  }
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net"
  }
}
```

## 🎨 Design Features

- Modern, clean UI with consistent color scheme
- Blue accent color (#007AFF) for primary actions
- Safe area handling for notched devices
- Pull-to-refresh for data updates

## 🛠️ Built With

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)



## 👤 Author

Developed by **T.H. Imasha** as part of a post-interview assignment to demonstrate React Native development skills.

---

