// import React from 'react'

type TLayer = {
  btnCSS: string;
  labelBtn: string;
};

export const Layer = ({ btnCSS, labelBtn }: TLayer) => {
  return (
    <>
      <button className={btnCSS}>{labelBtn}</button>
    </>
  );
};
