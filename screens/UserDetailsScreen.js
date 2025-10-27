import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UserDetailsScreen({ route }) {
  const { user } = route.params;

  const formatAddress = (address) => {
    return `${address.street}, ${address.city}`;
  };

  const DetailRow = ({ label, value }) => (
    <View style={styles.detailRow}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View >
          <Text style={styles.headerTitle}>{user.name}</Text>
        </View>
        
        {/* User details container */}
        <View style={styles.detailsContainer}>
          <DetailRow label="Name" value={user.name} />
          <DetailRow label="Email" value={user.email} />
          <DetailRow label="Phone" value={user.phone} />
          <DetailRow label="Website" value={user.website} />
          <DetailRow label="Address" value={formatAddress(user.address)} />
          <DetailRow 
            label="Company" 
            value={user.company.name + '  |  ' + user.company.catchPhrase} 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Stylesheet for the component
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    
  },
  
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    paddingBottom: 0,
    marginBottom: 20,
  },
  detailRow: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
 
});
