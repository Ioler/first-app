import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  question: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  questionText: {
    fontSize: 42,
  }
});

interface Props{
  left: number;
  right: number;
}

export default function Question(props: Props){
  const {left, right} = props;

  return(
    <View style={styles.question}>
      <Text style={styles.questionText}>{left} x {right}=</Text>
    </View>
  )
}