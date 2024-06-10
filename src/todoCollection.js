"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
var todoItem_1 = require("./todoItem");
var TodoCollection = /** @class */ (function () {
    function TodoCollection(userName, todoItems) {
        if (todoItems === void 0) { todoItems = []; }
        var _this = this;
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
        this.itemMap = new Map();
        todoItems.forEach(function (item) { return _this.itemMap.set(item.id, item); });
    }
    TodoCollection.prototype.addTodo = function (task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new todoItem_1.TodoItem(this.nextId, task));
        return this.nextId++;
    };
    TodoCollection.prototype.getTodoById = function (id) {
        return this.itemMap.get(id);
    };
    TodoCollection.prototype.getTodoItems = function (includeComplete) {
        return __spreadArray([], __read(this.itemMap.values()), false).filter(function (item) { return includeComplete || !item.complete; });
    };
    TodoCollection.prototype.markComplete = function (id, complete) {
        var todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    };
    return TodoCollection;
}());
exports.TodoCollection = TodoCollection;
