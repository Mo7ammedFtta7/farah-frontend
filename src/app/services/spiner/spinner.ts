export class spinner {

  constructor(id: string) { 
    this.id=id;
  }

  private id:string;

  hide(){
    var x = document.getElementById(this.id);
      x.style.display = "none";
  }
  show(){
    var x = document.getElementById(this.id);
      x.style.removeProperty("display");
  }
}
