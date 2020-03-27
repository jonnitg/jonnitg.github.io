import { createContext, useState } from 'react';

const initState = {};

const PointerClassesContext = createContext(null);

function PointerClassesProvider({ children }) {
  const [classes, setClasses] = useState(initState);

  return (
    <PointerClassesContext.Provider value={{ classes, setClasses }}>
      {children}
    </PointerClassesContext.Provider>
  );
}

export { PointerClassesContext, PointerClassesProvider };
