import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import {
    Overlay, ModalWindow, ModalTitle, Callories,
    CalloriesText, FoodTitle, FoodText, ModulCloseBtn, ModulLine
} from './Modal.styled';
import { fetchCalorie } from 'redux/calorie/calorie.operations';
import { selectDailyRate, selectNotAllowedProducts } from 'redux/calorie/calorie.selectors';


const modalRoot = document.getElementById('modal-root');

export default function Modal() { 
    const [isOpen, setIsOpen] = useState(false);
    const [weight, setWeight] = useState(55);
    const [height, setHeight] = useState(170);
    const [age, setAge] = useState(30);
    const [desiredWeight, setDesiredWeight] = useState(50);
    const [bloodType, setBloodType] = useState(2);
    const dispatch = useDispatch();

    const dailyRate = useSelector(selectDailyRate);
    const notAllowedProducts = useSelector(selectNotAllowedProducts);

    useEffect(() => {
        dispatch(fetchCalorie({ weight, height, age, desiredWeight, bloodType }));
    }, [dispatch, weight, height, age, desiredWeight, bloodType])


    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, []);


    const toggleModal = () => {
        setIsOpen((prevIsOpen) => {
            return !prevIsOpen;
       });
  };

    const handleBackdropClick = event => {
    if (event.currentTarget === event.target) toggleModal(); 
    };

    const handleKeyDown = event => {  
    if (event.code === 'Escape')toggleModal();  
    };
    
    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <ModalWindow>
                <ModulCloseBtn
                    type='button'
                    onClick={toggleModal}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.8333 1.3415L10.6583 0.166504L5.99998 4.82484L1.34164 0.166504L0.166641 1.3415L4.82498 5.99984L0.166641 10.6582L1.34164 11.8332L5.99998 7.17484L10.6583 11.8332L11.8333 10.6582L7.17498 5.99984L11.8333 1.3415Z" fill="black"/>
                    </svg>
                </ModulCloseBtn>
                <ModalTitle>Your recommended daily calorie intake is</ModalTitle> 
                <Callories>
                    {dailyRate}
                    <CalloriesText>ккал</CalloriesText></Callories>
                <ModulLine />
                <FoodTitle>Foods you should not eat</FoodTitle>
                <FoodText>
                    
                 {notAllowedProducts.map(product => (
                        <li
                            key = {product}>
                            {product}
                        </li>
                 ))
                 }  
                </FoodText>
                <button type='button'>Start losing weight</button>
            </ModalWindow>
        </Overlay>,
        modalRoot
    );
}
