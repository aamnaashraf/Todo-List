#! usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
let todos = ["Fajr Prayer", "Breakfast", "Coding"];
console.log(chalk.blue.bold("      **Welcome to Todo List App**   \n "));
async function createTodo(todos) {
    do {
        let Ans = await inquirer.prompt({
            name: "option",
            type: "list",
            message: (chalk.yellow("Select any one of the options:")),
            choices: ["Add", "Update", "view", "Delete", "Exit"],
        });
        if (Ans.option === "Add") {
            let addMore = await inquirer.prompt({
                name: "addMore",
                type: "input",
                message: (chalk.yellow("Add a task to list: \n")),
            });
            todos.push(addMore.addMore);
            todos.forEach((addMore) => console.log(chalk.yellow(addMore)));
        }
        if (Ans.option === "Update") {
            let updateMore = await inquirer.prompt({
                name: "todos",
                type: "list",
                message: (chalk.green(" \nWhat do you want to update? ")),
                choices: todos.map((item) => item),
            });
            let addMore = await inquirer.prompt({
                name: "addMore",
                type: "input",
                message: (chalk.green("\nAdd a task to list:")),
            });
            let newTask = todos.filter((val) => val !== updateMore.todos);
            todos = [...newTask, addMore.addMore];
        }
        if (Ans.option === "view") {
            console.log(chalk.blue("\n*** TO DO LIST!"));
            console.log(chalk.red(todos));
            console.log(chalk.green("-----------------"));
        }
        if (Ans.option === "Delete") {
            let deleteTask = await inquirer.prompt({
                name: "deletetask",
                type: "list",
                message: (chalk.green(" \nWhat do you want to delete?")),
                choices: todos.map((item) => item),
            });
            let NewTask = todos.filter((val) => val !== deleteTask.deletetask);
            todos = [...NewTask];
            console.log(chalk.blue.red(todos));
        }
        if (Ans.option === "Exit") {
            console.log(chalk.blue.bold("\n Thank you for using this app!"));
            break;
        }
    } while (true);
}
createTodo(todos);
