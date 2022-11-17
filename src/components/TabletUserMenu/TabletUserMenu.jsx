import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors.auth';
import {
  TabletUserMenuButton,
  TabletUserMenuHeader,
  TabletUserMenuWrapper,
  TabletUserName,
  TabletUserSideBar,
} from './TabletUserMenu.styled';

export default function TabletUserMenu({ handleLogout }) {
  const name = useSelector(selectUserName);
  return (
    <TabletUserMenuHeader>
      <TabletUserSideBar>
        <TabletUserMenuWrapper>
          <TabletUserName>{name}</TabletUserName>
          <TabletUserMenuButton onClick={handleLogout}>
            Exit
          </TabletUserMenuButton>
        </TabletUserMenuWrapper>
      </TabletUserSideBar>
    </TabletUserMenuHeader>
  );
}
