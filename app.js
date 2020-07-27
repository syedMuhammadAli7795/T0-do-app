
 
function addtodo(){
    var todo_item = document.getElementById("todo-list");
   // console.log(todo_item.value)
    
    var list = document.getElementById("list");
 
var li =document.createElement('li');
var litext = document.createTextNode(todo_item.value);

 
li.appendChild(litext);
list.appendChild(li)

var delBtn = document.createElement('button');
var delText = document.createTextNode('Delete');
delBtn.appendChild(delText);
 
delBtn.setAttribute('onclick','delitem(this)')
delBtn.setAttribute('class','add_todo')

var editBtn = document.createElement('button');
var editText = document.createTextNode('Edit');
editBtn.appendChild(editText);

editBtn.setAttribute('onclick','edititem(this)')
editBtn.setAttribute('class','add_todo')



li.appendChild(delBtn);
li.appendChild(editBtn);
todo_item.value ="";
//console.log(li)
}

function delitem(e){
//console.log(e.parent)
e.parentNode.remove();
}

function delall(){
list.innerHTML ="";
}
function edititem(e){

   // console.log(e.parentNode.firstChild.nodeValue)
  var  val =e.parentNode.firstChild.nodeValue;
 var editvalue = prompt('enter updated value',val)

e.parentNode.firstChild.nodeValue=editvalue
  console.log(val)
}