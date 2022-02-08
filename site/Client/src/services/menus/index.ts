import axios from 'axios';

export const getMenuMonths = (menuYear: number) => axios.get('api/menus/months', { params: { year: menuYear } });