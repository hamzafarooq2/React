import React from 'react';         // it is some how called es6 module, where we get some piece of functionality, also to create component function

import ReactDOM from 'react-dom';   // entry point where we inject js in index.html file
//There can be only one render at a time.
//class name instead of class.
//use camelCase for html attributes. e.g onClick.
// close every element
function Greeting() {    //function name will always be capital, it will always return single jsx, it must be closed, also React.Fragmet
  return (
    // We can also use React.Fragment for finshing
    <div>
      <h4>This is my first component</h4>
      <h4>hamza</h4>
    </div>
  );

}

// function UnderHood() {                      // detailed work, but same result
//   return React.createElement('div',
//   {},
//   React.createElement('h1', {}, 'Hello Hamza')
//   );
// }



ReactDOM.render(<Greeting />, document.getElementById('root'));

// ReactDOM.render(<UnderHood />, document.getElementById('root'));  