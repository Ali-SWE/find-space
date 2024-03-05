import React from "react";

type Props = {
  building: string,
  rooms: string[]
}

const Table = ({ myList }: { myList: Props[] | null }) => {

  return (
    <div className="box-border grid grid-cols-1 mb-3 border-2 w-[282px] md:w-[500px] p-[34px] rounded-[10px]">
      {myList === null ? (
        <p className="text-center text-yellow-600 font-bold">
          {/* This is the first render. */}
        </p>
      ) : (
        myList?.length === 0 ? (
          <p className="text-center text-yellow-600 font-bold">
            Sorry, There is no space. Try to change the information you specified.
          </p>
        ) : (
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
        )
      )}
    </div>
  );
}

export default Table;