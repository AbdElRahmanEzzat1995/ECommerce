
export interface IProduct {
    productId: Number,
    productName: string,
    productCode: string,
    releaseDate: string,
    description: string,
    price: number,
    starRating: number,
    imageUrl: string
}

//  export class Product implements IProduct{
//         constructor(public productId: Number,
//             public productName: string,
//             public productCode: string,
//             public releaseDate: string,
//             public description: string,
//             public price: number,
//             public starRating: number,
//             public imageUrl: string)
//}