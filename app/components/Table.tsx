import React from "react";

type Props = {
    building: number,
    rooms: string[]
}
const Table = ({myList}:{myList:Props[]}) => {
    return(
        <div className="box-border grid grid-cols-1 mb-3
        border-2 w-[282px] md:w-[500px] p-[34px] rounded-[10px]">
           
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Building</th>
                        <th>Room</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    
                    myList.map((space, index1) => (
                        space.rooms.map((room, index2) =>(
                            <tr>
                                <td className="text-center">{space.building}</td>
                                <td className="text-center">{room}</td>
                            </tr>
                        ))
                        // <tr key={index}>
                        //     <td className="text-center">{space.building}</td>
                        //     <td className="text-center">{space.room}</td>
                        // </tr>
                    ))}
                </tbody>
            </table>
        </div>
       
    )
}

export default Table;
