import { useState } from 'react';

/*
const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');
    
    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red'}} onClick={() => setColor('red')}>빨간색</button>
            <button style={{ color: 'green'}} onClick={() => setColor('green')}>초록색</button>
            <button style={{ color: 'blue'}} onClick={() => setColor('blue')}>파란색</button>
        </div>
    );
};
export default Say;
*/

// 객체 다루기
const Say = () => {
    const object = { a: 1, b: 2, c: 3};
    const newObject = { a: 2, b: 3}; // 사본 만들어서 값 덮어쓰기

    // 배열 다루기
    const array = [
        { id: 1, value: true },
        { id: 2, value: true },
        { id: 3, value: false }
    ];

    let nextArray = array.concat({ id: 4 }); //새 항목 추가
    nextArray.filter(item => item.id !==2); // id가 2인 항목 제거
    nextArray.map(item => (item.id === 1 ? {...item, value: false } : item)); // id가 1인 항목의 value를 false로 설정
    // 객체에 대한 사본을 만들 때는 spread 연산자라고 불리는 ...을 사용하여 처리하고 배열에 대한 사본을 만들 때는 배열의 내장함수들을 활용
};
export default Say;