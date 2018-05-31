export class Todo {
    id: number;
    title: string;
    task: string;
    complete: boolean = false;
    sorted: boolean = true;
    important: boolean = false;
    
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}
