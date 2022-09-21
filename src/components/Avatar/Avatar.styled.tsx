import { createStyled, createPrefix } from '../../../stitches.config';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

const componentRef = 'Avatar';

const StyledAvatar = createStyled(
  createPrefix(componentRef, 'StyledAvatar')
).styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: '$blackA3',
});

const StyledImage = createStyled(
  createPrefix(componentRef, 'StyledImage')
).styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = createStyled(
  createPrefix(componentRef, 'StyledFallback')
).styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '$violet11',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

export const Flex = createStyled(createPrefix(componentRef, 'Flex')).styled(
  'div',
  { display: 'flex' }
);
