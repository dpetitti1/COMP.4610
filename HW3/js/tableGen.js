
// Creating a function that will generate our multiplication table
function generate_multitable() {

  //Here delete container holding table if it exists
  if(document.querySelector(".tContainer")){
    var remove= document.querySelector(".tContainer")
    var parent1= remove.parentElement;
    parent1.removeChild(remove);
  }

  // Taking in the form values as a parseInt to eliminate problems with negative numbers
  var minH = parseInt(document.getElementById('minHorizontal').value);
  var maxH = parseInt(document.getElementById('maxHorizontal').value);
  var minV = parseInt(document.getElementById('minVertical').value);
  var maxV = parseInt(document.getElementById('maxVertical').value);

// Here begins the error checks
// The input numbers must be valid integers
if ((Number.isInteger(minH)&&Number.isInteger(minV)&&Number.isInteger(maxV)&&Number.isInteger(maxH))==false){
  document.getElementById("ErrorOutput").innerHTML='All values must be valid integers';
  return 0;
}
// Min Values must be less than or equal to the max values
if (minH > maxH ){
  document.getElementById("ErrorMessage").innerHTML='ERROR';
  document.getElementById("ErrorOutput").innerHTML='Enter a Minimum Vertical value that is less than or equal to the Max row value';
  return 0;
}
if (minV > maxV ){
  document.getElementById("ErrorMessage").innerHTML='ERROR';
  document.getElementById("ErrorOutput").innerHTML='Enter a Minimum Horizontal value that is less than or equal to the Max Column value';
  return 0;
}

// Input value is within the range of -50 and 50
if (minV < -50 ){
  document.getElementById("ErrorMessage").innerHTML='ERROR';
  document.getElementById("ErrorOutput").innerHTML='Enter a Minimum Horizontal and or Vertical value that is greater than -50!';
  return 0;
}

if (minH < -50 ){
  document.getElementById("ErrorMessage").innerHTML='ERROR';
  document.getElementById("ErrorOutput").innerHTML='Enter a Minimum Horizontal and or Vertical value that is greater than -50!';
  return 0;
}

if (maxV > 50 ){
  document.getElementById("ErrorMessage").innerHTML='ERROR';
  document.getElementById("ErrorOutput").innerHTML='Enter a Maximum Horizontal and or Vertical value that is less than 50!';
  return 0;
}

if (maxH > 50 ){
  document.getElementById("ErrorMessage").innerHTML='ERROR';
  document.getElementById("ErrorOutput").innerHTML='Enter a Maximum Horizontal and or Vertical value that is less than 50!';
  return 0;
}

  // row column lengths + 2 to account for the
  // correct lenth + outer edge to show values
  //ie 5-3 =2, [3 4 5] = 3,so + 1 and +1  for the guiding values
  var hlength = ((maxH - minH)+2)
  var vlength = ((maxV - minV)+2)

 // Creating arrays that will hold the horizontal values
  var harr =[];
  for(x=minH; x <=maxH; x++){
    harr.push(x);
  }

// Creating arrays that will hold the vertical values
  var varr =[];
  for(x=minV; x <=maxV; x++){
      varr.push(x);
  }

/* REFERENCE:
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
*/
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var wrapper = document.createElement("div");
  wrapper.classList.add("tContainer")

  // creating all cells
  for (var i = 0; i < hlength; i++) {
    // creates a table row
    var row = document.createElement("tr");
    row.setAttribute("id","mtRow")
    //
    for (var j = 0; j < vlength; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row

      //Here allows me to enter in the first cell that is blank
      if(i ==0 && j ==0){
        var cell = document.createElement("td");
        var cellText = document.createTextNode('');
        cell.setAttribute("id","mtCell");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      //here allows me to end the guiding values for the row
       else if (i==0 ) {

        var cell = document.createElement("td");
        var cellText = document.createTextNode(varr[j-1]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      //here allows me to end the guiding values for the row column
       else if (j==0 ) {

        var cell = document.createElement("td");
        var cellText = document.createTextNode(harr[i-1]);
        cell.setAttribute("id","mtCellC");
        cell.appendChild(cellText);
        row.appendChild(cell);

      }
      //here filling in the rest of the table
      else{
        var cell = document.createElement("td");
        var cellText = document.createTextNode(harr[i-1]*varr[j-1]);
        cell.setAttribute("id","mtCellG");
        cell.appendChild(cellText);
        row.appendChild(cell);
     }
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);

  wrapper.appendChild(tbl)
  // appends <table> into <body>
  body.appendChild(wrapper);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
  tbl.setAttribute("id","multiTable");

}
