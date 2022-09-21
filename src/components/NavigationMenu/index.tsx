import {
  ContentList,
  ContentListItem,
  ContentListItemCallout,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  ViewportPosition,
} from './NavigationMenu.styled';

export const NavigationMenuDemo = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout="one">
              <ContentListItemCallout />
              <ContentListItem href="" title="Lorem">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </ContentListItem>
              <ContentListItem href="" title="Lorem">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </ContentListItem>
              <ContentListItem href="" title="Lorem">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </ContentListItem>
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout="two">
              <ContentListItem title="Lorem" href="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </ContentListItem>
              <ContentListItem title="Lorem" href="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </ContentListItem>
              <ContentListItem title="Lorem" href="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </ContentListItem>
              <ContentListItem title="Lorem" href="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </ContentListItem>
              <ContentListItem title="Lorem" href="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </ContentListItem>
              <ContentListItem title="Lorem" href="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </ContentListItem>
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="">Linkedin</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="">Github</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenu>
  );
};
