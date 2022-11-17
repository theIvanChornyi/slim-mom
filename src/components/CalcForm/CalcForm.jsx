import { Formik } from "formik";
import { useState } from "react";
import { Button, ButtonCon, FormLabel, FormStyled, LabelFirst, List, RadioInp, TextInp, Thumb, Title } from "./CalcForm.styled";

export default function CalcForm({ onFormSubmit }) {
    
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
        <Formik
        initialValues={initialValue}>
            <Thumb>
                <Title>Calculate your daily calorie intake right now</Title>
                <FormStyled>
                    <LabelFirst>
                        <FormLabel htmlFor="height">
                            Height*
                            <TextInp pattern="[0-9]{3}"
                                required
                                id="height"
                                type="number"
                                name="height"
                                min="100"
                                max="250"
                            />
                            <span className="tooltiptext">min. 100, max. 250</span>
                        </FormLabel>
                        <FormLabel htmlFor="age">
                            Age*
                            <TextInp
                                pattern="[0-9]{2}"
                                id="age"
                                required
                                type="number"
                                name="age"
                                min="18"
                                max="100"
                            />
                            <span className="tooltiptext">min. 18, max. 100</span>
                        </FormLabel>
                        <FormLabel htmlFor="currentWeight">
                            Current weight*
                            <TextInp
                                pattern="[0-9]{2,3}"
                                id="currentWeight"
                                required
                                type="number"
                                name="currentWeight"
                                min="20"
                                max="500"
                            />
                            <span className="tooltiptext">min. 20, max. 500</span>
                        </FormLabel>
                    </LabelFirst>
                    <LabelFirst>
                        <FormLabel htmlFor="desiredWeight">
                            Desired weight*
                            <TextInp
                                pattern="[0-9]{2,3}"
                                required
                                name="desiredWeight"
                                id="desiredWeight"
                                type="number"
                                min="20"
                                max="500"
                            />
                            <span className="tooltiptext">min. 20, max. 500</span>
                        </FormLabel>
                        <FormLabel htmlFor="bloodType" required>
                            <p style={{ marginBottom: '20px' }}>Blood type*</p>
                            <List>
                                <li>
                                    <RadioInp
                                        type="radio"
                                        name="bloodType"
                                        id="blood-inp-1"
                                        value={1}
                                        checked={selectedBloodType === '1'}
                                        onClick={onBldSelect}
                                    />
                                    <label htmlFor="blood-inp-1">1</label>
                                </li>
                                <li>
                                    <RadioInp
                                        type="radio"
                                        name="bloodType"
                                        id="blood-inp-2"
                                        value={2}
                                        checked={selectedBloodType === '2'}
                                        onClick={onBldSelect}
                                    />
                                    <label htmlFor="blood-inp-2">2</label>
                                </li>
                                <li>
                                    <RadioInp
                                        type="radio"
                                        name="bloodType"
                                        id="blood-inp-3"
                                        value={3}
                                        checked={selectedBloodType === '3'}
                                        onClick={onBldSelect}
                                    />
                                    <label htmlFor="blood-inp-3">3</label>
                                </li>
                                <li>
                                    <RadioInp
                                        type="radio"
                                        name="bloodType"
                                        id="blood-inp-4"
                                        value={4}
                                        checked={selectedBloodType === '4'}
                                        onClick={onBldSelect}
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
            </Thumb>
        </Formik>
    );
}
