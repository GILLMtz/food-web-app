export interface Recipe{
    id:number,
    title:string,
    description:string,
    steps:[],
    ingredients:[],
    tags:Array<any>,
    link:string,
    cover:string,

    portion?:number,
    duration?:string,
    difficulty?:string //fast 
    weather?:number

}