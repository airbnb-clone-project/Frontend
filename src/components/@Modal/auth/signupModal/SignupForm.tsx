import { useState } from 'react';
import Cookies from 'universal-cookie';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';

import { user } from '@/services/auth/getUser';
import { SignupFormValues, signupSchema } from '@/utils/schemas/user-schema';

import AppBtn from '@/components/common/AppBtn';
import AuthInput from '@/components/common/AuthInput';
import GoogleButton from '@/components/common/GoogleBtn';

const SignupForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    const cookies = new Cookies();
    setIsLoading(true);

    try {
      const res = await user.create(data);

      const authorizationHeader = res.headers?.get('Authorization');
      // Bearer <token>에서 실제 토큰 추출
      const accessToken = authorizationHeader
        ? authorizationHeader.split(' ')[1]
        : null;

      if (accessToken) {
        // 쿠키에 accessToken 저장 (1일 만료)
        cookies.set('accessToken', accessToken, {
          path: '/',
          expires: new Date(Date.now() + 86400e3),
        });
        navigate('/');
      } else {
        console.error('Authorization 헤더에 유효한 accessToken이 없습니다.');
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true); // 로딩 상태 활성화
    try {
      console.log('구글 로그인 로직 실행');
      await user.signInWithGoogle();
    } catch (error) {
      console.error('Google 로그인 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    /**
     * 📌 회원가입 수정사항
     * 1. username을 email로 변경해야합니다.
     * 2. 벨리데이션체크 => 백엔드 데이터에서 받는 스키마 속성 확인
     *
     */
    <form onSubmit={handleSubmit(onSubmit)} className="w-[268px] mx-auto">
      {/* 이메일 입력 */}
      <AuthInput
        label="이메일"
        id="username"
        type="email"
        register={register}
      />
      <ErrorMessage
        errors={errors}
        name="username"
        as="p"
        className="text-red-500 text-sm"
      />

      {/* 비밀번호 입력 */}
      <AuthInput
        label="비밀번호"
        id="password"
        type="password"
        register={register}
      />
      <ErrorMessage
        errors={errors}
        name="password"
        as="p"
        className="text-red-500 text-sm"
      />

      {/* 생년월일 입력 */}
      <div>
        <label htmlFor="birthdate" className="block text-sm font-medium">
          생년월일
        </label>
        <div className="flex items-center px-4 py-3 border border-gray-300 rounded-2xl">
          <input
            id="birthdate"
            type="date"
            className="w-full outline-none"
            {...register('birthdate')}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="birthdate"
          as="p"
          className="text-red-500 text-sm"
        />
      </div>

      {/* 제출 버튼 */}
      <div className="flex flex-col items-center justify-center mt-6">
        <AppBtn
          type="submit"
          color="red"
          className="w-full"
          disabled={isLoading}
          aria-checked={isLoading}
        >
          {isLoading ? '회원가입 중...' : '계속하기'}
        </AppBtn>
        <p className="my-2 text-sm text-black font-bold">또는</p>
        <GoogleButton isLoading={false} onClick={handleGoogleLogin} />
      </div>
    </form>
  );
};

export default SignupForm;
