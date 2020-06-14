import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';
import Answer from '../class/Answer';
import Question from '../class/Question'
import Status from '../class/Status'

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
})

interface Props {
  question: Question;
  answer: Answer;
  status: Status;
}

export default function SubmitButton(props: Props){
  const{question, answer, status} = props;

  const onPress=React.useCallback(() => {
    if(parseInt(answer.input) === question.answer){
      status.setNextFlg(true)
      status.setEndDate(new Date().getTime())
    }else{
      answer.setMistake(true)
    }}
    ,[])

  return(
    <TouchableOpacity style={styles.button}
    onPress={onPress}>
      <Text style={styles.buttonText}>✓</Text>
    </TouchableOpacity>
  )
}