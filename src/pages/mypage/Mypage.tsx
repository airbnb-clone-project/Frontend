import { Link, Outlet, useLocation } from 'react-router-dom';
import useModalStore from '../../stores/useModalStore';
import PinCodeDownloadModal from './components/PinCodeDownloadModal';
import { useRef } from 'react';
import useStickyShadow from '@/hooks/useStickyShadow';
// import { useEffect, useRef, useState } from 'react';

const Mypage = () => {
    const location = useLocation();

    const downShadow = useRef<HTMLDivElement | null>(null);

    const { isModalOpen, toggleModal } = useModalStore();

    const isActive = (path: string) => location.pathname === path;

    useStickyShadow(downShadow, 'down');

    return (
        <body className="flex">
            {/* 임시 사이드바 */}
            <div className="sticky top-0 left-0 w-[71px] h-[100vh] border-r border-gray-300">
                SIDE
            </div>

            {/* 프로필Img, 이름, ID, 팔로잉, 공유&프로필수정Button section */}
            <section className="w-[100%] pt-[30px] flex flex-col  items-center">
                {/* 프로필Img */}
                <div
                    // onClick={() => pincodeModalToggle()}
                    onClick={() => toggleModal('pincode')}
                    className="z-10 hover:cursor-pointer relative w-[120px] h-[120px] bg-[#dfdfdf] rounded-full flex items-center justify-center"
                >
                    <span className="text-[40px] text-[#211922] font-semibold">
                        T
                    </span>
                </div>

                {/* 유저 이름 */}
                <h1 className="text-[36px] font-semibold">Taewok</h1>

                {/* 유저 ID */}
                <div className="flex items-center">
                    <svg
                        className="mx-[4px] text-[#767676] fill-current"
                        viewBox="0 0 24 24"
                        height="16"
                        width="16"
                    >
                        <path d="M7.55 23.12c-.15-1.36-.04-2.67.25-3.93L9 14.02a7 7 0 0 1-.34-2.07c0-1.68.8-2.88 2.08-2.88.88 0 1.53.62 1.53 1.8q0 .57-.22 1.28l-.53 1.73q-.15.5-.15.91c0 1.2.92 1.88 2.09 1.88 2.08 0 3.57-2.16 3.57-4.96 0-3.12-2.04-5.11-5.06-5.11-3.36 0-5.49 2.19-5.49 5.23 0 1.23.38 2.37 1.11 3.15-.24.4-.5.48-.88.48-1.2 0-2.34-1.7-2.34-4 0-3.99 3.2-7.16 7.68-7.16 4.7 0 7.66 3.28 7.66 7.33 0 4.07-2.88 7.13-5.98 7.13a3.8 3.8 0 0 1-3.07-1.47l-.61 2.5c-.33 1.28-.83 2.5-1.62 3.67A12 12 0 0 0 24 11.99 12 12 0 1 0 7.55 23.12"></path>
                    </svg>
                    <span className="text-[14px] text-[#767676]">
                        taewok5163
                    </span>
                </div>

                {/* 유저 팔로잉 count */}
                <span className="mt-[4px] mb-[4px] text-[16px] text-[#111111]">
                    팔로잉 0명
                </span>

                {/* 공유, 프로필 수정 button */}
                <div className="pb-[32px] pt-[8px] flex gap-[8px] text-[#111111] font-semibold">
                    <button className="sticky z-10 hover:bg-[#d8d8d8] px-[16px] py-[12px] rounded-[24px] bg-[#e9e9e9] min-w-[60px] min-h-[48px]">
                        공유
                    </button>
                    <button className="sticky z-10 hover:bg-[#d8d8d8] px-[16px] py-[12px] rounded-[24px] bg-[#e9e9e9] min-w-[60px] min-h-[48px]">
                        프로필 수정
                    </button>
                </div>

                {/* 생성됨, 저장됨 Tab Button*/}
                <div
                    ref={downShadow}
                    className="sticky top-[-1px] bg-white z-20 gap-[24px] flex items-center text-[#111111] font-semibold h-[61px] w-full justify-center"
                >
                    <div
                        className={`active:scale-95 rounded-[8px] px-[8px] py-[8px] ${
                            isActive('/mypage/created')
                                ? ''
                                : 'hover:bg-[#ebebeb]'
                        }`}
                    >
                        <Link
                            to="/mypage/created"
                            className={`sticky z-10 w-[100%] h-[100%] py-[8px] ${
                                isActive('/mypage/created')
                                    ? 'border-b-[3px] border-black'
                                    : ''
                            }`}
                        >
                            생성됨
                        </Link>
                    </div>
                    <div
                        className={`active:scale-95 sticky z-10 rounded-[8px] px-[8px] py-[8px] ${
                            isActive('/mypage') ? '' : 'hover:bg-[#ebebeb]'
                        }`}
                    >
                        <Link
                            to="/mypage"
                            className={`w-[100%] h-[100%] py-[8px] ${
                                isActive('/mypage')
                                    ? 'border-b-[3px] border-black'
                                    : ''
                            }`}
                        >
                            저장됨
                        </Link>
                    </div>
                </div>

                {/* 저장됨, 생성됨 Tab 중첩 라우팅 */}
                <Outlet />

                {/* 핀코드 다운로드 Modal */}
                {isModalOpen.pincode && <PinCodeDownloadModal />}
            </section>
        </body>
    );
};

export default Mypage;
