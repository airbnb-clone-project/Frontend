import { useState } from 'react';
import FilterModal from '../FilterModal';
import CreatedModal from '../CreatedModal';
import FilterIcon from '../../../../components/icons/FilterIcon';
import PlusIcon from '../../../../components/icons/PlusIcon';
import useModalStore from '../../../../stores/useModalStore';
import BoardEditModal from '../../../../components/@Modal/boardEdit/BoardEditModal';
import BoardCreate from '../BoardCreateModal';
import BoardCleanupModal from '../BoardCleanupModal';
import SaveBoardList from './SaveBoardList';
import UnorganizedIdea from './UnorganizedIdea';
import BoardCoverChangeModal from '../BoardCoverChangeModal';
import BoardImgResizeModal from '../BoardImgResizeModal';
import BoardDeleteModal from '../BoardDeleteModal';
import AddParticipantsModal from '@/components/@Modal/inviteParticipants/AddParticipantsModal';

const Saved = () => {
    // 현재 필터 state
    const [currentFilter, setCurrentFilter] = useState<string>('알파벳순');
    // 필터 변경 함수
    const filterItemOnClick = (filterText: string) => {
        setCurrentFilter(filterText);
    };

    const { isModalOpen, toggleModal } = useModalStore();

    // 추후 진짜 사용자 보드 데이터로 대체
    const array = [1, 2, 3, 3, 4];
    return (
        <div className="w-full">
            <section className="w-full pb-5 mb-7 border-b-[1px] border-gray-300">
                <div className="mb-[12px] flex justify-between px-[16px] h-[48px]">
                    {/* 필터 아이콘 */}
                    <div className="relative">
                        <span
                            onClick={() => toggleModal('filter')}
                            className={`active:scale-90 sticky z-10  flex justify-center items-center cursor-pointer rounded-[50%] ${
                                isModalOpen.filter
                                    ? 'bg-black'
                                    : 'bg-gray hover:bg-[#ebebeb]'
                            } h-[48px] w-[48px]`}
                        >
                            {isModalOpen.filter ? (
                                <>
                                    {/* 활성화 */}
                                    <FilterIcon color="white" />
                                </>
                            ) : (
                                <>
                                    {/* 비활성화 */}
                                    <FilterIcon />
                                </>
                            )}
                        </span>

                        {/* 필터 Modal 조건부 렌더링 */}
                        {isModalOpen.filter && (
                            <FilterModal
                                filterItemOnClick={filterItemOnClick}
                                currentFilter={currentFilter}
                            />
                        )}
                    </div>

                    {/* 만들기 아이콘 */}
                    <div className="relative flex justify-between px-[16px] h-[48px]">
                        <span
                            onClick={() => toggleModal('create')}
                            className={`active:scale-90 sticky z-10  flex justify-center items-center cursor-pointer rounded-[50%] ${
                                isModalOpen.create
                                    ? 'bg-black'
                                    : 'bg-gray hover:bg-[#ebebeb]'
                            } h-[48px] w-[48px]`}
                        >
                            {isModalOpen.create ? (
                                <>
                                    {/* 활성화 */}
                                    <PlusIcon color="white" />
                                </>
                            ) : (
                                <>
                                    {/* 비활성화 */}
                                    <PlusIcon />
                                </>
                            )}
                        </span>

                        {/* 만들기 Modal 조건부 렌더링 */}
                        {isModalOpen.create && <CreatedModal />}
                    </div>
                </div>

                {/* 보드 목록 컴포넌트 */}
                <SaveBoardList list={array} />
            </section>

            {/* 정리되지 않은 아이디어 section */}
            <UnorganizedIdea />

            {/* 보드 수정 Modal */}
            {isModalOpen.boardEdit && <BoardEditModal />}
            {isModalOpen.boardCoverChange && <BoardCoverChangeModal />}
            {isModalOpen.boardImgResize && <BoardImgResizeModal />}
            {isModalOpen.boardDelete && <BoardDeleteModal />}
            {isModalOpen.addParticipants && <AddParticipantsModal />}
            {/* board 만들기 Modal */}
            {isModalOpen.boardCreate && <BoardCreate />}

            {/* board 정리하기 Modal */}
            {isModalOpen.boardCleanup && <BoardCleanupModal />}
        </div>
    );
};

export default Saved;
