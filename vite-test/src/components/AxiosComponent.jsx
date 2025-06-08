import axios from 'axios';


export const getFact = async () => {
  try {
    const url = `https://uselessfacts.jsph.pl/api/v2/facts/random`;
    headers:
    accept: 'application/json'
    const response = await axios.get(url);
    console.log(response)

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
    const url = `https://uselessfacts.jsph.pl/api/v2/facts/today`;
    headers:
    accept: 'application/json'
    const response = await axios.get(url);
    console.log(response)

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    return response.data; 
  } catch (error) {
    throw new Error(error.message || "Failed to fetch data");
  }
};