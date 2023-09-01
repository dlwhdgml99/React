// App.js는 MyComponent의 부모 컴포넌트
//import MyComponent from './MyComponent';

// component.js
/*
const App = () => {
	return <MyComponent />;
};

export default App;
*/

// props
/*
const App = () => {
  return <MyComponent name="React">리액트</MyComponent>
};

export default App;
*/


// children
/*
const App = () => {
  return <MyComponent>리액트</MyComponent>;
};

export default App;
*/

// const App = () => {
//   return <MyComponent name='이종희'>리액트</MyComponent>
// };

// export default App;

// import MyComponent from './MyComponent';

// const App = () => {
// 	return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
// };

// export default App;

//isRequired를 사용하여 필수 propTypes 설정
/*
const App = () => {
  return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
};

export default App;
*/


// counter.js
// import Counter from "./Counter";

// const App = () => {
//   return<Counter />;
// };

// export default App;

// Say.js
// import Say from './Say';

// const App = () => {
//   return <Say />;
// };

// export default App;

// EventPractice.js
/*
import EventPractice from "./EventPractice";

const App = () => {
  return <EventPractice />
};

export default App;
*/

//ValidationSample
import { Component } from "react";
import ValidationSample from "./ValidationSample";

class App extends Component {
  render() {
    return (
      <ValidationSample />
    );
  }
}

export default App;