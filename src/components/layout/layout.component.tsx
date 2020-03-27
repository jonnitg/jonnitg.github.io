import React from 'react';
import useMousePointer from '@hooks/useMousePointer';

const Layout = ({ children }) => {
  const MousePointer = useMousePointer();
  return (
    <div>
      {children}
      <MousePointer />
    </div>
  );
};

export default Layout;
