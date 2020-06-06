import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { MODE_SELECT, PRACTICE, RESULT } from '../../constants/path';
import { ModeSelect, Practice, Result } from '../../components/pages';

const ModeSelectStack = createStackNavigator();
const PracticeStack = createStackNavigator();

export default function ModeSelectNavigator(){
  return (
    <ModeSelectStack.Navigator initialRouteName={MODE_SELECT}>
      <ModeSelectStack.Screen name={MODE_SELECT} component={ModeSelect} />
      <ModeSelectStack.Screen name={PRACTICE} component={Practice} />
      <ModeSelectStack.Screen name={RESULT} component={Result} />
    </ModeSelectStack.Navigator>
  )
}

export function PracticeNavigator(){
  return (
    <PracticeStack.Navigator initialRouteName={PRACTICE}>
      <PracticeStack.Screen name={PRACTICE} component={Practice} />
      <PracticeStack.Screen name={RESULT} component={Result} />
    </PracticeStack.Navigator>
  )
}