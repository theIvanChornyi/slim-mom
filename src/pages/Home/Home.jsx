import { Background } from "components/Background";
import CalcForm from "components/CalcForm";
import { useState } from "react";
import { MainGrid } from "./Home.styled";


export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    
    const submitForm = setIsLoading(true);
    return (
        <Background>
            <MainGrid>
                <CalcForm onFormSubmit={submitForm} />
            </MainGrid>{''}
        </Background>
    );
};
