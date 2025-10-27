
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const UserItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.company}>{item.company.name}</Text>
    </TouchableOpacity>
  );
};

// Stylesheet for the component
const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  company: {
    fontSize: 14,
    color: '#888',
  },
});

export default UserItem;
