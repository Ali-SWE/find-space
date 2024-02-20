import React from "react";
import Image from 'next/image'
const Overview: React.FC = () =>{
    return (
    <div className="grid grid-cols-1 justify-items-center w-auto mb-6">
        <Image
        src="/search.png"
        width={60}
        height={60}
        alt="Find Feature"
        />
        <p className="text-secondary w-30 text-center">Fill in the information to find an available room you can work in.</p>
    </div>    
    )
}

export default Overview;