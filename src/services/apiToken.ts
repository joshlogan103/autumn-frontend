const storageKey: string = import.meta.env.VITE_SESSION_KEY as string;

export const setToken = (token: string): void => {
  sessionStorage.setItem(storageKey, `Bearer ${token}`);
};

export const removeToken = (): void => {
  sessionStorage.removeItem(storageKey);
};

export const getToken = (): string | null => {
  return sessionStorage.getItem(storageKey);
};
