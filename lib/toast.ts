import { useToastStore } from "@/stores/toastStore";

export const toast = (message: string) => {
  useToastStore.getState().toast(message);
};
