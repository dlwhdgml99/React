//  import { Component } from 'react';

/*
class EventPractice extends Component {
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type='text'
                    name='message'
                    placeholder='아무거나 입력해보세요'
                    onChange={(e) => {
                        console.log(e);
                    }}
                />
            </div>
        );
    }
}
export default EventPractice;
*/

// state에 input값 담기
/*
class EventPractice extends Component {
    state = {
        message: ''
    }

    render() {
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type='text'
                    name='message'
                    placeholder='아무거나 입력해보세요'
                    value={this.state.message}
                    onChange={
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }    
                    }
                />
            </div>
        );
    }
}
export default EventPractice;
*/

// 버튼 누를 때 comment 값을 공백으로 설정

/*
class EventPractice extends Component {
    state = {
        message: ''
    }
    render () {
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type='text'
                    name='message'
                    placeholder='아무거나 입력해보세요'
                    onChange={(e) => {
                        console.log(e);
                    }}
                />
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>확인</button>
            </div>   
        )
    }
}

export default EventPractice;
*/

// 임의 메서드 방식 - 기본 방식
/*
class EventPractice extends Component {
    state = {
        message: ''
    }

    // 함수를 바인딩하는 작업중
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleClick () {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
*/

// property initializer syntax(화살표 함수 형태로 메서드 정의)를 사용
/*
class EventPractice extends Component {
    state = {
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }
    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }
    render () {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type='text'
                    name='message'
                    placeholder='아무거나 입력해보세요'
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPractice;
*/

// onKeyPress 이벤트 핸들링

/*
class EventPractice extends Component {
    state = {
        username: '',
        message: ''
    }
	
	handleChange = (e) => {
		this.state({
			[e.target.name] : e.target.value
		});
	}
	
	handleClick = () => {
		alert(this.state.username + ': ' + this.state.message);
		this.setState({
			username: '',
			message: ''
		});
	}
	
	handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.handleClick();
		}
	}
	
	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input 
					type="text"
					name="username"
					placeholder="사용자명"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<input 
					type="text"
					name="message"
					placeholder="아무거나 입력해 보세요"
					value={this.state.message}
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
				/>
				<button onClick={this.handleClick}>확인</button>
			</div>
		);
	}
}

export default EventPractice;
*/


import { useState } from "react";

/*
const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ':' + message);
        setUsername('');
        setMessage('');
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input 
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeUsername}
            />
            <input 
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;
*/


