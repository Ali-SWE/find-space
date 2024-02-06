import React, { ReactNode }  from "react"

interface ContainerProps{
    children: ReactNode
}

const Container = ({children}: ContainerProps) =>{
    return(
        <div className="flex justify-center flex-row">
            {children}
        </div>
    )
}

export default Container;
