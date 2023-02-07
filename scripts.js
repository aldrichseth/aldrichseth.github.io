function test(){
  if(ball.x <= 1){
    document.getElementById("sb1").innerHTML = document.getElementById("sb1").innerHTML + 1;
  }
  if(ball.x >= 749){
    document.getElementById("sb2").innerHTML = document.getElementById("sb2").innerHTML + 1;
  }
}