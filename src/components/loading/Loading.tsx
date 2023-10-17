import { FC, ReactNode } from 'react';
import './loading.style.scss'

type LoadingProps = {
  isLoading: boolean;
  children?: (() => ReactNode) | ReactNode;
  loadingWrapStyles?: object;
};

const Loading: FC<LoadingProps> = ({ isLoading, children, loadingWrapStyles }) => {
  return (
    <div style={{ ...loadingWrapStyles }}>
      {isLoading && (
        <div
          className='loading'
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {children && typeof children === 'function' ? children() : children}
    </div>
  );
};

export default Loading;
