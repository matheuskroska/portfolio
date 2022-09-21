import { prefixedStitches } from '../../../stitches.config';

const { styled } = prefixedStitches('header');

export const StyledHeader = styled('header', {
  width: '$full',
  backgroundColor: '$gray500',
  marginBottom: '$5',
  height: '$14',
});

export const StyledNav = styled('nav', {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 10px',
});

export const StyledNavList = styled('ul', {});

export const StyledNavListItem = styled('li', {});

export const StyledNavLink = styled('a', {});
