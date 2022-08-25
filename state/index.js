import { atom, useAtom } from "jotai";

const openConnectWalletMoalAtom = atom(false);
export const useOpeConnectWalletModal = () =>
  useAtom(openConnectWalletMoalAtom);
