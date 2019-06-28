import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TodoListComponent = class TodoListComponent {
    constructor() { }
    ngOnInit() {
        this.complete_counter = 0;
        this.id = 3;
        this.todoTitle = '';
        this.todos = [
            {
                'id': 1,
                'title': 'Learn Angular',
                'completed': false,
                'editing': false,
            },
            {
                'id': 2,
                'title': 'Create To Do List',
                'completed': false,
                'editing': false,
            },
            {
                'id': 3,
                'title': 'Recreate To Do List',
                'completed': false,
                'editing': false,
            }
        ];
        this.count = [
            {
                'complete_counter': 0,
                'active_counter': 0,
            }
        ];
    }
    addTodo() {
        if (this.todoTitle.trim().length === 0) {
            alert('Please fill out the form');
        }
        else {
            this.todos.push({
                id: this.id + 1,
                title: this.todoTitle,
                completed: false,
                editing: false,
            });
            this.todoTitle = '';
            this.id++;
        }
    }
    editTodo(todo) {
        todo.editing = true;
    }
    doneEdit(todo) {
        todo.editing = false;
    }
    completeTodo(todo) {
        // this.todos.splice(index,1);
        todo.completed = true;
        this.completeCounter();
    }
    activeCounter() {
        console.log(this.active_counter);
        // this.todos.forEach(function(todo){
        //   if(todo.completed == true) {
        //     this.complete_counter++;
        //     console.log(this.complete_counter)
        //   }
        // }) 
    }
    completeCounter() {
        console.log(this.complete_counter++);
        // this.todos.forEach(function(todo){
        //   if(todo.completed == true) {
        //     this.complete_counter++;
        //     console.log(this.complete_counter)
        //   }
        // }) 
    }
};
TodoListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-todo-list',
        templateUrl: './todo-list.component.html',
        styleUrls: ['./todo-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TodoListComponent);
export { TodoListComponent };
//# sourceMappingURL=todo-list.component.js.map