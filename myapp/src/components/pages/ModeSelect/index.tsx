import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MODE_SELECT, PRACTICE, RESULT } from '../../../constants/path';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default function ModeSelect(){
  const { navigate } = useNavigation();

  return(
    <View style={styles.container}>
      <Text>ModeSelect</Text>
      <TouchableOpacity onPress={() => navigate(PRACTICE)}>
        <Text>Go to Practice</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(RESULT)}>
        <Text>Go to Result</Text>
      </TouchableOpacity>
    </View>
  )
}