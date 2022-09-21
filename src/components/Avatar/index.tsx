import { Avatar, AvatarFallback, AvatarImage, Flex } from './Avatar.styled';

const AvatarDemo = () => (
  <Flex css={{ gap: 20 }}>
    <Avatar>
      <AvatarImage
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Matheus Kroska"
      />
      <AvatarFallback delayMs={600}>MK</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>MK</AvatarFallback>
    </Avatar>
  </Flex>
);

export default AvatarDemo;
