
var arrTittle = ['image','name','sex','email','phone'];


var naruto = {
  image:'capheny',
  name:'Capheny',
  sex:'female',
  email:'capheny@aov.com',
  phone:'0123433489'
}
var hinata = {
  image:'errol',
  name:'Errol',
  sex:'male',
  email:'hinata@aov.com',
  phone:'0923456789'
}
var hokage = {
  image:'nakroth',
  name:'Nakroth',
  sex:'male',
  email:'nakroth@aov.com',
  phone:'0823456789'
}
var itachi = {
  image:'vanhein',
  name:'Valhein',
  sex:'male',
  email:'vanhein@aov.com',
  phone:'0163456789'
}

var kakashj = {
  image:'wukong',
  name:'WuKong',
  sex:'male',
  email:'wukong@aov.com',
  phone:'0953456789'
}
var lee = {
  image:'veera',
  name:'Veera',
  sex:'female',
  email:'veera@aov.com',
  phone:'0153456789'
}
var thane = {
  image:'thane',
  name:'Thane',
  sex:'male',
  email:'veera@aov.com',
  phone:'0153456789'
}

function sortTable(n) {
  
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++; 
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  var data = [naruto,lee,kakashj,hinata,hokage,itachi,thane];
  function loadTable (){
    var table = "<table id='myTable'><caption><span id='caption'>Arena Of Valor</span></caption><tr id='row0' >";
    
    for (var i =0;i<arrTittle.length;i++ ){
      if(i%2==0){
        table += "<th onclick='sortTable(0)' id='"+arrTittle[i]+"'>"+arrTittle[i]+"</th>";
      }else {
        table += "<th onclick='sortTable(1)' id='"+arrTittle[i]+"'>"+arrTittle[i]+"</th>";
      }
      
      
    }
    table += "</tr>";
    var temp=0;
    
    for (var i=0;i<7;i++){
      table +="<tr class='row' id='row"+(i+1)+"'>";
      for (var j=0;j<5;j++){
        temp+=1;
        table += "<td class='cell "+arrTittle[j]+"' id='cell"+temp+"'></td>";
      }
      table += '</tr>';
    }
    table += "</table>";
    return table;
  }
  $("#wrap").append(loadTable());
  
  for (var i=0; i<data.length;i++){
    $( $(".image")[i]).append("<img class='img-cell' src='image/"+data[i]['image']+".jpg' width='120px'>");
    $( $(".name")[i]).append(data[i]['name']);
    $( $(".sex")[i]).append(data[i]['sex']);
    $( $(".email")[i]).append(data[i]['email'] );
    $( $(".phone")[i]).append(data[i]['phone']);
    
  }
  
  $('th').append('<div  class="img-sort"><img id="img-up" src="image/up1.png" width="20px" ></div>');
  $('th').append('<div  class="img-sort"><img id="img-down" src="image/down1.png" width="20px" ></div>');