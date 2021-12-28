const firebaseConfig = {
    apiKey: "AIzaSyBDF4kfzU_jMziaDYg_nHHOnM9s0Y95t_Q",
    authDomain: "mytodoapptai.firebaseapp.com",
    projectId: "mytodoapptai",
    storageBucket: "mytodoapptai.appspot.com",
    messagingSenderId: "569051281075",
    appId: "1:569051281075:web:8e3b2381cfbb7d6015a2c6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


firebase.database().ref('todos').on('child_added',function(data){
// create li tag with text node
var li = document.createElement('li');
var liText = document.createTextNode(data.val().value)
li.appendChild(liText)

// create delete button
var delBtn = document.createElement("button")
var delText = document.createTextNode("DELETE")
delBtn.setAttribute("class", "btn")
delBtn.setAttribute("onclick", "deleteItem(this)")
delBtn.appendChild(delText)

// create edit button
var editBtn = document.createElement("button");
var editText = document.createTextNode("EDIT")
editBtn.appendChild(editText)
editBtn.setAttribute("onclick", "editItem(this)")


li.appendChild(delBtn)
li.appendChild(editBtn)

list.appendChild(li)



})





var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");
    var database = firebase.database().ref('todos');
    var key = database.push().key;
    var todo = {
        value : todo_item.value,
        key : key
    }
    database.child(key).set(todo);
    todo_item.value = "";
}



