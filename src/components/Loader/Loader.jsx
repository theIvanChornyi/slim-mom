import { Arrow, Container, Spinner, SpinnerContainer } from './Loader.styled';
import Scales from 'helpers/images/loader.png';
import SpinnerBase from 'helpers/images/loader-mini.png';

export default function Loader() {
  return (
    <Container>
      <SpinnerContainer>
        <img src={Scales} alt="scales" />
      </SpinnerContainer>
      <Spinner>
        <Arrow src={SpinnerBase} alt="spinner" />
      </Spinner>
    </Container>
  );
}
