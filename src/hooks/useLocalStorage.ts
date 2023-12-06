export default function useLocalStotage() {
  const setItem = <T>(name: string, value: T) => {
    localStorage.setItem(name, JSON.stringify(value));
  };

  const getItem = <T>(name: string) => {
    const value = localStorage.getItem(name);
    return value ? (JSON.parse(value) as T) : undefined;
  };

  const removeItem = (name: string): void => {
    localStorage.removeItem(name);
  };

  return { setItem, getItem, removeItem };
}
