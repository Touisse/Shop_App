import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTE5ZDEzNjMwNGFiM2U2OTFiZTk0ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTc4MTY3MSwiZXhwIjoxNjUwMDQwODcxfQ.xQHUB0px2nuU1xIJRTVq37e-P3ffUKfxAufx8VRaH5Y";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});