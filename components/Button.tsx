import React, {type ReactElement } from 'react'

interface ButtonProps {
  variant: 'primary' | 'secondary';
  text:string;
  StartIcon?:ReactElement;
  onClick?: () => void;
  loading?:boolean;
}
const styles = {
  primary: 'bg-purple-600 text-white',
  secondary: 'bg-purple-200 text-purple-600',
};

const defaultStyles = 'px-4 py-2 rounded-lg font-medium flex items-center gap-2 cursor-pointer';

const Button = ({variant, text, StartIcon, onClick,loading}:ButtonProps & { onClick?: () => void }) => {
  return (
    <button className={styles[variant]+" "+defaultStyles+" "+(loading ? 'opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed' : '')} onClick={onClick} disabled={loading}>
        {StartIcon}
        {text}
    </button>
  )
}

export default Button