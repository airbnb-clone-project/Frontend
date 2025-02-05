import { memo } from 'react';

import Backdrop from './Backdrop';
import SearchContent from './SearchContent';

interface FocusModalProps {
  handleFocus: (bol: boolean) => void;
}

const FocusModal = memo(({ handleFocus }: FocusModalProps) => {
  return (
    <>
      <Backdrop onClose={() => handleFocus(false)} />
      <SearchContent />
    </>
  );
});

FocusModal.displayName = 'FocusModal';

export default FocusModal;
