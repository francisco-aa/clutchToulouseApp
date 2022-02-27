import { Categorie } from "../types/Categorie";

export class dataAccess {
    static readonly url:String="https://clutchmag.fr/api/";
    getcategorie():Categorie[]  {
        // TODO faire un fetch pour récupérer les données 
        return ([
            {
                id:'1',
                nom:'CONCERTS'
            },
            {
                id:'2',
                nom:'test'
            },
            {
                id:'3',
                nom:'test1'
            }])
    }
}