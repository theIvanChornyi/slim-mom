import { useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';

import { useEffect, useState } from 'react';
import {
  BloodTitle,
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
import { toast } from 'react-toastify';
import Loader from 'components/Loader';

export default function CalcForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState('idle');

  const [dailyRateCalc, setDailyRateCalc] = useState(null);
  const { userId } = useParams();

  const context = useOutletContext();
  const currentValues = null || context?.userData;
  const setDailyRate = context?.setDailyRate;
  const savedValues = JSON.parse(window.localStorage.getItem('userParams'));
  const checkedBloodType = currentValues?.bloodType;

  const {
    register,
    handleSubmit,
    watch,
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
      toast.dismiss();
      setState('pending');
      const { data } = await APIs.calculateDaylyAuthRequest(userId, params);
      context?.setNotAllowedProducts(data.notAllowedProducts);
      setDailyRate(prev => ({
        ...prev,
        dailyRate: data?.dailyRate || data?.summaries[0]?.dailyRate,
        kcalConsumed: data?.summaries[0]?.kcalConsumed,
        kcalLeft: data?.summaries[0]?.kcalLeft || data?.dailyRate,
        percentsOfDailyRate: data?.summaries[0]?.percentsOfDailyRate,
      }));
      setState('idle');
    } else {
      setState('pending');
      window.localStorage.setItem('userParams', JSON.stringify(params));
      const { data } = await APIs.calculateDaylyRequest(params);
      setDailyRateCalc(data);
      setState('idle');
      setIsOpen(true);
    }
  };

  const { height, age, weight, desiredWeight, bloodType } = errors;
  const errorMessage =
    height?.message ||
    age?.message ||
    weight?.message ||
    desiredWeight?.message ||
    bloodType?.message;

  useEffect(() => {
    toast.dismiss();
    toast.info(errorMessage);
  }, [errorMessage]);

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
            <BloodTitle>Blood type*</BloodTitle>
            <List>
              <li>
                <RadioInp
                  {...register('bloodType')}
                  id="blood-inp-1"
                  type="radio"
                  value={1}
                  checked={1 === +(watch('bloodType') ?? checkedBloodType)}
                />
                <label htmlFor="blood-inp-1">1</label>
              </li>
              <li>
                <RadioInp
                  {...register('bloodType')}
                  id="blood-inp-2"
                  type="radio"
                  value={2}
                  checked={2 === +(watch('bloodType') ?? checkedBloodType)}
                />
                <label htmlFor="blood-inp-2">2</label>
              </li>
              <li>
                <RadioInp
                  {...register('bloodType')}
                  id="blood-inp-3"
                  type="radio"
                  value={3}
                  checked={3 === +(watch('bloodType') ?? checkedBloodType)}
                />
                <label htmlFor="blood-inp-3">3</label>
              </li>
              <li>
                <RadioInp
                  {...register('bloodType')}
                  id="blood-inp-4"
                  type="radio"
                  value={4}
                  checked={4 === +(watch('bloodType') ?? checkedBloodType)}
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

      {state === 'pending' && <Loader />}
    </Thumb>
  );
}
