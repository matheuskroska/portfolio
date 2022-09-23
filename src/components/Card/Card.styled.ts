import { createPrefix, createStyled } from '../../../stitches.config';

const componentRef = 'Card';

export const StyledCard = createStyled(
  createPrefix(componentRef, 'StyledCard')
).styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

export const StyledWrapper = createStyled(
  createPrefix(componentRef, 'StyledWrapper')
).styled('div', {});

export const StyledTitle = createStyled(
  createPrefix(componentRef, 'StyledTitle')
).styled('h2', {
  color: '$violet11',
  marginBottom: '5px',
  fontSize: '15px',
  fontWeight: '500',
  lineHeight: '1',
});

export const StyledSubtitle = createStyled(
  createPrefix(componentRef, 'StyledSubtitle')
).styled('h4', {
  fontSize: '15px',
  color: '$violet11',
  marginBottom: '10px',
  '& svg': {
    width: '18px',
    height: '18px',
    path: {
      fill: '$violet11',
    },
  },
});

export const StyledStack = createStyled(
  createPrefix(componentRef, 'StyledStack')
).styled('div', {
  display: 'flex',
  gap: '0 13px',
  '& svg': {
    width: '19px',
    height: '19px',
    path: {
      fill: '$violet11',
    },
    '&.iconStyled': {
      scale: '1.5',
    },
  },
});

export const StyledText = createStyled(
  createPrefix(componentRef, 'StyledText')
).styled('p', {
  maxWidth: '350px',
  textAlign: 'left',
  fontSize: '15px',
  color: '$mauve11',
  lineHeight: '1.4',
  marginBottom: '20px',
});

export const StyledImg = createStyled(
  createPrefix(componentRef, 'StyledImg')
).styled('div', {});
