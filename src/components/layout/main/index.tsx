import { BackIcon } from '../../../assets';
import Header  from '../header';
import { useRouter } from '../../../hooks/useRouter';
import { FC, ReactNode } from 'react';
import { colors } from '../../../themes/common/colors';
import './main.style.scss';

type MainProps = {
  children?: ReactNode | string;
  disableHeader?: boolean;
  isBack?: boolean;
};

const Main: FC<MainProps> = ({ children, disableHeader, isBack }) => {
  const router = useRouter();
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, rgba(1,5,18,1) 0%, rgba(14,8,96,1) 94%)',
      }}
    >
      {!disableHeader && <Header hasSearch={!isBack} />}
      <div>
        {isBack && (
          <div
            className='container'
            onClick={() => {
              router.navigate(-1);

              window.scrollTo({ top: 0 });
            }}
          >
            <BackIcon style={{ width: '20px', height: '20px' }} />
            <p
              style={{
                color: colors.white,
                marginLeft: '10px',
                fontSize: '16px',
              }}
            >
              Go back to list
            </p>
          </div>
        )}
        <div
          style={{
            width: '100%',
            minHeight: '100vh',
            overflowX: 'hidden',
            transition: 'all .3s cubic-bezier(.59,.29,.15,.93)',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Main;
