import { create } from "zustand";

interface ToastStore {
  open: boolean;
  message: string;
  toast: (message: string) => void;
}

export const useToastStore = create<ToastStore>()((set) => ({
  open: false,
  message: "",
  toast: (message) => {
    set({ open: true, message });
    setTimeout(() => {
      set({ open: false });
    }, 3000);
  },
}));
