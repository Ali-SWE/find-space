import React from "react";
import Image from 'next/image'
const Overview: React.FC = () =>{
    return (
    <div>
        <Image
        src="/search.png"
        width={60}
        height={60}
        alt="Find Feature"
        />
    </div>    
    )
}

export default Overview;