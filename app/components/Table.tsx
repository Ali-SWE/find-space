import React from "react";

const Table: React.FC = () =>{
    return(
        <table className="text-center border border-slate-500 rounded  ">
            <thead>
                <tr className="p-10">
                    <th>Building</th>
                    <th>Classroom</th>
                </tr>
            </thead>

            <tbody>
                <tr className="bg-slate-300">
                    <td>22</td>
                    <td>120</td>
                </tr>
                <tr className="">
                    <td>24</td>
                    <td>125</td>
                </tr> 
                <tr className="bg-slate-300">
                    <td>59</td>
                    <td>1013</td>
                </tr> 
                 

            </tbody>

            <tfoot>
                
            </tfoot>
        </table>
    )
}

export default Table;
