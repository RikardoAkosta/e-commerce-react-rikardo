import { productsActions } from "../actions";

const INITIAL_STATE = {
    productsList: [

        // {
        //     "firstName": "Admin",
        //     "lastName": "Admin",
        //     "email": "admin@gmail.com",
        //     "password": "admin1234",
        //     "phone": "1234567891",
        //     "role": "admin"
        // }

        // {
        //     "email": "admin@gmail.com",
        //     "password": "admin1234"
        // }








        // {
        //     id: 1,
        //     title: "Samsung Galaxy S22",
        //     description: "Smartphone, Factory Unlocked Android Cell Phone, 256GB, 8K Camera & Video, Brightest Display, Long Battery Life, Fast 4nm Processor, US Version. 8K SUPER STEADY VIDEO: Shoot videos that rival how epic your life is with stunning 8K recording, the highest recording resolution available on a smartphone; Video captured is effortlessly smooth, thanks to Auto Focus Video Stabilization on Galaxy S22*",
        //     price: 850,
        //     brand: "Samsung",
        //     category: 3,
        //     images: [
        //         'https://m.media-amazon.com/images/I/71c5rhsUkxL._AC_SX466_.jpg', 
        //         'https://m.media-amazon.com/images/I/51ruuazekVL._AC_SX466_.jpg', 
        //         'https://m.media-amazon.com/images/I/71vq85GMg0L._AC_SX466_.jpg'
        //     ]
        // },



















        // {
        //     id: 9,
        //     title: "Samsung 32 inches QLED 4K Smart TV",
        //     description: "4K UHD Processor: a powerful processor optimizes your tv’ s performance with 4K picture quality Inputs & Outputs: 3 HDMI ports, 1 Ethernet port, 2 USB Ports (v 2.0), 1 Digital Audio Output (Optical), 1 Composite Input (AV), Dimensions with Stand | without Stand Weight: 11.7 lb. 4K UHD: see what you’ve been missing on a crisp, clear picture that’s 4x the resolution of Full HD Smart TV with Universal Guide: our simple on-screen Guide is an easy way to find streaming content and live TV showsHD: see shades of color that reveal more detail than HDTV can deliver",
        //     price: 500,
        //     brand: "Samsung",
        //     category: 1,
        //     images: [
        //         'https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_SX466_.jpg', 
        //         'https://m.media-amazon.com/images/I/71I-7YvIscL._AC_SX466_.jpg', 
        //         'https://m.media-amazon.com/images/I/611ncU1VMaL._AC_SX466_.jpg'
        //     ]
        // },












        // {
        //     id: 10,
        //     title: "2021 Apple iMac",
        //     description: "Immersive 24-inch 4.5K Retina display with P3 wide color gamut and 500 nits of brightness, 24-inch, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB. Apple M1 chip delivers powerful performance with 8-core CPU and 8-core GPU, Strikingly thin 11.5 mm design in vibrant colors. 1080p FaceTime HD camera with M1 ISP for amazing video quality. Studio-quality three-mic array for crystal clear calls and voice recordings. Six-speaker sound system for a remarkably robust and high-quality audio experience",
        //     price: 1500,
        //     brand: "Apple",
        //     category: 2,
        //     images: [
        //         'https://m.media-amazon.com/images/I/61p-ADlugUS._AC_SX522_.jpg', 
        //         'https://m.media-amazon.com/images/I/51NlYBF8bZS._AC_SX522_.jpg', 
        //         'https://m.media-amazon.com/images/I/71Z-BTgSjFS._AC_SX522_.jpg'
        //     ]
        // },

    












        // {
        //     id: 4,
        //     title: "2021 Apple MacBook Pro",
        //     description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and machine learning performance. Up to 10-core CPU delivers up to 3.7x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 13x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 11x faster machine learning performance. Longer battery life, up to 17 hours. Up to 64GB of unified memory so everything you do is fast and fluid",
        //     price: 1300,
        //     brand: "Apple",
        //     category: 2,
        //     images: [
        //         'https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SX522_.jpg', 
        //         'https://m.media-amazon.com/images/I/71YhRQy50oL._AC_SX522_.jpg', 
        //         'https://m.media-amazon.com/images/I/818mB1ifjfL._AC_SX522_.jpg'
        //     ]
        // },











        // {
        //     id: 5,
        //     title: "iPhone 12",
        //     description: "A superpowerful chip. 5G speed. An advanced dual‑camera system. A Ceramic Shield front that's tougher than any smartphone glass. And a bright, beautiful OLED display. iPhone 12 has it all — in two great sizes. Our hardware and software work together seamlessly. Want to pair new AirPods with your iPhone? It’s a simple one‑tap setup. Want to share photos, videos, or contacts with friends nearby?",
        //     price: 600,
        //     brand: "Apple",
        //     category: 3,
        //     images: [
        //         'https://http2.mlstatic.com/D_NQ_NP_2X_850302-MLA46153567911_052021-F.webp', 
        //         'https://http2.mlstatic.com/D_NQ_NP_2X_613157-MLA46153566942_052021-F.webp',
        //         'https://http2.mlstatic.com/D_NQ_NP_2X_730730-MLA46153566946_052021-F.webp'
        //     ]
        // },








        // {
        //     id: 3,
        //     title: "BRAVIA 4K HDR Full Array LED",
        //     description: "COGNITIVE PROCESSOR XR™ – Revolutionary TV processing technology that understands how humans see and hear to deliver intense contrast with deep blacks, high peak brightness, and natural colors. Rediscover everything you watch with billions of accurate colors and see impressive picture quality that is natural and beautiful to the human eye. Precisely controlled backlighting brings out real-life depth and detail with deep blacks and high peak brightness.",
        //     price: 1099,
        //     brand: "Sony",
        //     category: 1,
        //     images: [
        //         'https://m.media-amazon.com/images/I/91KZbi-CbzL._AC_SX466_.jpg', 
        //         'https://m.media-amazon.com/images/I/81nz5guFUIL._AC_SX466_.jpg', 
        //         'https://m.media-amazon.com/images/I/61oC8CUSgWL._AC_SX466_.jpg'
        //     ]
        // },

















        // {
        //     id: 7,
        //     title: "SAMSUNG Galaxy Book Pro",
        //     description: "Book Pro Intel Evo Platform Laptop Computer 15.6 inches AMOLED Screen 11th Gen Intel Core i7 Processor 16GB Memory 512GB SSD Long-Lasting Battery, Mystic Blue. EASY ON THE EYES: Everything looks brilliant with the first 13.3/15.6 AMOLED screen in a Galaxy Book; Enjoy vibrant viewing while you work or school inside or in direct sunlight, and it lessens eye strain by reducing harmful blue light. Sleek, ultrathin and available in a stylish, dual color design, Galaxy Book Pro is the lightest laptop and won’t weigh you down.",
        //     price: 1050,
        //     brand: "Samsung",
        //     category: 2,
        //     images: [
        //         'https://m.media-amazon.com/images/I/81fEklfNGSS._AC_SX679_.jpg', 
        //         'https://m.media-amazon.com/images/I/71mdjmiz9yS._AC_SX679_.jpg', 
        //         'https://m.media-amazon.com/images/I/61pmPr7oqLS._AC_SX679_.jpg'
        //     ]
        // },















        // {
        //     id: 8,
        //     title: "iPhone 13 Pro",
        //     description: "6.1-inch Super Retina XDR display with ProMotion for a faster, more responsive feel. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos. Pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording. 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording. A15 Bionic chip for lightning-fast performance",
        //     price: 1300,
        //     brand: "Apple",
        //     category: 3,
        //     images: [
        //         'https://m.media-amazon.com/images/I/61eDXs9QFNL._FMwebp__.jpg', 
        //         'https://m.media-amazon.com/images/I/61NYF7BxI8L._FMwebp__.jpg', 
        //         'https://m.media-amazon.com/images/I/7161nwSVX9L._FMwebp__.jpg'
        //     ]
        // },


















        // {
        //     id: 2,
        //     title: "Samsung 50 inches 4K Ultra HD Smart LED TV",
        //     description: "Samsung UN50TU7000 50 TU7000 QLED 4K UHD Smart TV (2020 Model) The TU7000 Crystal UHD TV unlocks hidden detail at four times the quality of Full HD. The ultra-fast processor transforms everything you watch into stunning 4K. The sleek, elegant, and minimalistic design draws you into the screen from any angle. UNDLE INCLUDES: Deco Home 31 Home Theater Premium Soundbar | Deco Mount Flat & Tilt Wall Mount for TV's ",
        //     price: 570,
        //     brand: "Samsung",
        //     category: 1,
        //     images: [
        //         'https://m.media-amazon.com/images/I/71bk2pVt+yL._AC_SX466_.jpg', 
        //         'https://m.media-amazon.com/images/I/71e5YPPsjjL._AC_SX466_.jpg', 
        //         'https://m.media-amazon.com/images/I/41DWNclt34L._AC_SX466_.jpg'
        //     ]
        // },















        // {
        //     id: 6,
        //     title: "Pocophone X3 Pro",
        //     description: "This is the first POCO phone equipped with a 6nm chipset and powered by four super performance Arm Cortex-A78 cores which effectively balance between performance and energy consumption. With UFS 3.1, you can enjoy shorter loading times whether you are gaming or taking pictures. The multiple high-efficiency heat dissipation materials create flagship-level temperature control and rapid cooling. LiquidCool Technology 2.0 allows the phone to be in a high-performance state at any time, unleashing the maximum potential of the processor.",
        //     price: 275,
        //     brand: "Xiaomi",
        //     category: 3,
        //     images: [
        //         'https://http2.mlstatic.com/D_NQ_NP_2X_753068-MLA48354136424_112021-F.webp', 
        //         'https://http2.mlstatic.com/D_NQ_NP_2X_697216-MLA48354116437_112021-F.webp', 
        //         'https://http2.mlstatic.com/D_NQ_NP_2X_786349-MLA46765664024_072021-F.webp'
        //     ]
        // },

















        
        // {
        //     id: 11,
        //     title: "Sony X85J 55 Inch smart TV",
        //     description: "4K Ultra HD LED Smart Google TV with Native 120HZ Refresh Rate, Dolby Vision HDR and Alexa Compatibility KD55X85J- 2021 Model,Black. 4K HDR PROCESSOR X1 – Powerful TV processing that delivers a picture that is smooth and clear, full of rich colors and detailed contrast. Reproduces more colors than a conventional TV resulting in picture quality that is natural and precise, and closer than ever to real life. Seamlessly browse 700,000+ movies and TV episodes from across your favorite streaming services, all in one place.",
        //     price: 1198,
        //     brand: "Sony",
        //     category: 1,
        //     images: [
        //         'https://m.media-amazon.com/images/I/812wiz16nlL._AC_SX466_.jpg', 
        //         'https://m.media-amazon.com/images/I/814BDlYFOCL._AC_SX466_.jpg', 
        //         'https://m.media-amazon.com/images/I/71ra97SF8YS._AC_SX466_.jpg'
        //     ]
        // },
    ],
    productsFiltered: []
}






const productsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case productsActions.setProducts:
            return {
                ...state,
                productsList: action.payload,
                productsFiltered: []
            }

        case productsActions.setProductDetail:
            return {
                ...state,
                productSelected: action.payload
            }

        case productsActions.filterPrice:
            const { priceTo, priceFrom } = action.payload;

            const filtered = state.productsList.filter(product => {
                const max = priceTo ? +product.price <= priceTo : true;
                const min = priceFrom ? +product.price >= priceFrom : true;
                return min && max;
            });
            return {
                ...state,
                productsFiltered: filtered
            }
    
        default:
            return state;
    }
}

export default productsReducer;
