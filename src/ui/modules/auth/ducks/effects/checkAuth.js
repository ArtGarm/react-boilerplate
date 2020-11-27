import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkAuthAction } from '../index';

export function useCheckAuth() {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth.state);
  const {
    location: { pathname },
  } = useHistory();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [pathname, dispatch]);

  return authState;
}
