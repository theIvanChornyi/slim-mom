export const size = {
    mobile: '320px',
    maxMobile: '767px',
    minTablet: '768px',
    maxTablet: '1279px',
    desktop: '1280px',
}

export const breakpoints = {
    mobile: `(min-width: ${size.mobile})`,
    maxMobile: `(max-width: ${size.maxMobile})`,


    tablet: `(min-width: ${size.minTablet}) and (max-width: ${size.maxTablet})`,
    minTablet: `(min-width: ${size.minTablet})`,
    maxTablet: `(max-width: ${size.maxTablet})`,


    desktop: `(min-width: ${size.desktop})`,



};