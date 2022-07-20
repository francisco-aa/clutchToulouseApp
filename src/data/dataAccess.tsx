import Icategory from '../redux/slices/Icategory'

export class DataAccess {
  getcategories ():Icategory[] {
    return ([
      {
        id: 1,
        name: 'CONCERT CLUB'
      },
      {
        id: 2,
        name: 'SPECTACLE VIVANT'
      },
      {
        id: 3,
        name: 'PROJECTION'
      },
      {
        id: 4,
        name: 'ART VISUEL'
      },
      {
        id: 5,
        name: 'AUTRES'
      }

    ])
  }
}
