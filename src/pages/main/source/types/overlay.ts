import overlayName from '@/types/overlayName';

export interface IOverlay {
  activeId: {
    key: overlayName | null;
    bol: boolean;
  };
  handleClick: (key: overlayName) => void;
  handleRef: (node: HTMLDivElement | null) => void;
}
