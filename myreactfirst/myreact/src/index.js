import React from 'react';
import ReactDOM from 'react-dom/client';

// function tick(){
//   const element = {
//    <div>
//     <h1>Hola Gente</h1>
//     <h2>Hora {new Date().toLocaleDateString()} </h2>;
//    </div>
//   };
//   ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);

// 
function tick(){
const div = document. createElement("div");
div.innerHTML = `
<h1> Hola Mundo</h1>
<h2> Hora ${new Date().toLocaleDateString()}</h2>
`;
document.getElementById("root").innerHTML="";
document.getElementById("root").appendChild(div);
}
setInterval(tick,1000);

