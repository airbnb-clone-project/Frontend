import { forwardRef, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { SignupFormValues } from '@/utils/schemas/user-schema';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: 'username' | 'password' | 'birthdate';
  type: 'email' | 'password' | 'text' | 'date';
  register: UseFormRegister<SignupFormValues>;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, id, type, register }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    return (
      <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-normal ml-2 mb-1">
          {label}
        </label>
        <div className="flex items-center px-4 py-3 border border-gray-300 rounded-2xl">
          <input
            id={id}
            type={type === 'password' && isPasswordVisible ? 'text' : type}
            className="w-full outline-none"
            {...register(id)}
          />

          {/* Password Toggle Button */}
          {type === 'password' && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-2 text-gray-500"
              aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
              aria-checked={false}
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          )}
        </div>
      </div>
    );
  }
);

AuthInput.displayName = 'AuthInput';
export default AuthInput;
