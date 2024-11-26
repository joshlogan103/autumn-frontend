const storageKey = import.meta.env.VITE_SESSION_KEY

export const setToken = (token) => {
  sessionStorage.setItem(storageKey, `Bearer ${token}`)
}

export const removeToken = () => {
  sessionStorage.removeItem(storageKey)
}

export const getToken = () => {
  return sessionStorage.getItem(storageKey)
}