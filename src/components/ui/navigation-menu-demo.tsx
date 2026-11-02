'use client';

import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/alert-dialog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function NavigationMenuDemo() {
  return (
    <div className="p-6 flex justify-center w-full">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      to="/"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">ENTWY</div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Beautifully designed engineering systems built with React and modern UI architectures.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/services" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/services/strategy" title="Strategy">
                  How to plan dependencies and structure your enterprise app.
                </ListItem>
                <ListItem href="/services/design" title="Design Systems">
                  Styles for tokens, design libraries, and component states.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="/services">Docs</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>List</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4 p-2">
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/services" className="block p-2 rounded-md hover:bg-accent">
                      <div className="font-medium">Components</div>
                      <div className="text-muted-foreground text-sm">Browse all components in the library.</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/about" className="block p-2 rounded-md hover:bg-accent">
                      <div className="font-medium">Documentation</div>
                      <div className="text-muted-foreground text-sm">Learn how to use the library.</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/insights" className="block p-2 rounded-md hover:bg-accent">
                      <div className="font-medium">Blog</div>
                      <div className="text-muted-foreground text-sm">Read our latest blog posts.</div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-2 p-2">
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/services" className="block p-2 text-sm rounded-md hover:bg-accent">Components</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/about" className="block p-2 text-sm rounded-md hover:bg-accent">Documentation</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/solutions" className="block p-2 text-sm rounded-md hover:bg-accent">Blocks</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-2 p-2">
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="#" className="flex items-center gap-2 p-2 text-sm rounded-md hover:bg-accent">
                      <CircleHelpIcon className="size-4" />
                      Backlog
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#" className="flex items-center gap-2 p-2 text-sm rounded-md hover:bg-accent">
                      <CircleIcon className="size-4" />
                      To Do
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#" className="flex items-center gap-2 p-2 text-sm rounded-md hover:bg-accent">
                      <CircleCheckIcon className="size-4" />
                      Done
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
