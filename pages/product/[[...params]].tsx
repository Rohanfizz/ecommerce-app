import { NextPage } from "next";
import { useRouter } from "next/router";
import ProductMain from "../../src/components/Products/ProductPage/ProductMain";

const ProductPage: NextPage = () => {
    const {
        query: { params },
    } = useRouter();
    const product = {
        uuid: "asdasd",
        name: "Makeup Revolution Maxi Reloaded Palette Large It Up, Multicolor 60 g ",
        primaryCategory: "Spray",
        ratingNumber: 4,
        reviewCount: 264,
        price: 1299,
        stockStatus: true,
        productImage: [
            "https://m.media-amazon.com/images/I/61Df6Ww6DaL._SL1080_.jpg",
            "https://m.media-amazon.com/images/I/91XD5PkJVgL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/91KeBvIAECL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/91sPs0ELPnL._SL1500_.jpg"
        ],
        // only for full product page
        originalPrice:1999,
        description:
            "Herb Enriched Ayurvedic Lipstick Shade Sampler Kit is a miniature pack of 16 ayurvedic shades specially curated for you to test out the stay, texture and find a perfect shade to look your best. It is made by cutting out unnecessary ingredients from the formula while making it as wholesome as possible without compromising on the ‘glam’ factor.",
        benefits:
            "Ayurvedic & natural formula. Natural ingredients provide moisture & nourishment to your lips. Made from Vata pacifying herbs such Indian Bhrami, Guduchi, Yashtimadhu, Bala and Manjishtha in a base of Ghee and sesame oil. It does not contain artificial pigments, made from natural pigments. Free from harmful chemicals, silicones, synthetic film-formers & parabens.",
        suggestedUse:
            "Glide onto lips, starting from the center and blending outward",
        info: {
            Brand: "Just Herbs",
            Color: "Yellow",
            "Skin Type": "All",
            "Item Form": "Stick",
            "Finish Type": "Matte",
            "Material Type": "Paraben And Synthetic Film-formers Free",
            Coverage: "Medium",
            "Age Range": "Adult",
        },
    };

    return <>
    <ProductMain product={product}/>
    </>;
};
export default ProductPage;
