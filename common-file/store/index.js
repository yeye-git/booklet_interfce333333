import create from 'zustand';

const useStore = create((set) => ({
    roleVariable: 0,
    user: {},
    token: '',
    setRoleVariable: (val) => set((state) => ({ roleVariable: val })),
    setUserName: (val) => set((state) => ({ userName: val })),
    setUser: (val) => set((state) => ({ user: val })),
    setToken: (val) => set((state) => ({ token: val })),
}));

export default useStore;
