import React from "react";
import { Button, Link } from "react-daisyui";

type Props = {
  href: string;
  buttonColor:
    | "primary"
    | "secondary"
    | "accent"
    | "ghost"
    | "info"
    | "success"
    | "warning"
    | "error"
    | undefined;
  buttonText: string;
};

export const LinkButton = ({ href, buttonColor, buttonText }: Props) => {
  return (
    <Link href={href}>
      <Button color={buttonColor}>{buttonText}</Button>
    </Link>
  );
};
