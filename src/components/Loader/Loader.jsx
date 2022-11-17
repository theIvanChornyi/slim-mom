import { Container, Spinner, SpinnerContainer } from './Loader.styled';

export default function Loader() {
  return (
    <Container>
      <SpinnerContainer>
        <img src="../../helpers/images/loader.png" alt="scales" />
      </SpinnerContainer>
      <Spinner>
        <img src="../../helpers/images/loader-mini.png" alt="spinner" />
      </Spinner>
    </Container>
  );
}
