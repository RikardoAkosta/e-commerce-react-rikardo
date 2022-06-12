import { cartActions } from "../actions/cartActions";

const INITIAL_STATE = {
    // id: 1,
    // products: [
    //     {
    //         id: 1,
    //         quantity: 1,
    //         product: {
    //             id: 2,
    //             title: "Samsung 50 inches 4K Ultra HD Smart LED TV",
    //             description: "Samsung UN50TU7000 50 TU7000 QLED 4K UHD Smart TV (2020 Model) The TU7000 Crystal UHD TV unlocks hidden detail at four times the quality of Full HD. The ultra-fast processor transforms everything you watch into stunning 4K. The sleek, elegant, and minimalistic design draws you into the screen from any angle. UNDLE INCLUDES: Deco Home 31 Home Theater Premium Soundbar | Deco Mount Flat & Tilt Wall Mount for TV's ",
    //             price: 570,
    //             brand: "Samsung",
    //             category: 1,
    //             images: [
    //                 'https://m.media-amazon.com/images/I/71bk2pVt+yL._AC_SX466_.jpg', 
    //                 'https://m.media-amazon.com/images/I/71e5YPPsjjL._AC_SX466_.jpg', 
    //                 'https://m.media-amazon.com/images/I/41DWNclt34L._AC_SX466_.jpg'
    //             ]
    //         }
    //     },
    //     {
    //         id: 2,
    //         quantity: 2,
    //         product: {
    //             id: 6,
    //             title: "Pocophone X3 Pro",
    //             description: "This is the first POCO phone equipped with a 6nm chipset and powered by four super performance Arm Cortex-A78 cores which effectively balance between performance and energy consumption. With UFS 3.1, you can enjoy shorter loading times whether you are gaming or taking pictures. The multiple high-efficiency heat dissipation materials create flagship-level temperature control and rapid cooling. LiquidCool Technology 2.0 allows the phone to be in a high-performance state at any time, unleashing the maximum potential of the processor.",
    //             price: 275,
    //             brand: "Xiaomi",
    //             category: 3,
    //             images: [
    //                 'https://http2.mlstatic.com/D_NQ_NP_2X_753068-MLA48354136424_112021-F.webp', 
    //                 'https://http2.mlstatic.com/D_NQ_NP_2X_697216-MLA48354116437_112021-F.webp', 
    //                 'https://http2.mlstatic.com/D_NQ_NP_2X_786349-MLA46765664024_072021-F.webp'
    //             ]
    //         },
    //     }        
    // ]
}

const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case cartActions.setCart:
            console.log()
            return action.payload
    
        default:
            return state;
    }
}

export default cartReducer;
