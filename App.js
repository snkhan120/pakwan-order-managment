import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OrderLists from './src/components/OrderLists';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <OrderLists />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
