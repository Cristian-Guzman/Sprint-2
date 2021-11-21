// import React from 'react'

// export function ProductsInfo() {
//     const [info, setInfo] = useState([]);
//     const getData = async () => {
//         const response = await fetch('https://srpint2.herokuapp.com/tamales');
//         const data = await response.json();
//         setInfo(data);
//     }
//     getData()
    
//     return (
//         <>
//             {
//                 info.map(({ precio, sabor, imagen, id }) => {

//                     return (<tr key={imagen}>
//                         <th>Tamal</th>
//                         <th>{sabor}</th>
//                         <th>{precio}</th>
//                         <th><img alt=" " width="50" height="50" src={imagen} /></th>
//                         <botton className="btnEliminar" onClick={() => deleteData(id)}>Eliminar</botton>
//                     </tr>)
//                 })
//             }
//         </>
//     )
// }

// export default ProductsInfo
