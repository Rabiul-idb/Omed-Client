import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const CheckoutForm = () => {

    const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const {user, totalPrice} = useAuth();
   const [myCarts] = useCart();
  const [clientSecret, setClientSecret] = useState('')
  const [transectionId, setTransectionId]= useState('');



  useEffect(() => {
    
      axiosSecure.post('/create-payment-intent', { price: totalPrice })
        .then(res => {
          //console.log('Client Secret Response:', res.data);
          setClientSecret(res.data.clientSecret);
        })
        .catch(error => {
         // console.error('Error creating payment intent:', error);
          setError('Failed to initialize payment. Please try again.');
        });
    
  }, [axiosSecure, totalPrice]);
  
console.log(totalPrice);

    const handleSubmit = async(e) =>{
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }
      
          // Get a reference to a mounted CardElement. Elements knows how
          // to find your CardElement because there can only ever be one of
          // each type of element.
          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('Payment error', error);
            setError(error.message);
          } else {
            console.log('PaymentMethod', paymentMethod);
            setError('')
          }

          // confirm payment
          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
              card: card,
              billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous',
              }
            }
          })

          if(confirmError){
            console.log('confirm error')
          }
          else{
            console.log('payment Intent', paymentIntent)
          }
          if(paymentIntent.status === 'succeeded'){
            setTransectionId(paymentIntent.id)
            console.log(transectionId);

            // now save the payment in db
            // const payment = {
            //   transectionId: paymentIntent.id,
            //   email: user?.email,
            //   price: totalPrice,
            //   date: new Date().toLocaleString(),
            //   cartIds: myCarts.map(item => item._id),
            //   shipping: '10$',
            //   discount: "15$",
            //   status: "pending",

            // }
           // console.log(payment)

           // const res = await axiosSecure.post('/myPayment', payment);
           // console.log(res.data)
          }

          
    }

    return (
        
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn mt-5 bg-green-600 text-white hover:bg-green-700 hover:text-white" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {
        transectionId && <p className="text-green-600">your Transection Id is: {transectionId}</p>
      } 
    </form>
        
    );
};

export default CheckoutForm;