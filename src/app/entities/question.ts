import { Answer } from "./answer";

export interface Question {
    id?:number;
    questionText?:string;
    difficulty?:string;
    answers?:Answer[];
    imageLink?:any;
}
