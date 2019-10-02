import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
});

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default App;
