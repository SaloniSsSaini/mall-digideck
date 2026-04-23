"use client";

import { create } from "zustand";

type UserType = "retail" | "events" | "sponsor" | null;

interface UserTypeState {
  userType: UserType;
  setUserType: (type: UserType) => void;
  resetUserType: () => void;
}

export const useUserType = create<UserTypeState>((set) => ({
  userType: null,

  setUserType: (type) => set({ userType: type }),

  resetUserType: () => set({ userType: null }),
}));