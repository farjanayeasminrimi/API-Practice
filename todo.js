const url = "https://jsonplaceholder.typicode.com/users/1/todos";
fetch(url)
  .then((res) => res.json())
  .then((data) => showToDo(data));

const showToDo = (todos) => {
  const todoSection = document.getElementById("todoSection");

  // completed: false;
  // id: 1;
  // title: "delectus aut autem";

  todos.forEach((todo) => {
    const toDoItem = document.createElement("div");
    toDoItem.classList.add("todoItem");
    toDoItem.innerHTML = `
    <p>${todo.completed === true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}  </p>
    <h2> ${todo.title}</h2>
    `;
    todoSection.appendChild(toDoItem);
  });
};
