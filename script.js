// Build full UI using JavaScript (less HTML)
const app = document.getElementById("app");

const container = document.createElement("div");
container.style.background = "#dbe7f3ff";
container.style.width = "540px";
container.style.minHeight = "400px";
container.style.padding = "20px";
container.style.borderRadius = "10px";


const title = document.createElement("h1");
title.innerText = "My To-Do List";
title.style.textAlign = "center";
title.style.color = "#333";

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Add a new task...";
input.style.width = "80%";
input.style.padding = "10px";
input.style.border = "none";
input.style.borderBottom = "1px solid #ccc";
input.style.marginTop = "50px";

const addBtn = document.createElement("button");
addBtn.innerText = "Add Task";
addBtn.style.padding = "10px 20px";
addBtn.style.marginLeft = "10px";
addBtn.style.marginTop = "15px";
addBtn.style.background = "#007bff";
addBtn.style.color = "white";
addBtn.style.border = "none";
addBtn.style.borderRadius = "5px";

const ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.padding = "0";
ul.style.marginTop = "20px";

// Add task
addBtn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.style.padding = "10px";
        li.style.margin = "10px 0";
        li.style.border = "1px solid #ccc";
        li.style.borderRadius = "5px";
        li.style.display = "flex";
        li.style.justifyContent = "space-between";

        const text = document.createElement("span");
        text.innerText = input.value;

        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.style.background = "#dc3545";
        delBtn.style.color = "white";
        delBtn.style.border = "none";
        delBtn.style.borderRadius = "3px";
        delBtn.style.padding = "5px 10px";

        delBtn.addEventListener("click", () => {
            ul.removeChild(li);
        });

        li.appendChild(text);
        li.appendChild(delBtn);
        ul.appendChild(li);

        input.value = "";
    }
});

container.appendChild(title);
container.appendChild(input);
container.appendChild(addBtn);
container.appendChild(ul);
app.appendChild(container);
