import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Collapse,
  Flex,
  Icon,
  LinkBox,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  forwardRef,
  useDisclosure,
  type BoxProps,
} from "@chakra-ui/react";

// TODO: These will just be links
// import { LinkOverlay } from "@src/components";
import type { NavItem } from ".";
import { LinkButton } from "@components/buttons";

export interface NavLinkProps extends BoxProps {
  variant: "desktop" | "mobile";
  navItem: NavItem;
}
type VariantLinkProps = Omit<NavLinkProps, "variant">;

const NavLinkBox = forwardRef<VariantLinkProps, typeof LinkBox>(
  ({ navItem, children, ...delegated }: VariantLinkProps, ref) => {
    const { href } = navItem;
    return (
      <LinkBox
        ref={ref}
        p="2"
        m="0!important" // Spacing is controlled by padding so blank space is still clickable
        outline="0"
        outlineOffset="0"
        color="gray.600"
        _hover={{ textDecoration: "none", color: "gray.800" }}
        {...delegated}
      >
        {/* LinkOverlay raises the z-index of the link, contained to LinkBox */}
        {/* TODO: These will just be links */}
        <LinkButton href={href} />
        {children}
      </LinkBox>
    );
  }
);

function MobileNavLink({ navItem, ...delegated }: VariantLinkProps) {
  const { isOpen, onToggle } = useDisclosure();

  const hasChildren = navItem.children?.length ? true : false;
  return (
    <Stack onClick={hasChildren ? onToggle : undefined}>
      <Flex justify="space-between">
        <NavLinkBox navItem={navItem} {...delegated}>
          <Text as="b">{navItem.label}</Text>
        </NavLinkBox>
        {hasChildren ? (
          <Icon
            as={ChevronDownIcon}
            boxSize="6"
            m="2"
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
          />
        ) : null}
      </Flex>
      {hasChildren ? (
        <Collapse in={isOpen} animateOpacity style={{ margin: "0" }}>
          {navItem.children?.map((childNavItem) => (
            <NavLinkBox key={childNavItem.label} navItem={childNavItem} m="0" px="4" {...delegated}>
              <Text>{childNavItem.label}</Text>
            </NavLinkBox>
          ))}
        </Collapse>
      ) : null}
    </Stack>
  );
}

function DesktopNavLink({ navItem, ...delegated }: VariantLinkProps) {
  const link = (
    <NavLinkBox navItem={navItem} {...delegated}>
      <Text as="b">{navItem.label}</Text>
    </NavLinkBox>
  );

  return navItem.children?.length ? (
    <Popover key={navItem.label} trigger="hover" placement="auto-end">
      <PopoverTrigger>{link}</PopoverTrigger>
      <PopoverContent w="content" rounded="xl" boxShadow="xl" p="2">
        <Stack>
          {/* TODO 179: Make recursive (navItem.children) */}
          {navItem.children.map((childNavItem) => (
            <NavLinkBox
              key={childNavItem.label}
              navItem={childNavItem}
              rounded="md"
              _hover={{
                textDecoration: "none",
                bg: "blue.50",
                color: "blue.500",
              }}
              {...delegated}
            >
              <Text as="b">{childNavItem.label}</Text>
              <Text fontSize="sm">{childNavItem.subLabel}</Text>
            </NavLinkBox>
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  ) : (
    <>{link}</>
  );
}

export function NavLink({ variant, navItem, ...delegated }: NavLinkProps) {
  switch (variant) {
    case "mobile":
      return <MobileNavLink navItem={navItem} {...delegated} />;
    case "desktop":
    default:
      return <DesktopNavLink navItem={navItem} {...delegated} />;
  }
}
