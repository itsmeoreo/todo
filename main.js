var pending= document.getElementById("un-finished");
var doneBtn= document.createElement("button");
doneBtn.classList="btn done"
doneBtn.innerText="done"
doneBtn.setAttribute('id','done')

var getTask= document.getElementById('get-task');
getTask.addEventListener('keydown', (event)=> {
  if (event.key === 'Enter') {
    document.getElementById("task-submit").click();
  }
})

function add_task(event) {
  // event.preventDefault();
  console.log("Adding task...");
  var todo= document.getElementById("get-task").value;
  document.getElementById("get-task").value= "";
  var existingTodo = document.getElementsByClassName("li-task");
  var notExisting= true;
  for (let i = 0; i < existingTodo.length; i++) {
    if (existingTodo[i].innerText.toLowerCase() == todo.toLowerCase()) {
      notExisting= false;
      break;
    }
  }
  if (notExisting) {
    if(todo === ""){
      alert("The task cannot be empty")
    }
    else{
      var list= document.createElement("li");
      var input= document.createElement("input");
      input.type="checkbox";
      input.className="task-status";
      var p= document.createElement("p");
      p.className="li-task";
      p.innerText=todo;
      var div= document.createElement("div");
      div.className="btn-div";
      var editBtn= document.createElement("button");
      editBtn.classList="btn edit";
      editBtn.innerText="edit";
      var doneBtn= document.createElement("button");
      doneBtn.classList="btn done"
      doneBtn.innerText="done"
      doneBtn.setAttribute('id','done')
      var deleteBtn= document.createElement("button");
      deleteBtn.classList="btn delete";
      deleteBtn.innerText="delete";
      list.appendChild(input);
      list.appendChild(p);
      list.appendChild(div);
      div.appendChild(editBtn);
      div.appendChild(deleteBtn);
      pending.appendChild(list);
      console.log("Task added sucessfully");

      var deleteBtnarr= document.getElementsByClassName("delete");
      deleteBtnarr[deleteBtnarr.length-1].addEventListener("click", deletefunc);

      var edit= document.getElementsByClassName("edit");
      edit[edit.length-1].addEventListener("click", editfunc);

      var check= list.getElementsByClassName("task-status");
      check[check.length-1].addEventListener("change",checkfunc);
    }
  }
  else{
    console.log("adding task failed");
    alert("Task already added");
  }
}



var i;
var deleteBtnarr= document.getElementsByClassName("delete");
for (i = 0; i < deleteBtnarr.length; i++) {
  deleteBtnarr[i].addEventListener("click", deletefunc);
}
var edit= document.getElementsByClassName("edit");
for (i = 0; i < edit.length; i++) {
  edit[i].addEventListener("click", editfunc);
}
var done= document.getElementById("done");
done.addEventListener("click", donefunc);

var check= document.getElementsByClassName("task-status");
for (let i = 0; i < check.length; i++) {
  check[i].addEventListener("change",checkfunc);
  
}



function deletefunc(event){
  console.log("deleting task...");
  var div= event.target.parentNode;
  var list= div.parentNode;
  var ul= list.parentNode;
  ul.removeChild(list);
  console.log("task deleted.");
}
function editfunc(event) {
  if (document.querySelector("#done") != null) {
    document.querySelector("#done").click();
  }
  console.log("editing task process...");
  var div= event.target.parentNode;
  var mainDiv= div.parentNode;
  var unEdit= mainDiv.getElementsByTagName('p')[0];
  var unEditedTask= unEdit.innerText;
  var editTab= document.createElement('input');
  div.removeChild(event.target);
  div.prepend(doneBtn);
  editTab.type= "text";
  editTab.classList= "task-input li-task";
  editTab.value= unEditedTask;
  div.parentNode.removeChild(unEdit);
  mainDiv.insertBefore(editTab ,mainDiv.childNodes[1]);
  var done= document.getElementById("done");
  done.addEventListener("click", donefunc);
}
function donefunc(event) {
  if (document.querySelector("#done") != null) {
    document.querySelector("#done").click();
  }
  var doneBtn_temp= event.target;
  var div= doneBtn_temp.parentNode;
  var mainDiv = div.parentNode;
  div.removeChild(doneBtn_temp);
  var editedTab =mainDiv.getElementsByTagName("input")[1];
  var task= editedTab.value;
  mainDiv.removeChild(editedTab);
  var editedTask =document.createElement('p');
  editedTask.classList= "li-task p";
  editedTask.innerText= task;
  mainDiv.insertBefore(editedTask ,mainDiv.childNodes[1]);
  var editBtn= document.createElement("button");
  editBtn.classList="btn edit";
  editBtn.innerText="edit";
  div.prepend(editBtn);
  editBtn.addEventListener('click', editfunc);
  console.log("task edited.");
}
function checkfunc(event) {
  var task= event.target.parentNode;
  var ulist= task.parentNode;
  var status= ulist.getAttribute('id');
  if (status == "finished") {
    var todo= document.getElementById('un-finished');
    ulist.removeChild(task);
    task.getElementsByClassName("btn-div")[0].removeAttribute("style");
    todo.appendChild(task);
  }
  else{
    var did= document.getElementById('finished');
    ulist.removeChild(task);
    task.getElementsByClassName("btn-div")[0].setAttribute("style","display: none;");
    did.appendChild(task);
  }
}



// var ul= document.getElementById("pending-list");
// var li= document.getElementById("asdfgh");
// ul.removeChild(li);
