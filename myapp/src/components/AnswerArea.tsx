import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Answer from 'src/class/Answer';

const styles = StyleSheet.create({
  question: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  questionText: {
    fontSize: 42,
  },
  mistakeInput:{
    color: 'red',
  }
});

interface Props{
  answer: Answer;
}

export default function AnswerArea(props: Props){
  const {answer} = props;

  return(
    <Text style={[answer.mistake && styles.mistakeInput]} key={answer.input}>{answer.input}</Text>
  )
}