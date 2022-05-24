import React, {createContext, useCallback, useContext, useState} from 'react';

export type RandomData = {
  name?: string;
  phone?: string;
  email?: string;
  region?: string;
  text?: string;
  numberrange?: number;
  currency?: string;
  country?: string;
  list?: any;
  alphanumeric?: string;
  address?: string;
};

const initialStore = {
  name: '',
  phone: '',
  email: '',
  region: 'Alberta',
  text: '',
  numberrange: 1,
  currency: '',
  country: '',
  list: 9,
  alphanumeric: '',
  address: '',
};

const Context = createContext({
  store: initialStore,
  setName: (value: string) => {},
  setEmail: (value: string) => {},
  setPhone: (value: string) => {},
});

interface Props {
  children: React.ReactNode;
}

export default function StoreProvider({children}: Props) {
  const [store, setStore] = useState(initialStore);

  console.log('store1', store);

  const setName = useCallback((value: string) => {
    return setStore(pre => ({...pre, name: value}));
  }, []);

  const setPhone = useCallback((value: string) => {
    return setStore(pre => ({...pre, phone: value}));
  }, []);

  const setEmail = useCallback((value: string) => {
    return setStore(pre => ({...pre, email: value}));
  }, []);

  return (
    <Context.Provider value={{store, setName, setPhone, setEmail}}>
      {children}
    </Context.Provider>
  );
}

export function useStore() {
  const context = useContext(Context);
  return context;
}
