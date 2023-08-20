/**
 * 
 *<div id="parent"> 
 *    <div id="child">
 *           <h1>i am a h1 tag</h1>
 *     </div>
 * </div>
 */





const parent=React.createElement("div",{id:"parent"},
                                [React.createElement("div",{id:"child"},
                                [React.createElement("h1",{},"i am h1 tag"),React.createElement("h1",{},"i am h2 tag")]),
                                React.createElement("div",{id:"child"},
                                [React.createElement("h1",{},"i am h1 tag"),React.createElement("h1",{},"i am h2 tag")])
]);
const heading=React.createElement("h1",{},"Hello World from react");
        
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
