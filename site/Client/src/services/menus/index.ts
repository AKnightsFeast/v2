import axios from 'axios';

export const getMenuMonths = (menuYear: number) => axios.get('/menus/months', { params: { year: menuYear } });