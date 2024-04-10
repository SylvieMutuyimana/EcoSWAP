import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Color, FontSize } from '../GlobalStyles';

const ErrorContainer = ({ errorText, onRetry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorText} </Text>
      <Pressable style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.buttonText}>RETRY</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems:'center',
    justifyContent:'center',
  },
  errorText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign:'left',
  },
  retryButton: {
    backgroundColor: Color.colorsDefault,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width:100,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ErrorContainer;
