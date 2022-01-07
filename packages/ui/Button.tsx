import * as React from 'react';
import { User } from 'db';

type ButtonProps = {
  user?: User;
};

export const Button = ({ user }: ButtonProps) => {
  return <button>{user ? user.name : 'Boop'}</button>;
};
