import React from "react";
import Image from 'next/image'
const Overview: React.FC = () =>{
    return (
    <div className="grid grid-cols-1 justify-items-center w-auto mb-6">
        <Image
        src="/search.png"
        width={200}
        height={200}
        alt="Find Feature"
        priority= {true}
        />
        <p className="text-secondary w-30 text-center text-lg">Fill in the information to find the available classrooms at <span className="text-primary font-bold">KFUPM.</span></p>
    </div>    
    )
}

export default Overview;