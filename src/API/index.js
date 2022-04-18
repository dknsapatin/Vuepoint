import axios from "axios";

// const URL =
//   "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

//This is a function requests all the places in the known coordinates
export const getPlacesData = async (sw, ne) => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      // headers: {
      //   "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      //   "X-RapidAPI-Key": "FIND IN RAPID API RESTAURANT BOUNDARY",
      // },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
