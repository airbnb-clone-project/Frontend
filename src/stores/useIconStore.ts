import { create } from 'zustand';

interface IconStore {
    activeIcons: boolean[];
    setActiveIcon: (index: number) => void;
}

const useIconStore = create<IconStore>((set) => ({
    activeIcons: [false, false, false, false, false],
    setActiveIcon: (index) =>
        set((state) => ({
            activeIcons: state.activeIcons.map((_, i) => i === index),
        })),
}));

export default useIconStore;
