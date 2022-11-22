import PropTypes from 'prop-types';
import LogoMobImage from 'helpers/logo/logoMobile.png';
import LogoMobImageX from 'helpers/logo/logoMobile@2x.png';
import LogoDeskImage from 'helpers/logo/logoDesk.png';
import LogoDeskImageX from 'helpers/logo/logoDesk@2x.png';
import LogoDaddy from 'helpers/logo/logoDaddy.png';

import {
  ImageThumb,
  LogoImage,
  LogoLink,
  LogoName,
  LogoNameAcent,
  LogoNameText,
} from './Logo.styled';
import { useSelector } from 'react-redux';
import { selectSlimDaddy } from 'redux/slimDaddy/selectors.slimDaddy';

export default function Logo({ onClick, isAuth, isOnHome, userId }) {
  const isDaddy = useSelector(selectSlimDaddy);

  return (
    <LogoLink onClick={onClick} to={isAuth ? `/${userId}/diary` : '/home'}>
      <ImageThumb>
        <picture>
          <source
            srcSet={`${LogoMobImage} 1x, ${LogoMobImageX} 2x`}
            media="max-width: 480px"
            type="image/png"
          />
          <source
            srcSet={`${LogoDeskImage} 1x, ${LogoDeskImageX} 2x`}
            media="min-width: 481px"
            type="image/png"
          />
          <LogoImage
            src={isDaddy ? LogoDaddy : LogoDeskImage}
            alt="Company logo"
          />
        </picture>
      </ImageThumb>
      <LogoName isDaddy={isDaddy} isAuth={isAuth} isOnHome={isOnHome}>
        <LogoNameText>Slim</LogoNameText>
        <LogoNameAcent>{isDaddy ? 'Daddy' : 'Mom'}</LogoNameAcent>
      </LogoName>
    </LogoLink>
  );
}

Logo.propTypes = {
  onClick: PropTypes.func,
  isAuth: PropTypes.bool,
  isOnHome: PropTypes.string,
  userId: PropTypes.string,
};
