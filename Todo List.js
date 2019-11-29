let input = prompt("What would you like to do today? \n Type 'new' to enter a new item \n Type 'list' to list your todo list \n Type 'delete' to remove an item \n Type 'quit' to quit the app\n");

/* How I want to structure this:
1. I want an object that holds all my command functions
2. I have a separate function (or just held within the same object) that allows me to input commands
3. When I enter a command (new, delete, list, quit) it calls the object and the relevant function and runs it [can I use .this here? Try to construc this program to use .this to learn it more]
4. This should result in DRY code as everything can just reference other parts of the object instead of typing the function again 
5. [How do I handle the quit command in this structure? ] I think it should look like this:
  commandfunc{
    quit : 
  }
*/
//command object -- runs the individual commands in the 
let commandFunc = {
  todo : [],
  list : function(todoArr) {
    if(todoArr[0] === undefined) {
        return ("*********************\n" +"You have not input any tasks")
      } else {
      todoArr.forEach(function(todoElements, index){
            console.log ("*********************\n"+ (index+1) +": "+ todoElements); 
        })   
      }
    },
  deleteFromTodo : function(todoArr, input) {
    //WRITE A STATEMENT TO RECALL THIS IF A NUMBER IS NOT ENTERED
    todoArr.splice(input-1,1);
  }
}

while(input !== "quit") {
//handle input
  if(input === "list") {
    //lists all the items currently in the todo array    
    console.log(commandFunc.list(commandFunc.todo));   
  } else if (input === "new") {
    //ask for new todo and add to todo array in commandFunc object
    let newTodo = prompt("Enter new todo");
    commandFunc.todo.push(newTodo);
  } else if (input === "delete") {    
    //list todo array, prompt to select num to delete, call delete method from commandFunc object
    console.log(commandFunc.list(commandFunc.todo));
    input = prompt("Please enter the number which you would like to remove:");
    commandFunc.deleteFromTodo(commandFunc.todo, input);
  }
  //ask again for new input
  input = prompt("Please enter a new command");
} 
console.log("You quit the app");
