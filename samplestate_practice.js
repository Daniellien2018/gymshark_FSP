//example sample state

// {
//     entities: {
//         user: {
//             1: {
//                 id: 1,
//                 username: sharkshark,
//                 email: shark@gym.com
//             }
//         }
//         product: {
//             1: {
//                 id: 1,
//                 name: 'crest hoodie',
//                 desc: 'lightweight and versatile workout hoodie',
//                 price: '45.00'
//             }
//             2: {
//                 id: 2,
//                 name: 'crest joggers',
//                 desc: 'comfortable and athletic workout pants',
//                 price: '35.00'
//             }
//         }
//         review: {
//             1:{
//                 id: 1,
//                 review: 'this is a comfortable hoodie',
//                 user_id: 1,
//                 product_id: 1
//             }
//         }
//         shopping_session: {
//             1:{
//                 id: 1,
//                 user_id: 1,
//                 total: '90.00'
//             }
//         }
//         cartItem: {
//             1:{
//                 id: 1,
//                 session_id: 1,
//                 product_id: 1,
//                 quantity: 2
//             }
//         }
//         orderItems:{
//             1: {
//                 id: 1,
//                 order_id: 1,
//                 product_id: 1,
//             }
//             2: {
//                 id: 2,
//                 order_id: 1,
//                 product_id: 1,
//             }
//         }
//         orderDetails:{
//             1: {
//                 id: 1,
//                 user_id: 1,
//                 payment_id: 1,
//                 total: '90.00'
//             }
//         }
//         paymentDetails: {
//             1: {
//                 id: 1,
//                 order_id: 1,
//                 amount: "90.00",
//                 status: "unpaid",
//                 paymentType: "visa"
//             }
//         }
//     },
//     ui: {
//         loading: true/false,
//         modal: true/false
//       },
//     errors: {
//         userErrors: ["Incorrect Username or Password"]
//         paymentErrors: ["Missing/Incorrect field(s) in form"]
//         reviewErrors: ["Missing field(s) in form"]
//     }
// }