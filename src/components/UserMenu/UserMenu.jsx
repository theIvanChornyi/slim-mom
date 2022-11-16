import { Container } from 'components/Container';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors.auth';
import GoBackBtn from './GoBackBtn';
import {
  UserMenuButton,
  UserMenuHeader,
  UserMenuWrapper,
  UserName,
  UserSideBar,
} from './UserMenu.styled';
// import BackImg from 'helpers/images/back.svg';

export default function UserMenu({ handleLogout }) {
  const name = useSelector(selectUserName);
  return (
    <UserMenuHeader>
      <Container>
        <UserSideBar>
          <GoBackBtn />
          <UserMenuWrapper>
            <UserName>{name}</UserName>
            <UserMenuButton onClick={handleLogout}>Exit</UserMenuButton>
          </UserMenuWrapper>
        </UserSideBar>
      </Container>
    </UserMenuHeader>
  );
}
