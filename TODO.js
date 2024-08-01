const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You have to write something");
    } else {
        let li = document.createElement("li");

        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        li.appendChild(checkbox);

        
        let text = document.createTextNode(inputBox.value);
        li.appendChild(text);

        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listcontainer.appendChild(li);
    }
    inputBox.value = '';
}

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
