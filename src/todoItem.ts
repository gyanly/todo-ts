export class TodoItem{
    public id: number;
    public task: string;
    public complete: boolean = false;

    public constructor(id: number, task: string, complete: boolean = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    public printDetails():void{
        console.log("Task: " + this.task);
        console.log("Complete: " + this.complete);
        console.log("ID: " + this.id);
    }
}