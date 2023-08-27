protoTypes 종류
1. array
    - 배열

2. arrayOf(다른 PropType)
    - 특정 PropType으로 이루어진 배열을 의미
    - arrayOf(PropTypes.number)는 숫자로 이루어진 배열

3. bool
    - true or false

4. func
    - 함수

5. number
    - 숫자

6. object
    - 객체

7. string
    - 문자열

8. symbol
    - ES6의 Symbol

9. node
    - 렌더링할 수 있는 모든 것
    (숫자, 문자열 혹은 JSX 코드, children도 node PropType)

10. instanceOf(클래스)
    - 특정 클래스의 인스턴스 (예 : instanceOf(MyClass))

11. oneOf(['dog', 'cat'])
    - 주어진 배열 요소 중 하나

12. oneOfType([React.PropTypes.string, PropTypes.number])
    - 주어진 배열 안의 종류 중 하나

13. objectOf(Reat.PropTypes,number)
    - 객체의 모든 키 값이 인자로 주어진 PropType인 객체

14. shape([name: PropTypes.string, num: PropTypes.number])
    - 주어진 스키마를 가진 객체

15. any
    - 아무 종류

state
- 컴포넌트 내부에서 바뀔 수 있는 값
- props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값, 컴포넌트 자신은 해당 props를 읽기 전용으로 사용할 수 있음

useState 사용하기
- useState 함수의 인자에는 상태의 최소값을 넣어줘야함
! 클래스 컴포넌트든 함수 컴포넌트드 state값을 바꾸어야 할 때는 setState혹은 useState를 통해 전달받은 세터 함수를 사용해야함
! 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트한 후, 그 사본의 상태를 setState혹은 세터 함수를 통해 업데이트 함

