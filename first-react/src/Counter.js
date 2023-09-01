// 1. 클래스형 컴포넌트의 State
import { Component } from 'react';

/*
class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number:0
        };
    }
    // render : this함수 조회
    render() {
        const { number } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={() => {
                    //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
                    this.setState({ number : number + 1});
                }}>
                    +1
                </button>
            </div>
        );
    }
}

// printf 느낌?
export default Counter;
*/

// state 객체 안에 여러 값이 있을 때
/*
class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button onClick={() => {
                    this.setState({ number : number + 1});
                }}>
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
*/

// state를 constructor에서 꺼내기
/*
class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const { number, fixedNumber } = this.state;
        return(
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button onClick={() => {
                    this.setState({ number : number + 1});
                }}>
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
*/


