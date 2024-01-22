import axios from 'axios';

const BASE_URL = 'https://youtube-v311.p.rapidapi.com';

const options = {
  url: BASE_URL,

  params: {
    part: 'snippet',
    channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
    maxResults: '3',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

//'ff5c3a226emsha9d8a344feefa5fp117ea7jsn5b9013c365c6'
