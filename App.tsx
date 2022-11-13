import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import i18n from './locale';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{i18n.t('app_name')}</Text>
      <Text>{i18n.t('welcome')}</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
