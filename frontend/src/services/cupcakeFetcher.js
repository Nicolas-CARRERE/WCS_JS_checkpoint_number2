import axiosInstance from "./axiosInstance";

// Creation of the "exerciseFetcher" object which contains the different API call methods
const cupcakeFetcher = {
  // getCupcakes is the query that retrieves the Cupcakes
  getCupcakes: async () => (await axiosInstance.get("/cupcakes/")).data,
  // getAccessories is the query that retrieves the accessories
  getAccessories: async () => (await axiosInstance.get("/accessories/")).data,
  // getAccessories is the query that retrieves the accessories
  getCupcakeByID: async (id) =>
    (await axiosInstance.get(`/cupcakes/${id}`)).data,
};

export default cupcakeFetcher;
