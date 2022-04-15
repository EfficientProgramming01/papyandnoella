import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
         <Image resizeMode="contain"  style = {{height:"100%",width:"100%"}}source = {require("./assets/us.jpg")}/>
      <StatusBar style="auto" />
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
