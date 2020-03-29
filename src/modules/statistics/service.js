import axios from 'axios';

export default {
    getStatistics
}

function getStatistics() {
    return axios.get(`https://hpb.health.gov.lk/api/get-current-statistical`).then((data) => data.data.data);
}