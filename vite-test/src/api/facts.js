import axios from 'axios';


export const getFact = async () => {
  try {
   const response = await axios.get(
      'https://uselessfacts.jsph.pl/api/v2/facts/random',
      {
        headers: {
          Accept: 'application/json'
        }
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    return response.data; 
  } catch (error) {
    throw new Error(error.message || "Failed to fetch data");
  }
};

export const todaysFact = async () => {
  try {
    const response = await axios.get(
      'https://uselessfacts.jsph.pl/api/v2/facts/today',
      {
        headers: {
          Accept: 'application/json'
        }
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    return response.data; 
  } catch (error) {
    throw new Error(error.message || "Failed to fetch data");
  }
};