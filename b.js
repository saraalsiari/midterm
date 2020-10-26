var array = [];
count = 0;

function myBFunction(id) {

  array[count] = document.getElementById(id).innerHTML;
  document.getElementById(id).style.visibility = "hidden";
  count++;


  if (count == 9) {
    alert("The order in which the numbers disapered is" + array);
  }

}

var a=[1,2,3,4];
alert("The order in which the numbers disapered is" + a);
