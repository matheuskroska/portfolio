import { blackA } from '@radix-ui/colors';
import { AspectRatio, Box, Img } from './AspectRation.styled';

const AspectRatioDemo = () => (
  <Box
    css={{
      width: 300,
      borderRadius: 6,
      overflow: 'hidden',
      boxShadow: `0 2px 10px ${blackA.blackA7}`,
    }}
  >
    <AspectRatio.Root ratio={16 / 9}>
      <Img
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photo by Tobias Tullius"
      />
    </AspectRatio.Root>
  </Box>
);

export default AspectRatioDemo;
