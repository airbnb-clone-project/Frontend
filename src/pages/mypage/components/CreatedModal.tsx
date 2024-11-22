import ModalLayout from '../../../components/@Modal/ModalLayout';

const CreatedModal = () => {
    return (
        <>
            <ModalLayout modalName={'create'}></ModalLayout>
            <div
                style={{
                    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.1)',
                }}
                className="z-20 rounded-[16px] border-[1px] w-[198px] absolute bottom-[-8px] right-[0%] transform  translate-y-full px-[8px] py-[8px] text-[12px] text-[#111111] bg-white rounded shadow-lg"
            >
                <p className="font-nomal px-[8px] py-[8px] text-[12px] text-[#111111]">
                    만들기
                </p>
                <p
                    className={
                        'hover:bg-[#e9e9e9] flex justify-between items-center cursor-pointer rounded-[8px] font-semibold text-[16px] px-[8px] py-[8px]'
                    }
                >
                    <span>핀</span>
                </p>
                <p
                    className={
                        'hover:bg-[#e9e9e9] flex justify-between items-center cursor-pointer rounded-[8px] font-semibold text-[16px] px-[8px] py-[8px]'
                    }
                >
                    <span>보드</span>
                </p>
            </div>
        </>
    );
};

export default CreatedModal;
