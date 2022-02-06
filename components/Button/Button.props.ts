import React from "react";

export interface ButtonProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
  children: React.ReactNode;
  appearance: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none';
}