export class Todo {
    id: number;
    title: string;
    complete: boolean = false;
    sorted: boolean = true;
    important: boolean = false;
    
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}
