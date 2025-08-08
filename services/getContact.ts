/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "@/lib/axios";

export const getContact = async (id: string, token: string) => {
  let contact, error;
  try {
    const res = await axios.get(`/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.data.ok) {
      throw new Error(res.data.message);
    }
    contact = res.data.data;
  } catch (err: any) {
    // console.log(err);
    error = err.message;
  }

  return {
    contact,
    error,
  };
};
