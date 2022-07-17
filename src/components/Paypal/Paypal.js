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
import React, { useRef, useEffect } from "react";

export default function Paypal() {
  const paypal = useRef();

  useEffect(() => {
    window.paypal.Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "CAD",
                  value: 650.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
