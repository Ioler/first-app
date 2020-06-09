export default class Answer{
  private input: string;
  private mistake: boolean;
  
  constructor(){
    this.input = '';
    this.mistake = false
  }

  public getInput(){
    return this.input;
  }

  public getMistake(){
    return this.mistake;
  }

  public setInput(input: string){
    this.input = input;
  }

  public setMistake(mistake: boolean){
    this.mistake = mistake;
  }
}