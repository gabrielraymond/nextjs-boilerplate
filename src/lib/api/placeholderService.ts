import { jsonPlaceholderApiClient } from "./client";

export const fetchUserList = async (limit: number = 10, offset: number = 0) => {
  const response = await jsonPlaceholderApiClient.get("/users", {
    // params: { limit, offset },
  });
  return response.data;
};
