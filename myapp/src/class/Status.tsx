export default class Status{
  private nextFlg: boolean;

  constructor(){
    this.nextFlg = false;
  }

  public getNextFlg(){
    return this.nextFlg;
  }

  public setNextFlg(nextFlg: boolean){
    this.nextFlg = nextFlg
  }

}