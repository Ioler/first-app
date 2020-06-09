export default class Question{
  private left: number;
  private right: number;

  constructor(){
    this.left = Math.floor( Math.random() * 90 + 10);
    this.right = Math.floor( Math.random() * 90 + 10);
  }

  public get answer(){
    return this.left * this.right;
  }

  public getLeft(){
    return this.left;
  }

  public getRight(){
    return this.right;
  }
}