import { blackA } from '@radix-ui/colors';
import { AspectRatio, Box, Img } from './AspectRation.styled';

interface AspectRatioDemoProps {
  image: string;
}

const AspectRatioDemo = ({ image }: AspectRatioDemoProps) => (
  <Box
    css={{
      width: 300,
      borderRadius: 6,
      overflow: 'hidden',
      boxShadow: `0 2px 10px ${blackA.blackA7}`,
    }}
  >
    <AspectRatio.Root ratio={16 / 9}>
      <Img src={image} alt="" />
    </AspectRatio.Root>
  </Box>
);

export default AspectRatioDemo;
