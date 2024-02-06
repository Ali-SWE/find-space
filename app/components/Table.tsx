import { table } from "console";
import React from "react";


const Table: React.FC = () =>{
    return(
        <table>
            <thead>
                <tr>
                    <th>Classroom</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                </tr>
            </thead>

            <tbody>
                <tr>
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
