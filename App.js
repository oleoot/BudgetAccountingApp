
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Main from './components/pages/Main'
import Header from './components/defaultComponens/Header';
import Footer from './components/defaultComponens/Footer';




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar theme={'auto'}  backgroundColor={'#2F3136'} barStyle={'dark-content'} translucent={false}/>
        {/* Header ====================================== */}
        <Header />
        {/* Main window ===================================== */}
        <Main />
        {/* Footer window ===================================== */}
        <Footer />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    padding: 10
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8
  }
});
