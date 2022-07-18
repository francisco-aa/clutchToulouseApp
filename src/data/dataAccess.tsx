import Icategory from "../redux/slices/Icategory";

export class dataAccess {
    getcategories():Icategory[]  {
        return ([
            {
                id:'1',
                name:'MUSIQUE'
            },
            {
                id:'2',
                name:'SPECTACLE'
            },
            {
                id:'3',
                name:'ART VISUEL'
            },
            {
                id:'4',
                name:'AUTRES'
            },
            {
                id:'5',
                name:'PROJECTION'
            },

        ])
    }
}
