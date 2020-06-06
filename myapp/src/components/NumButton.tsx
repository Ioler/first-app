import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

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
  buttonLabel: number;
  input: string;
  setInput: (count: string) => void;
  mistake: boolean;
  setMistake: (count: boolean) => void;
}

export default function NumButton(props: Props){
  const{buttonLabel, input, setInput, mistake, setMistake} = props;

  const onPress=React.useCallback(() => {
    if(mistake===true){
      setMistake(false)
      setInput('')
    }
    setInput(input + buttonLabel )}
    ,[input, setInput])

  return(
    <TouchableOpacity style={styles.button}
    onPress={onPress}>
      <Text style={styles.buttonText}>{buttonLabel}</Text>
    </TouchableOpacity>
    // <Button mode="contained" 
    // onPress={onPress}>{buttonLabel}</Button> //useNativeDriver: trueにする方法が分からない
  )
}