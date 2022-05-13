import { NextComponentType } from "next";
import { Link as MUILink, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import NextLink from "next/link";
import { ReactComponentElement, ReactNode } from "react";
import { randomUUID } from "crypto";

export interface LinkProps {
  children: ReactNode;
  href: string;
}

export const Link = ({ children, href }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <MUILink>{children}</MUILink>
    </NextLink>
  )
}

export interface ListLinkProps {
  href: string;
  icon: ReactNode;
  text: string;
  tooltipPlace?: "bottom-end" |
  "bottom-start" |
  "bottom" |
  "left-end" |
  "left-start" |
  "left" |
  "right-end" |
  "right-start" |
  "right" |
  "top-end" |
  "top-start" |
  "top";
}

export const ListLink = (props: ListLinkProps) => {
  const { href, icon, text, tooltipPlace } = props;
  return (
    <NextLink href={href} passHref>
      {/* <Tooltip title={text} {props.tooltipPlace ? `placement={ ${props.tooltipPlace} }` : null}> */}
      <Tooltip title={text} placement={tooltipPlace} arrow>
        <ListItem button key={text.replaceAll('\s', '_')} component='a'>
          {/* <ListItemButton key={text.replaceAll('\s', '_')} component='a'> */}
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{text}</ListItemText>
          {/* </ListItemButton> */}
        </ListItem>
      </Tooltip>
    </NextLink >
  );
}

export default Link;