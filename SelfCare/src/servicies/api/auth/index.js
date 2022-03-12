import { post } from "services/apiMykonos/api.service";

export const signIn = async ({ data }) => {
  try {
    const res = await post({
      url: "login",
      data,
    });

    if (res.status === "ERROR") throw res;
    return res;
  } catch (error) {
    throw error;
  }
};
