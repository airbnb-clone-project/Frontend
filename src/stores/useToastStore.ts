import { create } from 'zustand';

interface useToastStore {
  isVisible: boolean;
  text: string;
  isVisibleToggle: () => void;
  showToast: (msg: string) => void;
  hideToast: () => void;
}

const useToastStore = create<useToastStore>((set) => ({
  isVisible: false,
  text: 'xptmxmwnd',
  showToast: (message: string) =>
    set(() => ({
      text: message,
      isVisible: true,
    })),
  hideToast: () =>
    set(() => ({
      isVisible: false,
    })),
  isVisibleToggle: () =>
    set((state) => ({
      isVisible: !state.isVisible,
    })),
}));

export default useToastStore;
