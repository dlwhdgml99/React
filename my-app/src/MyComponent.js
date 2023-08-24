/*
- 함수형 컴포넌트
import './App.css';

function App() {
    const name = '리액트';
    return <div className="react">{name}</div>
}

export default App;

- 클래스형 컴포넌트
import { Component } from 'react';

class App extends Component {
    render() {
        const name = 'react';
        return <div className="react">{name}<div>;
    }
}

export default App;
*/

/*
const MyComponent = () => {
	return <div>나의 새롭고 멋진 컴포넌트</div>;
};

export default MyComponent;

모듈 내보내기 (export)
모듈 불러오기 (import)
*/

/*
props
- properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소
- 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있음
- JSX 내부에서 props 렌더링
- 기본값 : defaultProps
*/

/*
const MyComponent = props => {
    return <div>안녕하세요. 제 이름은 {props.name}입니다.</div>;
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

export default MyComponent;
*/

// 태그 사이의 내용을 보여 주는 children
/*
const MyComponent = props => {
    return (
        <div>
            안녕하세요. 제 이름은 {props.name}입니다. <br />
            children 값은 {props.children}입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

export default MyComponent;
*/

// 비구조화 할당 문법을 통해 props 내부 값 추출하기
// 함수 파라미터가 객체라면 그 값을 바로 비구조화해서 사용할 수 있다.

/*
const MyComponent = ({ name, children }) => {
    return (
        <div>
            안녕하세요. 제 이름은 {props.name}입니다. <br />
            children 값은 {props.children}입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

export default MyComponent
*/

// propTypes를 통한 props 검증
// 컴포넌트에 설정한 props가 propTypes에서 지정한 형태와 일치하지 않는다면 
// 브라우저 개발자 도구의 Console 탭에 경고 메세지를 출력하여 개발자에게 propTypes가 
// 잘못되었다는 것을 알려줍니다. 오류 메세지 확인하였다면 name 값을 제대로 입력해 주세요
/*
import propTypes from 'prop-types';
const MyComponent = ({ name, children }) => {
    return (
        <div>
            안녕하세요. 제 이름은 {props.name}입니다. <br />
            children 값은 {props.children}입니다.
        </div>
    );
    }
    MyComponent.defaultProps = {
        name: '기본 이름'
    };

    MyComponent.propTypes = {
        name: propTypes.string
    };
*/

// isRequired를 사용하여 필수 propTypes 설정
//favoriteNumber를 설정하지 않았기 때문에 경고가 나타납니다. 
//경고를 확인했다면 MyComponent에 favoriteNumber 값을 제대로 전달하세요.
/*
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => { 
	<div>
		안녕하세요. 제 이름은 {name}입니다. <br />
		children 값은 {children}입니다.
		<hr />
		제가 좋아하는 숫자는 {favoriteNumber}입니다.
	</div>
}

MyComponent.defaultProps = {
	name: '기본 이름'
};

MyComponent.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
*/

/*
클래스형 컴포넌트에서 props 사용하기
    - 클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회하면 됨
    - defaultProps와 propTypes 는 똑같은 방식으로 설정할 수 있음
*/

// isRequired를 사용하여 필수 propTypes 설정
/*
import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                안녕하세요. 제 이름은 {name}입니다. <br />
                children 값은 {children}입니다.
                <hr />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}
MyComponent.defaultProps = {
	name: '기본 이름'
};

MyComponent.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
*/

//favoriteNumber를 설정하지 않았기 때문에 경고가 나타납니다. 경고를 확인했다면 MyComponent에 favoriteNumber 값을 제대로 전달.
/*
import MyComponent from './MyComponent';

const App = () => {
	return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
};

export default App;
*/
/*
import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
	static defaultProps = {
		name: '기본 이름'
	};
	static propTypes = {
		name: PropTypes.string,
		favoriteNumber: PropTypes.number.isRequired
	};

	render() {
		const { name, favoriteNumber, children } = this.props;
		return (
			<div>
				안녕하세요. 제 이름은 {name}입니다. <br />
				children 값은 {children}입니다.
				<hr />
				제가 좋아하는 숫자는 {favoriteNumber}입니다.
			</div>
		);
	}
}

export default MyComponent;
*/
