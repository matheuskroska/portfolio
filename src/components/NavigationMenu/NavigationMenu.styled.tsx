import React from 'react';
import { keyframes } from '@stitches/react';
import { createStyled, createPrefix } from '../../../stitches.config';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import AvatarDemo from '../Avatar';

const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const componentRef = 'NavigationMenu';

const StyledMenu = createStyled(
  createPrefix(componentRef, 'StyledMenu')
).styled(NavigationMenuPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  maxWidth: '920px',
  zIndex: 9999,
  margin: '0 auto',
  boxShadow: '0 2px 10px $blackA7',
  borderRadius: 6,
  backgroundColor: 'White',
});

const StyledList = createStyled(
  createPrefix(componentRef, 'StyledList')
).styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: 4,
  listStyle: 'none',
  width: '100%',
});

const itemStyles = {
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: '$violet11',
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px $violet7` },
  '&:hover': { backgroundColor: '$violet3' },
};

const StyledTrigger = createStyled(
  createPrefix(componentRef, 'StyledTrigger')
).styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
});

const StyledCaret = createStyled(
  createPrefix(componentRef, 'StyledCaret')
).styled(CaretDownIcon, {
  position: 'relative',
  color: '$violet10',
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
});

const StyledTriggerWithCaret = React.forwardRef(
  ({ children, ...props }: any, forwardedRef) => (
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledCaret aria-hidden />
    </StyledTrigger>
  )
);

const StyledLink = createStyled(
  createPrefix(componentRef, 'StyledLink')
).styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: 'block',
  textDecoration: 'none',
  fontSize: 15,
  lineHeight: 1,
});

const StyledContent = createStyled(
  createPrefix(componentRef, 'StyledContent')
).styled(NavigationMenuPrimitive.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
});

const StyledIndicator: any = createStyled(
  createPrefix(componentRef, 'StyledIndicator')
).styled(NavigationMenuPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, transform 250ms ease',
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
  },
});

const StyledArrow = createStyled(
  createPrefix(componentRef, 'StyledArrow')
).styled('div', {
  position: 'relative',
  top: '70%',
  backgroundColor: 'white',
  width: 10,
  height: 10,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 2,
});

const StyledIndicatorWithArrow = React.forwardRef((props, forwardedRef) => (
  <StyledIndicator {...props} ref={forwardedRef}>
    <StyledArrow />
  </StyledIndicator>
));

const StyledViewport = createStyled(
  createPrefix(componentRef, 'StyledViewport')
).styled(NavigationMenuPrimitive.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: 10,
  width: '100%',
  backgroundColor: 'white',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-height)',

  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
});

// Exports
export const NavigationMenu = StyledMenu;
export const NavigationMenuList = StyledList;
export const NavigationMenuItem = NavigationMenuPrimitive.Item;
export const NavigationMenuTrigger = StyledTriggerWithCaret;
export const NavigationMenuLink = StyledLink;
export const NavigationMenuContent = StyledContent;
export const NavigationMenuViewport = StyledViewport;
export const NavigationMenuIndicator = StyledIndicatorWithArrow;

export const ContentList = createStyled(
  createPrefix(componentRef, 'ContentList')
).styled('ul', {
  display: 'grid',
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: 'none',

  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          width: 500,
          gridTemplateColumns: '.75fr 1fr',
        },
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          width: 600,
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)',
        },
      },
    },
  },
});

const ListItem = createStyled(createPrefix(componentRef, 'ListItem')).styled(
  'li',
  {}
);

const LinkTitle = createStyled(createPrefix(componentRef, 'LinkTitle')).styled(
  'div',
  {
    fontWeight: 500,
    lineHeight: 1.2,
    marginBottom: 5,
    color: '$violet12',
  }
);

const LinkText = createStyled(createPrefix(componentRef, 'LinkText')).styled(
  'p',
  {
    all: 'unset',
    color: '$mauve11',
    lineHeight: 1.4,
    fontWeight: 'initial',
  }
);

export const ContentListItem = React.forwardRef(
  ({ children, title, ...props }: any, forwardedRef) => (
    <ListItem>
      <NavigationMenuLink
        {...props}
        ref={forwardedRef}
        css={{
          padding: 12,
          borderRadius: 6,
          '&:hover': { backgroundColor: '$mauve3' },
        }}
      >
        <LinkTitle>{title}</LinkTitle>
        <LinkText>{children}</LinkText>
      </NavigationMenuLink>
    </ListItem>
  )
);

export const ContentListItemCallout = React.forwardRef(
  ({ children, ...props }: any, forwardedRef) => (
    <ListItem css={{ gridRow: 'span 3' }}>
      <NavigationMenuLink
        {...props}
        href="/"
        ref={forwardedRef}
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, $purple9 0%, $indigo9 100%);`,
          borderRadius: 6,
          padding: 25,
        }}
      >
        <AvatarDemo></AvatarDemo>
        <LinkTitle
          css={{
            fontSize: 18,
            color: 'white',
            marginTop: 16,
            marginBottom: 7,
          }}
        >
          Meu Portf??lio
        </LinkTitle>
        <LinkText
          css={{
            fontSize: 14,
            color: '$mauve4',
            lineHeight: 1.3,
          }}
        >
          Lorem Ipsum, ipsum lorem.
        </LinkText>
      </NavigationMenuLink>
    </ListItem>
  )
);

export const ViewportPosition = createStyled(
  createPrefix(componentRef, 'ViewportPosition')
).styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 0,
  perspective: '2000px',
});
