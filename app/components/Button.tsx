import React from "react";

const Button = ({findHandler}:{findHandler: () => void}) => {
    return  <button onClick={findHandler} className=" text-white bg-primary w-[202px] h-[38px] rounded-lg hover:opacity-60  ">
            FIND
            </button>
}

export default Button;