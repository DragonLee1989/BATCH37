import { create } from "zustand";

type BankType = {
  count: number;
  increment: (n: number) => void;
  decrement: (n: number) => void;
};

const useBankStore = create<BankType>((set) => ({
  count: 0,
  decrement: (amount) => set((state) => ({ count: state.count - amount })),
  increment: (amount) => set((state) => ({ count: state.count + amount })),
}));

export default useBankStore;
