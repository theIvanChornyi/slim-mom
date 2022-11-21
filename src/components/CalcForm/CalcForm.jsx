import { useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';

import { useState } from 'react';
import {
  Button,
  ButtonCon,
  FormLabel,
  FormStyled,
  LabelFirst,
  List,
  RadioInp,
  TextInp,
  Thumb,
  Title,
} from './CalcForm.styled';

import Modal from 'components/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { calcSchema } from 'services/validation/calcSchema';

import APIs from 'services/API/API';
import { useParams } from 'react-router-dom';

export default function CalcForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [dailyRateCalc, setDailyRateCalc] = useState(null);
  const { userId } = useParams();

  const context = useOutletContext();
  const currentValues = null || context?.userData;
  const savedValues = JSON.parse(window.localStorage.getItem('userParams'));

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(calcSchema),
    defaultValues: savedValues || {
      height: currentValues?.height || null,
      age: currentValues?.age || null,
      weight: currentValues?.weight || null,
      desiredWeight: currentValues?.desiredWeight || null,
      bloodType: currentValues?.bloodType || null,
    },
  });

  const onSubmit = async params => {
    if (userId) {
      const { data } = await APIs.calculateDaylyAuthRequest(userId, params);
      context?.setNotAllowedProducts(data.notAllowedProducts);
    } else {
      window.localStorage.setItem('userParams', JSON.stringify(params));
      const { data } = await APIs.calculateDaylyRequest(params);
      setDailyRateCalc(data);
      setIsOpen(true);
      reset();
    }
  };

  return (
    <Thumb>
      <Title>Calculate your daily calorie intake right now</Title>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <LabelFirst>
          <FormLabel htmlFor="height">
            Height *
            <TextInp id={'height'} {...register('height')} />
            <span className="tooltiptext">min. 100, max. 250</span>
          </FormLabel>

          <FormLabel htmlFor="age">
            Age *
            <TextInp id={'age'} {...register('age')} />
            <span className="tooltiptext">min. 18, max. 100</span>
          </FormLabel>

          <FormLabel htmlFor="weight">
            Current weight *
            <TextInp id={'weight'} {...register('weight')} />
            <span className="tooltiptext">min. 20, max. 500</span>
          </FormLabel>
        </LabelFirst>

        <LabelFirst>
          <FormLabel htmlFor="desiredWeight">
            Desired weight *
            <TextInp id={'desiredWeight'} {...register('desiredWeight')} />
            <span className="tooltiptext">min. 20, max. 500</span>
          </FormLabel>

          <FormLabel htmlFor="bloodType">
            <p>Blood type*</p>
            <List>
              <li>
                <RadioInp
                  {...register('bloodType')}
                  id="blood-inp-1"
                  type="radio"
                  value={1}
                />
                <label htmlFor="blood-inp-1">1</label>
              </li>
              <li>
                <RadioInp
                  {...register('bloodType')}
                  id="blood-inp-2"
                  type="radio"
                  value={2}
                />
                <label htmlFor="blood-inp-2">2</label>
              </li>
              <li>
                <RadioInp
                  {...register('bloodType')}
                  id="blood-inp-3"
                  type="radio"
                  value={3}
                />
                <label htmlFor="blood-inp-3">3</label>
              </li>
              <li>
                <RadioInp
                  {...register('bloodType')}
                  id="blood-inp-4"
                  type="radio"
                  value={4}
                />
                <label htmlFor="blood-inp-4">4</label>
              </li>
            </List>
          </FormLabel>
        </LabelFirst>
        <ButtonCon>
          <Button type="submit">Start losing weight</Button>
        </ButtonCon>
      </FormStyled>
      {isOpen && dailyRateCalc && (
        <Modal {...{ setIsOpen, dailyRateCalc, isOpen }} />
      )}
    </Thumb>
  );
}
