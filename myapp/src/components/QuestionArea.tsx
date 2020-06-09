import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Question from '../class/Question'

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
  question: Question;
}

export default function QuestionArea(props: Props){
  const {question} = props;

  return(
    <View style={styles.question}>
      <Text style={styles.questionText}>{question.getLeft()} x {question.getRight()}=</Text>
    </View>
  )
}