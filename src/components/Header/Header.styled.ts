import {createStyled, createPrefix} from '../../../stitches.config'

const componentRef = "header"

export const StyledHeader = createStyled(createPrefix(componentRef, "StyledHeader")).styled('header', {
  width: '$full',
  backgroundColor: 'Gray1',
  marginBottom: '$5',
  height: '50px',
});

export const StyledNav = createStyled(createPrefix(componentRef, "StyledNav")).styled('nav', {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 10px',
});

export const StyledNavList = createStyled(createPrefix(componentRef, "StyledNavList")).styled('ul', {});

export const StyledNavListItem = createStyled(createPrefix(componentRef, "StyledNavListItem")).styled('li', {});

export const StyledNavLink = createStyled(createPrefix(componentRef, "StyledNavLink")).styled('a', {});
