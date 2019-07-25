import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';

class App extends Component {
   render () {
     return  (
       <View style={styles.container}>
         <View style={styles.innerBox1}> 
         <Text style={styles.headding}>Hello World</Text> 
       </View>
        <View style={styles.innerBox2}> 
          <Text style={styles.headding}>Hello World2</Text> 
        </View>
      </View>
     )
   }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  innerBox1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "red"
  },
  innerBox2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "gray"
  },
  headding:{

  }
});
// Same name as class name
export default App; 