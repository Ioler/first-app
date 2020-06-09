import React, { useEffect } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import NumButton from '../../NumButton';
import SubmitButton from '../../SubmitButton';
import ClearButton from '../../ClearButton';
import QuestionArea from '../../QuestionArea';
import { useNavigation } from '@react-navigation/native';
import { MODE_SELECT, PRACTICE, RESULT } from '../../../constants/path';
import Answer from '../../../class/Answer';
import Question from '../../../class/Question'
import Status from '../../../class/Status'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  count: {
    fontSize: 24,
  },
  keyboard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  keyboardsub: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 256,
    padding: 4,
  },
  input: {
    borderWidth: 1,
    width: 256,
    padding: 4,
  },
  mistakeInput:{
    color: 'red',
  }
});


export default function App(){
  const [counter, setCounter] = React.useState(0);
  let question: Question;

  const answer = new Answer();
  question = new Question();
  const status = new Status();
  
  const { navigate } = useNavigation();

  // useEffect(() => {
  //   if(status.getNextFlg){
  //     question = new Question();
  //     status.setNextFlg(false)
  //     setCounter(counter + 1)
  //     answer.setInput('')
  //   }
  // })

  // 3問正解でリザルトへ移動
  useEffect(() => {
    if(counter===2){
			navigate(RESULT);
    }
	})

  // const answer = left * right;

  return(
    <View style={styles.container}>
      <Text style={styles.count}>{counter}問目</Text>
      <QuestionArea question={question} />
      <Text style={[answer.getMistake() && styles.mistakeInput]}>{answer.getInput()}</Text>
      <View style={styles.keyboard}>
        <View style={styles.keyboardsub}>
          <NumButton buttonLabel={1} answer={answer} />
          <NumButton buttonLabel={2} answer={answer} />
          <NumButton buttonLabel={3} answer={answer} />
        </View>
        <View style={styles.keyboardsub}>
          <NumButton buttonLabel={4} answer={answer} />
          <NumButton buttonLabel={5} answer={answer} />
          <NumButton buttonLabel={6} answer={answer} />
        </View>
        <View style={styles.keyboardsub}>
          <NumButton buttonLabel={7} answer={answer} />
          <NumButton buttonLabel={8} answer={answer} />
          <NumButton buttonLabel={9} answer={answer} />
        </View>
        <View style={styles.keyboardsub}>
          <ClearButton answer={answer} />
          <NumButton buttonLabel={0} answer={answer} />
          <SubmitButton
            question={question}
            answer={answer}
            status={status}
          />
        </View>
      </View> 
      <TouchableOpacity onPress={() => navigate(RESULT)}>
        <Text>Go to Result</Text>
      </TouchableOpacity>
    </View>
  )
}