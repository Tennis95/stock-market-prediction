import React from 'react'
import bg from './../../images/6256878.jpg'

function Layout({children}) {
  return (
    <div class="container-fluid stock-bg">
      <img src={bg} className="bg-image" />
      <div className="stock-black-bg"></div>
      {children}
    </div>
  );
}

export default Layout