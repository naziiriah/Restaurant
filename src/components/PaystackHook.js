import { usePaystackPayment } from 'react-paystack';
import { Icon } from '@chakra-ui/react';
import { VscCreditCard } from 'react-icons/vsc';
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { CalculateTotal } from '../redux';


const PaystackHookButton = ({amount, Total, MySplit,}) => {
    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: amount* 100,
        publicKey: 'pk_test_d239b30e93303d6f4475c2464de72bc402fad437',
    }
      const initializePayment = usePaystackPayment(config);
      const navigate = useNavigate();
      const Dispatch = useDispatch()
      const onSuccess = (reference) => {
        console.log(reference);
        navigate('/end')
        Dispatch(CalculateTotal({
            total:Total,
            mySplit:MySplit,
        }))
      };

      const onClose = () => {
        console.log('closed')
      }

      return (
        <div>
            <div className="modal__box" 
            onClick={() =>
                        initializePayment(onSuccess, onClose)}>
                <h3>Pay with card</h3>
                <Icon as={VscCreditCard} mt="0.4rem" ml="1rem" fontSize={'20px'}/>                                                                
            </div>
        </div>
      );
  };

  export default PaystackHookButton