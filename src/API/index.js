import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  url: URL,
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    "X-RapidAPI-Key": "3111d186a4mshf41c56e8b2dc8eap1d7fe9jsnde4767fda995",
  },
};

export const getPlacesData = async () => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {}
};
