var array = [];
count = 0;

function myBFunction(id) {

  array[count] = document.getElementById(id).innerHTML;
  document.getElementById(id).innerHTML = "";
  count++;


  if (count == 9) {
    alert("The order in which the numbers disapered is" + array);
  }

}

