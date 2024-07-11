import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common[
  "Authorization"
] = `Client-ID bt2lnsDE9xy-0TQEjulCe5qQ3O_qvEKPP90J2YSXqCA`;

export const getPostByQuery = async ({ page, query }) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
  });
  return response.data;
};
