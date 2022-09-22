import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
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
          <NavigationMenuLink
            css={{ display: 'flex', alignItems: 'center', gap: '0 5px' }}
            href=""
          >
            Linkedin
            <LinkedInLogoIcon />
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            css={{ display: 'flex', alignItems: 'center', gap: '0 5px' }}
            href=""
          >
            Github
            <GitHubLogoIcon />
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenu>
  );
};
