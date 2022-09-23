import { createStyled, createPrefix } from '../../../stitches.config';

const componentRef = 'footer';

export const StyledFooter = createStyled(
  createPrefix(componentRef, 'StyledFooter')
).styled('footer', {
  position: 'relative',
  height: '100px',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  marginTop: '50px',

  '& .footerWave': {
    position: 'absolute',
    top: '-50px',
    zIndex: '-1',
  },
});

export const StyledContainer = createStyled(
  createPrefix(componentRef, 'StyledContainer')
).styled('div', {
  padding: '20px',
  margin: '0 auto',
  textAlign: 'center',
  color: '$violet11',
  fontSize: '13px',
  fontWeight: '500',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0 7px',
});
