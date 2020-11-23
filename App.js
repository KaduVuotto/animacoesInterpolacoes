import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      larAnimada: new Animated.Value(0)
    };

    Animated.timing(
      this.state.larAnimada,
      {
        toValue: 100,
        duration: 5000
      }
    ).start()
  }

  render() {
    let porcentagemAnimada = this.state.larAnimada.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    })

    return (
      <View style={styles.container}>

        <Animated.View style={{
          backgroundColor: '#4169E1',
          width: porcentagemAnimada,
          height: 25
        }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
})

export default App;
