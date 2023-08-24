// components/ThemeToggle.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './themeSlice';
import { Button, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
const ThemeToggle = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector(state => state.theme.mode);
  const themeColor = themeMode == 'light' ? 'white' : 'black';
  console.log(themeColor);

  return (
    <View style={styles.vstyle}>
     
      <Button title='change theme' onPress={() => dispatch(toggleTheme())}>
        <View >

        </View>
      </Button>
    </View>

  );
};

export default ThemeToggle;
const styles = StyleSheet.create({
  vstyle: {
    flex: 1,
    backgroundColor: themeColor,
  }
})