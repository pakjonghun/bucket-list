import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

const CreatePortal: FC<Props> = ({ children }) => {
  return createPortal(children, document.body);
};

export default CreatePortal;
