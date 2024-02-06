import { table } from "console";
import React from "react";
import Footer from "./Footer";


const Table: React.FC = () =>{
    return(
        <table className="text-center border border-slate-500 rounded  ">
            <thead>
                <tr className="p-10">
                    <th>Classroom</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                </tr>
            </thead>

            <tbody>
            <tr className="bg-slate-300">
                    <td>125</td>
                    <td>11:50</td>
                    <td>13:00</td>
                </tr>
                <tr className="">
                    <td>125</td>
                    <td>11:50</td>
                    <td>13:00</td>
                </tr> 
                <tr className="bg-slate-300">
                    <td>125</td>
                    <td>11:50</td>
                    <td>13:00</td>
                </tr> 
                 

            </tbody>

            <tfoot>
                
            </tfoot>
        </table>
    )
}

export default Table;
