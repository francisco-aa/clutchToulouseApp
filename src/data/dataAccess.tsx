import { Category } from "../types/Category";
import { Event } from "../types/Event";

export class dataAccess {
    static readonly url:String="https://clutchmag.fr/api/";
    getcategories():Category[]  {
        // TODO faire un fetch pour récupérer les données 
        return ([
            {
                id:'1',
                name:'CONCERTS'
            },
            {
                id:'2',
                name:'AUTRES'
            },
            {
                id:'3',
                name:'SPECTACLES'
            },
            {
                id:'4',
                name:'theater'
            }])
    }
    getHeadlines():Event[]{
        return ([
            {
                id:'1',
                name:'ORELSAN'
            },
            {
                id:'2',
                name:'CASSE NOISETTE'
            },
            {
                id:'3',
                name:'RETRO GAMING NIGHT'
            },
            {
                id:'4',
                name:'GLABRE'
            }])
    }
    getTodayEvent():Event[]{
        return ([
            {
                id:'1',
                name:'ORELSAN'
            },
            {
                id:'2',
                name:'GLABRE'
            },
            {
                id:'3',
                name:'EXPOSITION'
            },
            {
                id:'4',
                name:'CASSE NOISETTE'
            }])
    }
}