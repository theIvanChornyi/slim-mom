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

export default function UserMenu({ handleLogout, handleCloseClick }) {
  const name = useSelector(selectUserName);
  return (
    <UserMenuHeader>
      <Container>
        <UserSideBar>
          <GoBackBtn handleCloseClick={handleCloseClick} />
          <UserMenuWrapper name={name}>
            <UserName>{name}</UserName>
            <UserMenuButton onClick={handleLogout}>Exit</UserMenuButton>
          </UserMenuWrapper>
        </UserSideBar>
      </Container>
    </UserMenuHeader>
  );
}
