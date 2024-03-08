import React from "react";

type Props = {
  building: string,
  rooms: string[]
}


const Table = ({ myList, chosenDay }: { myList: Props[] | null, chosenDay: string }) => {

// This is the first render
 if(myList === null){
  return (
    <div className="box-border grid grid-cols-1 mb-3 border-2 w-[80vw] md:w-[500px] p-[34px] rounded-[10px]">
      <p className="text-center text-yellow-600 font-bold">
        {/* This is the first render. */}
      </p>
    </div>
  );
 }

// weekend
 else if (chosenDay === "F" || chosenDay === "S") {
    return (
      <div className="box-border grid grid-cols-1 mb-3 border-2 w-[80vw] md:w-[500px] p-[34px] rounded-[10px]">
        <p className="text-center text-yellow-600 font-bold">Hey! It&apos;s a weekend.</p>
      </div>
    );
  }
  
  else if(myList?.length === 0){
    return (
      <div className="box-border grid grid-cols-1 mb-3 border-2 w-[80vw] md:w-[500px] p-[34px] rounded-[10px]">
          <p className="text-center text-yellow-600 font-bold">
            Sorry, There is no space. Try to change the information you specified.
          </p>
      </div>
    );
  }

  return (
    <div className="box-border grid grid-cols-1 mb-3 border-2 w-[80vw] md:w-[500px] p-[34px] rounded-[10px]">
          <table className="table-auto w-full">
            <thead>
              <tr>
                {/* <th>Building</th> add this in case you decide to add several building feature */}
                <th>Room</th>
              </tr>
            </thead>
            <tbody>
              {myList?.map((space, index1) => (
                space.rooms.map((room, index2) => (
                  <tr key={index2}>
                    <td className="text-center">{room}</td>
                  </tr>
                ))
              ))}
              {/* { do this structure in case you decide to add several building feature
                  myList.map((space, index1) => (
                      space.rooms.map((room, index2) =>(
                          <tr key={`${index1}-${index2}`}>
                          <td className="text-center">{space.building}</td>
                          <td className="text-center">{room}</td>
                      </tr>
                  ))
                  ))} */}
            </tbody>
          </table>
    </div>
  );
}

export default Table;