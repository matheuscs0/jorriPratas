import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Componente de alto nível para controlar o scroll para o topo em transições de página
const ScrollToTop = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
