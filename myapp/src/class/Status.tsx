export default class Status{
  private nextFlg: boolean;
  private startDate: number;
  private endDate: number;

  constructor(){
    this.nextFlg = false;
    this.startDate = new Date().getTime();
    this.endDate = 0; // 初期値が0
  }

  public getNextFlg(){
    return this.nextFlg;
  }

  public setNextFlg(nextFlg: boolean){
    this.nextFlg = nextFlg
  }

  public setEndDate(endDate: number){
    this.endDate = endDate;
  }

}