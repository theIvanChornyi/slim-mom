import { useDispatch } from 'react-redux';
import { changeTheme } from 'redux/slimDaddy/slice.slimDaddy';
import {
  InputSwitcher,
  LabelSwitcher,
  ThemeCheckbox,
  ThemeDark,
  ThemeLight,
  Switcher,
} from './ThemeSwitcher.styled';

export default function ThemeSwitcher() {
  const dispatch = useDispatch();

  const switchTheme = () => {
    dispatch(changeTheme());
  };
  return (
    <Switcher>
      <ThemeLight>SlimMom</ThemeLight>
      <LabelSwitcher htmlFor="happy">
        <InputSwitcher id="happy" onChange={switchTheme} type="checkbox" />
        <ThemeCheckbox></ThemeCheckbox>
      </LabelSwitcher>
      <ThemeDark>SlimDaddy</ThemeDark>
    </Switcher>
  );
}
