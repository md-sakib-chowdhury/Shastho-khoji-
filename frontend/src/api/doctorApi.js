import axios from "./axiosInstance";

export const getDoctorsApi = (params) => axios.get("/doctors", { params });
export const getDoctorByIdApi = (id) => axios.get(`/doctors/${id}`);
export const bookAppointmentApi = (data) => axios.post("/appointments", data);