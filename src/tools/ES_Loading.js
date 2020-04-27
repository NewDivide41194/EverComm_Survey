import React from "react"
import Loader from "../assets/images/loading.gif";

const ESLoading=()=>{
    return(
        <div
      className="w-100 text-light text-center position-absolute"
      style={{
        background: "rgba(0,0,0,0.3)",
        height: "100%",
        paddingTop: "50vh",
        zIndex: 3000,
        top: 0,
      }}
    >
      <img src={Loader} style={{ width: 70 }} alt="loading" />
      <div className="w-100">Loading...</div>
    </div>
    )
}

export default ESLoading