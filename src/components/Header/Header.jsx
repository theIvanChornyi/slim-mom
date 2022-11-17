import { Container } from 'components/Container';
import Logo from 'components/Logo';
import {
  HeaderList,
  HeaderListItem,
  HeaderNavigation,
  HeaderNavLink,
  PageHeader,
} from './Header.styled';

export default function Header() {
  return (
    <PageHeader>
      <Container>
        <HeaderNavigation>
          <Logo />
          <HeaderList>
            <HeaderListItem>
              <HeaderNavLink to="/login">Sign in</HeaderNavLink>
            </HeaderListItem>
            <HeaderListItem>
              <HeaderNavLink to="/registration">Registration</HeaderNavLink>
            </HeaderListItem>
          </HeaderList>
        </HeaderNavigation>
      </Container>
    </PageHeader>
  );
}
