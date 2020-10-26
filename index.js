function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(9))+1;
}
function getRandomColor() {
      int=Math.floor(Math.random() * Math.floor(9))+1;
      if(int==0){
        color="Red";
      }
      if(int==1){
        color="Orange";
      }
      if(int==2){
        color="Yellow";
      }
      if(int==3){
        color="Green";
      }
      if(int==4){
        color="Lightblue";
      }
      if(int==5){
        color="Blue";
      }
      if(int==6){
        color="White";
      }
      if(int==7){
        color="Gray";
      }
      if(int==8){
        color="Pink";
      }
      return color;
    }





function myFunction() {

  countRow=1;
  while(countRow<4){
    countCol=1;
    while (countCol<4) {
      num=getRandomInt();
      colors=getRandomColor();
      document.getElementById("r"+countRow+"c"+countCol).innerHTML = num;
      document.getElementById("r"+countRow+"c"+countCol).style.background = colors;
      countCol++;
    }
    countRow++;
  }


}
