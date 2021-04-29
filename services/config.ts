import axios from 'axios';

export const getConfigData = () => axios.get('/data/config.json').then(resp => resp);
