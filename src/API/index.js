import axios from "axios";

//This is a function requests all the places in the known coordinates
export const getPlacesData = async (type, sw, ne) => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
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
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
