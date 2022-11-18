import { useForm } from 'react-hook-form';
import { useState } from "react";
import { Button, ButtonCon, FormLabel, FormStyled, LabelFirst, List, RadioInp, TextInp, Thumb, Title } from "./CalcForm.styled";
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectDailyRate } from 'redux/calorie/calorie.selectors';
import Modal from 'components/Modal';


export default function CalcForm() {

    const [isOpen, setIsOpen] = useState(false);
    const dailyRate = useSelector(selectDailyRate);
    const { register, handleSubmit, reset, control } = useForm({
        defaultValues: {
            weight: '',
            height: '',
            age: '',
            desiredWeight: '',
            bloodType: '',
        }
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();


  const [selectedBloodType, setSelectedBloodType] = useState('');


    const onSubmit = (data, e) => {
        const totalData = {
            weight: Number(data.weight),
            height: Number(data.height),
            age: Number(data.age),
            desiredWeight: Number(data.desiredWeight),
            bloodType: Number(data.bloodType),

        };

        e.preventDefault();
        dispatch(selectDailyRate(totalData));
        setIsOpen(true);
        reset();

        navigate('/diary');
    }

      const onBldSelect = e => {
    setSelectedBloodType(e.target.value);
  };


    return (
            <Thumb>
                <Title>Calculate your daily calorie intake right now</Title>
                <FormStyled onSubmit={handleSubmit(onSubmit)}>
                    <LabelFirst>
                        <FormLabel type="height" htmlFor="height" control={control}>
                            Height (100-250)*
                             <TextInp name={"height"} type="text" control={control} {...register("Height*", {required: true, max: 250, min: 100, pattern: /[0-9]{3}/i})} />
                            <span className="tooltiptext">min. 100, max. 250</span>
                        </FormLabel>
                        <FormLabel type="age" htmlFor="age">
                            Age (18-100)*
                        <TextInp type="text" name={"age"} control={control} {...register("Age*", {required: true, max: 100, min: 18, pattern: /[0-9]{2}/i})} />
                            <span className="tooltiptext">min. 18, max. 100</span>
                        </FormLabel>
                        <FormLabel type="currentWeight" htmlFor="currentWeight">
                            Current weight (20-500)*
                            <TextInp type="text" name={"currentWeight"} control={control} {...register("Current weight*", {required: true, max: 500, min: 20, pattern: /[0-9]{2,3}/i})} />
                            <span className="tooltiptext">min. 20, max. 500</span>
                        </FormLabel>
                    </LabelFirst>
                    <LabelFirst>
                        <FormLabel type="desiredWeight" htmlFor="desiredWeight">
                            Desired weight (20-500)*
                        <TextInp type="text" name={"desiredWeight"} control={control} {...register("Desired weight*", {required: true, max: 500, min: 20, pattern: /[0-9]{2,3}/i})} />
                            <span className="tooltiptext">min. 20, max. 500</span>
                        </FormLabel>
                        <FormLabel type="bloodType" htmlFor="bloodType" required>
                            <p style={{ marginBottom: '20px' }}>Blood type*</p>
                            <List>
                                <li>
                                <RadioInp {...register("1", { required: true })}
                                    name="bloodType"
                                    type="radio"
                                    id="blood-inp-1"
                                    value={1}
                                    checked={selectedBloodType === '1'}
                                    onClick={onBldSelect} />
                                    <label htmlFor="blood-inp-1">1</label>
                                </li>
                                <li>
                                <RadioInp {...register("2", { required: true })}
                                    type="radio"
                                    name="bloodType"
                                    id="blood-inp-2"
                                    value={2}
                                    checked={selectedBloodType === '2'}
                                        onClick={onBldSelect} />
                                    <label htmlFor="blood-inp-2">2</label>
                                </li>
                                <li>
                                <RadioInp {...register("3", { required: true })} type="radio"
                                    name="bloodType"
                                    id="blood-inp-3"
                                    value={3}
                                    checked={selectedBloodType === '3'}
                                    onClick={onBldSelect} />
                                    <label htmlFor="blood-inp-3">3</label>
                                </li>
                                <li>
                                <RadioInp {...register("4", { required: true })} type="radio"
                                    name="bloodType"
                                    id="blood-inp-4"
                                    value={4}
                                    checked={selectedBloodType === '4'}
                                    onClick={onBldSelect} />
                                    <label htmlFor="blood-inp-4">4</label>
                                </li>
                            </List>
                        </FormLabel>
                    </LabelFirst>
                    <ButtonCon>
                        <Button type="submit">Start losing weight</Button>
                    </ButtonCon>
            </FormStyled>
            {isOpen && dailyRate && (
                <Modal setIsOpen={setIsOpen} />
            )}
            </Thumb>
    );
}
