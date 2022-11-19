import { Container } from 'components/Container';
import { Outlet } from 'react-router-dom';
import SideBar from 'components/SideBar';
import { UserPage, UserWrapper } from './User.styled';

export default function User() {
  return (
    <UserPage>
      <Container>
        <UserWrapper>
          <Outlet />
          <SideBar
          // date={normalizedDate}
          // left={left}
          // consumed={consumed}
          // dailyRate={dailyRate}
          // percent={percent}
          // notAllowedProducts={notAllowedProducts}
          />
        </UserWrapper>
      </Container>
    </UserPage>
  );
}
