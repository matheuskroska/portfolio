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
  marginBottom: '5px',
});

export const StyledSubtitle = createStyled(
  createPrefix(componentRef, 'StyledSubtitle')
).styled('h4', {
  marginBottom: '10px',
});

export const StyledText = createStyled(
  createPrefix(componentRef, 'StyledText')
).styled('p', {
  maxWidth: '350px',
  textAlign: 'justify',
  fontSize: '15px',
});

export const StyledImg = createStyled(
  createPrefix(componentRef, 'StyledImg')
).styled('div', {});
