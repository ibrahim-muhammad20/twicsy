// import React, { Component } from 'react';
// // import './Paypal.css';

// import ReactDOM from "react-dom"
// const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
// export class Paypal extends Component {
//     createOrder(data, actions) {
//         return actions.order.create({
//           purchase_units: [
//             {
//               amount: {
//                 value: "0.01",
//               },
//             },
//           ],
//         });
//       }
//       onApprove(data, actions) {
//         return actions.order.capture();
//       }
//       render() {
//         return (
//           <div className="app">
//             <div className="wrapover">
    
            
//           <PayPalButton
//             createOrder={(data, actions) => this.createOrder(data, actions)}
//             onApprove={(data, actions) => this.onApprove(data, actions)}
//           />
//           </div>
//           </div>
//         );
//       }
// }

// export default Paypal

