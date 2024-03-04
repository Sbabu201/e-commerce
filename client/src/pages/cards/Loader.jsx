import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import RingLoader from "react-spinners/RingLoader";


function Loader() {

    return (
        <div className="sweet-loading  min-h-screen flex justify-center items-center">
            <RingLoader color="#36d7b7" />
        </div>
    );
}

export default Loader;