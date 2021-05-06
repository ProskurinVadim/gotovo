import React from "react"

const Data = ({data=""}) => {
    const dataArr = data.split(".");
  return (
      <>
          <p>{`${dataArr[0]}.${dataArr[1]}`}</p>
          <p> {dataArr[2]}</p>
      </>

  )
};

export default Data