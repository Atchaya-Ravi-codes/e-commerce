import { PriceType } from "../Price/types";

export type productType = {
    title: string,
    images: Array<ImageType>;
    price: PriceType,
    id: string,
    rating: number;
}
export type ImageType = {
    alt: String,
    url: string,
}