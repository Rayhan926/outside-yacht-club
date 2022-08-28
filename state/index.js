import { atom, useAtom } from "jotai";

const openConnectWalletMoalAtom = atom(false);
export const useOpeConnectWalletModal = () =>
  useAtom(openConnectWalletMoalAtom);

const mintStepAtom = atom(1);
export const useMintStep = () => useAtom(mintStepAtom);
