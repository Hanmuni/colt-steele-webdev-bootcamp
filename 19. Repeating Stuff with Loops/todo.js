let input = prompt("What do you want to do first?");

const todos = ["wash dishes"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    for (let i = 0; i < todos.length; i++) {
      console.log(`List: ${i}: ${todos[i]}`);
    }
  } else if (input === "new") {
    const newTodo = prompt("Please add a new todo!");
    todos.push(newTodo);
    console.log(`List: ${i}: ${todos[i]}`);
  } else if (input === "delete") {
    const index = prompt("Enter an index to delete!");
    todos.splice(index, 1);
    console.log(`List: ${i}: ${todos[i]}`);
  }
  input = prompt("What do you want to do next?");
}

alert("QUIT THE APP!");
