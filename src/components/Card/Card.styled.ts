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
  fontSize: '17px',
  fontWeight: '500',
  lineHeight: '1',
});

export const StyledSubtitle = createStyled(
  createPrefix(componentRef, 'StyledSubtitle')
).styled('h4', {
  fontSize: '15px',
  color: '$mauve11',
  fontWeight: 'bold',
  marginBottom: '10px',
});

export const StyledText = createStyled(
  createPrefix(componentRef, 'StyledText')
).styled('p', {
  maxWidth: '350px',
  textAlign: 'justify',
  fontSize: '15px',
  color: '$mauve11',
  lineHeight: '1.4',
});

export const StyledImg = createStyled(
  createPrefix(componentRef, 'StyledImg')
).styled('div', {});
