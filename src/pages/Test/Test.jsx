import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUserThunk } from 'redux/auth/thunk.auth';
import { TestLog } from './TestLog';
import { TestReg } from './TestReg';

export const Test = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <>
      <div style={{ display: 'flex', gap: '30px' }}>
        <TestReg />
        <TestLog />
      </div>
      {/* <div>
        <button>Get daily rate</button>
        <button>GetInfo</button>
        <button>GetInfo</button>
        <button>GetInfo</button>
        <button>GetInfo</button>
      </div> */}
    </>
  );
};
