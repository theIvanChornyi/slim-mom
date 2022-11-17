import { useForm } from 'react-hook-form';
import { useState } from "react";
import { Button, ButtonCon, FormLabel, FormStyled, LabelFirst, List, RadioInp, TextInp, Thumb, Title } from "./CalcForm.styled";

export default function CalcForm({ onFormSubmit }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const [selectedBloodType, setSelectedBloodType] = useState();

    const onBldSelect = e => {
        setSelectedBloodType(e.target.value)
    }

    const initialValue = {
        height: '',
        age: '',
        currentWeight: '',
        desiredWeight: '',
        bloodType: '1',
    };



    return (
            <Thumb>
                <Title>Calculate your daily calorie intake right now</Title>
                <FormStyled>
                    <LabelFirst>
                        <FormLabel htmlFor="height">
                            Height*
                             <TextInp type="number" {...register("Height*", {required: true, max: 250, min: 100, pattern: /[0-9]{3}/i})} />
                            <span className="tooltiptext">min. 100, max. 250</span>
                        </FormLabel>
                        <FormLabel htmlFor="age">
                            Age*
                            <TextInp type="number" {...register("Age*", {required: true, max: 100, min: 18, pattern: /[0-9]{2}/i})} />
                            <span className="tooltiptext">min. 18, max. 100</span>
                        </FormLabel>
                        <FormLabel htmlFor="currentWeight">
                            Current weight*
                            <TextInp type="number" {...register("Current weight*", {required: true, max: 500, min: 20, pattern: /[0-9]{2,3}/i})} />
                            <span className="tooltiptext">min. 20, max. 500</span>
                        </FormLabel>
                    </LabelFirst>
                    <LabelFirst>
                        <FormLabel htmlFor="desiredWeight">
                            Desired weight*
                            <TextInp type="number" {...register("Desired weight*", {required: true, max: 500, min: 20, pattern: /[0-9]{2,3}/i})} />
                            <span className="tooltiptext">min. 20, max. 500</span>
                        </FormLabel>
                        <FormLabel htmlFor="bloodType" required>
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
                                     value={2}                                         checked={selectedBloodType === '2'}
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
            </Thumb>

    );
}
