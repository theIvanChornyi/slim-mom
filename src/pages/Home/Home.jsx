import CalcForm from 'components/CalcForm';
import { Container } from 'components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { selectDailyRate } from 'redux/calorie/calorie.selectors';
// import { useState } from 'react';
// import Modal from 'components/Modal';

// import { useState } from 'react';
import { MainGrid } from './Home.styled';

export default function Home() {
  // const [isLoading, setIsLoading] = useState(false);
  const dailyRate = useSelector(selectDailyRate);
  const dispatch = useDispatch();
  // const submitForm = setIsLoading(true);

  const GetDailyRate = store => {
    const action = dailyRate(store)
    dispatch(action)
  };

  
  return (
    <Container>
      <MainGrid>
        <CalcForm onSubmit={GetDailyRate} />
      </MainGrid>
      {/* <Modal /> */}
    </Container>
  );
}
