export default class Answer{
  public input: string;
  public setInput: (input: string) => void;
  public mistake: boolean;
  public setMistake: (mistake: boolean) => void;
  
  constructor(input: string, setInput: (input: string) => void, mistake: boolean, setMistake: (mistake: boolean) => void){
    this.input = input;
    this.setInput = setInput;
    this.mistake = false;
    this.setMistake = setMistake;
  }
}