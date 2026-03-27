import { useState } from 'react';
import { RouterContext } from './context/RouterContext';
import { useEffect } from 'react';

export function Router({ children }){
  const [currentPath, setPath] = useState(window.location.pathname)
  

  const navigate = (to) => {
    window.history.pushState({},"", to)
    setPath(to)
  }

  useEffect(() => {
    const handlePop = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePop);

    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  return (
    <RouterContext.Provider value={{currentPath,navigate}}>
      {children}
    </RouterContext.Provider>
  )
}

export default Router