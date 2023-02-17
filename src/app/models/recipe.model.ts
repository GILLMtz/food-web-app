export interface Recipe{
    id:number,
    title:string,
    description:string,
    steps:[],
    ingredients:[],
    tags:Array<any>,
    link:string,
    cover:string,
}