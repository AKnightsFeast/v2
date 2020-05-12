import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';

import { LoadMenuDatesAsync } from '../store/menus/monthly/actions';

export default () => {
    const dispatch = useDispatch();

    //useLayoutEffect(() => { dispatch(LoadMenuDatesAsync.request()) }, [dispatch]);
}