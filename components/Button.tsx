import React, {type ReactElement } from 'react'

interface ButtonProps {
  variant: 'primary' | 'secondary';
  text:string;
  StartIcon?:ReactElement;
  onClick?: () => void;
}
const styles = {
  primary: 'bg-purple-600 text-white',
  secondary: 'bg-purple-200 text-purple-600',
};

const defaultStyles = 'px-4 py-2 rounded-lg font-medium flex items-center gap-2 cursor-pointer';

const Button = ({variant, text, StartIcon, onClick}:ButtonProps & { onClick?: () => void }) => {
  return (
    <button className={styles[variant]+" "+defaultStyles} onClick={onClick}>
        {StartIcon}
        {text}
    </button>
  )
}

export default Button