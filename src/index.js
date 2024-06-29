import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

let element = (
  <div className="parentDivClass" id="parentDivId">
    <div className="child1Class" id="child1Id">Div Child 1</div>
    <div className="child2Class" id="child2Id">Div Child 2</div>
    <div className="child3Class" id="child3Id">
      <p className="grandChild1Class" id="grandChild1Id">P Grand Child 1</p>
      <p className="grandChild2Class" id="grandChild2Id">P Grand Child 2</p>
      <p className="grandChild3Class" id="grandChild3Id">P Grand Child 3</p>
    </div>
    <div className="child4Class" id="child4Id">
      <ul className="unorderListClass" id="unorderListId">
        <li className="list1Class" id="list1Id">List 1</li>
        <li className="list2Class" id="list2Id">List 2</li>
        <li className="list3Class" id="list3Id">List 3</li>
      </ul>
    </div>
  </div>
)

function fakeRender(element, root) {
  console.log(JSON.stringify(element))
  // output
//   {
//     "type": "div",
//     "key": null,
//     "ref": null,
//     "props": {
//         "className": "parentDivClass",
//         "id": "parentDivId",
//         "children": [
//             {
//                 "type": "div",
//                 "key": null,
//                 "ref": null,
//                 "props": {
//                     "className": "child1Class",
//                     "id": "child1Id",
//                     "children": "Div Child 1"
//                 },
//                 "_owner": null,
//                 "_store": {}
//             },
//             {
//                 "type": "div",
//                 "key": null,
//                 "ref": null,
//                 "props": {
//                     "className": "child2Class",
//                     "id": "child2Id",
//                     "children": "Div Child 2"
//                 },
//                 "_owner": null,
//                 "_store": {}
//             },
//             {
//                 "type": "div",
//                 "key": null,
//                 "ref": null,
//                 "props": {
//                     "className": "child3Class",
//                     "id": "child3Id",
//                     "children": [
//                         {
//                             "type": "p",
//                             "key": null,
//                             "ref": null,
//                             "props": {
//                                 "className": "grandChild1Class",
//                                 "id": "grandChild1Id",
//                                 "children": "P Grand Child 1"
//                             },
//                             "_owner": null,
//                             "_store": {}
//                         },
//                         {
//                             "type": "p",
//                             "key": null,
//                             "ref": null,
//                             "props": {
//                                 "className": "grandChild2Class",
//                                 "id": "grandChild2Id",
//                                 "children": "P Grand Child 2"
//                             },
//                             "_owner": null,
//                             "_store": {}
//                         },
//                         {
//                             "type": "p",
//                             "key": null,
//                             "ref": null,
//                             "props": {
//                                 "className": "grandChild3Class",
//                                 "id": "grandChild3Id",
//                                 "children": "P Grand Child 3"
//                             },
//                             "_owner": null,
//                             "_store": {}
//                         }
//                     ]
//                 },
//                 "_owner": null,
//                 "_store": {}
//             },
//             {
//                 "type": "div",
//                 "key": null,
//                 "ref": null,
//                 "props": {
//                     "className": "child4Class",
//                     "id": "child4Id",
//                     "children": {
//                         "type": "ul",
//                         "key": null,
//                         "ref": null,
//                         "props": {
//                             "className": "unorderListClass",
//                             "id": "unorderListId",
//                             "children": [
//                                 {
//                                     "type": "li",
//                                     "key": null,
//                                     "ref": null,
//                                     "props": {
//                                         "className": "list1Class",
//                                         "id": "list1Id",
//                                         "children": "List 1"
//                                     },
//                                     "_owner": null,
//                                     "_store": {}
//                                 },
//                                 {
//                                     "type": "li",
//                                     "key": null,
//                                     "ref": null,
//                                     "props": {
//                                         "className": "list2Class",
//                                         "id": "list2Id",
//                                         "children": "List 2"
//                                     },
//                                     "_owner": null,
//                                     "_store": {}
//                                 },
//                                 {
//                                     "type": "li",
//                                     "key": null,
//                                     "ref": null,
//                                     "props": {
//                                         "className": "list3Class",
//                                         "id": "list3Id",
//                                         "children": "List 3"
//                                     },
//                                     "_owner": null,
//                                     "_store": {}
//                                 }
//                             ]
//                         },
//                         "_owner": null,
//                         "_store": {}
//                     }
//                 },
//                 "_owner": null,
//                 "_store": {}
//             }
//         ]
//     },
//     "_owner": null,
//     "_store": {}
// }
  // 1. create element
  let dom = document.createElement(element.type)

  // 2. add props to the element
  Object.keys(element.props)
    .filter((prop) => prop !== "children")
    .forEach((prop) => {
      dom[prop] = element.props[prop]
    })
  
    // 3. add children
    if (Array.isArray(element.props.children)) {
      element.props.children.forEach((child) => fakeRender(child, dom))
    } else if (typeof element.props.children === "object") {
      fakeRender(element.props.children, dom)
    } else {
      dom.innerHTML = element.props.children
    }

  root.appendChild(dom)
}

fakeRender(element, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
