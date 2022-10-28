import create from 'zustand';

const useStore = create((set) => ({
    roleVariable: 0,
    userName: 'JoJo',
    user: {},
    setRoleVariable: (val) => set((state) => ({ roleVariable: val })),
    setUserName: (val) => set((state) => ({ userName: val })),
    setUser: (val) => set((state) => ({ user: val })),
}));

export default useStore;
