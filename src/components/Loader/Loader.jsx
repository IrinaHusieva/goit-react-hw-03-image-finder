import React from 'react';
import { Circles } from 'react-loader-spinner';
import loader from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={loader.loader}>
      <Circles
            height="80"
            width="80"
        color="#0d2d8c"
                ariaLabel="circles-loading"
        wrapperStyle={{
        }}
        wrapperClass=""
        visible={true}
/>
    </div>
  );
};

export default Loader;