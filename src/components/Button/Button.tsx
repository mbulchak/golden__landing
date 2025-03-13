import React from 'react';
import './Button.scss'

type Props = {
  buttonName: string;
};

export const Button: React.FC<Props> = ({buttonName}) => {
  return <button className='button'>{buttonName}</button>;
};
