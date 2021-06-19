import React from "react";

import { header, body } from "./table";
import "./App.css";

function App() {
  return (
    <div className="App">
      {header.map((head, index) => {
        return (
          <table>
            <thead>
              <tr>
                <th>{head}</th>
              </tr>
            </thead>
            <tbody>
              {body.map((trow) => {
                console.log(trow);
                return (
                  <tr>
                    <td>{trow[index]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default App;
