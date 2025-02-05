import React from 'react';
import Input from './Input';
import { twMerge } from 'tailwind-merge';

interface LabelInputProps {
  onChangeFC: (text: string) => void;
  placeholder: string;
  value: string;
  title: string;
  isEffect?: boolean;
  className?: string;
  inputClassName?: string;
}
const LabelInput = React.memo(
  ({
    onChangeFC,
    placeholder,
    value,
    title,
    isEffect,
    className,
    inputClassName,
    ...props // 기본 input 속성 전달
  }: LabelInputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
      <div className={twMerge('flex flex-col', className)}>
        <label className="text-xs mb-2">{title}</label>
        <Input
          onChangeFC={onChangeFC}
          placeholder={placeholder}
          value={value}
          isEffect={isEffect}
          className={inputClassName}
          {...props} // props 전달
        />
      </div>
    );
  }
);

export default LabelInput;
