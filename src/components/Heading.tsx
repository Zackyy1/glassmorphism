import React from "react";

interface HeadingProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const Heading = ({ tag: Tag, children }: HeadingProps) => {
  return <Tag>{children}</Tag>;
};

export default Heading;
