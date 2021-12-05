import React from "react";

export interface TagProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm';
  children: React.ReactNode;
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
}