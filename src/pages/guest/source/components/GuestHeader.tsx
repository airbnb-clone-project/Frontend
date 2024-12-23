import { Link } from 'react-router-dom';

import Button from '@/components/common/Button';

import { BsPinterest } from 'react-icons/bs';

const GuestHeader = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <div className="text-red-default flex items-center gap-1 px-3">
          <BsPinterest className="text-4xl" />
          <h1 className="font-bold text-xl ">Pinterest</h1>
        </div>
        {/* 탐색페이지로 이동 경로변경 필요함 */}
        <Link
          to={'/'}
          rel="noopener noreferrer"
          className="text-base font-semibold text-black"
        >
          탐색
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex items-center text-base font-semibold text-black">
          <li className="m-4">
            <Link
              to={'/'}
              rel="noopener noreferrer"
              className="hover:underline"
            >
              소개
            </Link>
          </li>
          <li className="m-4">
            <Link
              to={'/'}
              rel="noopener noreferrer"
              className="hover:underline"
            >
              비즈니스
            </Link>
          </li>
          <li className="m-4">
            <Link
              to={'/'}
              rel="noopener noreferrer"
              className="hover:underline"
            >
              언론
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <Button color="red" text="로그인" />
          <Button color="gray" text="가입하기" />
        </div>
      </div>
    </header>
  );
};

export default GuestHeader;
