import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function ErrorPage() {
  return (
    <div className="error-page">
      Pagina no existe
      <div className="redirect">
        <Link to={'/list'}>REDIRECCIONAR</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
