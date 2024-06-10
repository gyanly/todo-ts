"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
var TodoItem = /** @class */ (function () {
    function TodoItem(id, task, complete) {
        if (complete === void 0) { complete = false; }
        this.complete = false;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    TodoItem.prototype.printDetails = function () {
        console.log("Task: " + this.task);
        console.log("Complete: " + this.complete);
        console.log("ID: " + this.id);
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
