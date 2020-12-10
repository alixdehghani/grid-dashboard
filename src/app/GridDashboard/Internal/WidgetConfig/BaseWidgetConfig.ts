import { generateId } from 'src/app/System/IdGenerator';

export abstract class BaseWidgetConfig {
    id: string;
    abstract name: string;
    abstract rows: number;
    abstract cols: number;
    x = 0;
    y = 0;
    title: string;
    constructor(id?:string) {
        if(id == null) {
            this.id = generateId();
        } else {
            this.id = id;
        }
    }
}