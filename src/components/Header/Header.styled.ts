import { createStyled, createPrefix } from '../../../stitches.config';

const componentRef = 'header';

export const StyledHeader = createStyled(
  createPrefix(componentRef, 'StyledHeader')
).styled('header', {
  maxWidth: '350px',
  margin: '0 auto',
  marginTop: '50px',
  marginBottom: '35px',
});

export const StyledNav = createStyled(
  createPrefix(componentRef, 'StyledNav')
).styled('nav', {
  maxWidth: '920px',
  margin: '50px auto',
  padding: '0 10px',
  textAlign: 'center',
  color: '$violet11',
  fontSize: '22px',
  fontWeight: '500',
});

export const StyledText = createStyled(
  createPrefix(componentRef, 'StyledText')
).styled('h1', {
  maxWidth: '920px',
  margin: '50px auto',
  padding: '0 10px',
  textAlign: 'center',
  color: '$violet11',
  fontSize: '22px',
  fontWeight: '500',
});

export const StyledNavList = createStyled(
  createPrefix(componentRef, 'StyledNavList')
).styled('ul', {});

export const StyledNavListItem = createStyled(
  createPrefix(componentRef, 'StyledNavListItem')
).styled('li', {});

export const StyledNavLink = createStyled(
  createPrefix(componentRef, 'StyledNavLink')
).styled('a', {});
