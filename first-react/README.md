# protoTypes 종류
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

### state
- 컴포넌트 내부에서 바뀔 수 있는 값
- props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값, 컴포넌트 자신은 해당 props를 읽기 전용으로 사용할 수 있음

# useState 사용하기
- useState 함수의 인자에는 상태의 최소값을 넣어줘야함
! 클래스 컴포넌트든 함수 컴포넌트드 state값을 바꾸어야 할 때는 setState혹은 useState를 통해 전달받은 세터 함수를 사용해야함
! 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트한 후, 그 사본의 상태를 setState혹은 세터 함수를 통해 업데이트 함

* 리액트의 이벤트 시스템
- 리액트의 이벤트 시스템은 웹 브라우저의 HTML의 이벤트와 인터페이스가 동일하기 때문에 사용법이 비슷하다.

! 이벤트 이름은 카멜표기법으로 작성
! 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
! DOM 요소에만 이벤트를 설정할 수 있음
    - div, button, input, form, span 등의 DOM 요소에는 이벤트를 설정할 수 있지만, 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없음
    - MyComponent에 onClick 값을 설정한다면 MyComponent를 클릭할 때 onSomething 함수를 실행하는 것이 아니라, 그냥 이름이 onClick인 props를 MyComponent에 전달해 줄 뿐 이다.

    <MyComponent onClick={doSomething} />
    - 컴포넌트에 자체적으로 이벤트를 설정할 수 없다. 하지만 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정할 수 있음
    <div onClick={this.props.onClick}>
        ...
    </div>

## react에서 지원하는 이벤트 종류
- Clipboard
- Composition
- Keyboard
- Focus
- Form
- Mouse
- Selection
- Touch
- UI
- Wheel
- Image
- Animation
- Transition

콘솔에 기록되는 e객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
SyntheticEvent는 네이티브 이벤트와는 달리 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보를 참조할 수 없다.
ex ) 0.5s뒤에 e객체를 참조하면 e객체 내부의 모든 값이 비워지게 됨
비동기적 이벤트 객체를 참조할 때는 e.persist()함수를 호출해야함

* 임의 메서드 만들기
이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
함수를 미리 준비하여 전달하는 방법도 있음
-> 성능상으로는 차이가 거의 없지만 가독성은 훨씬 높음

- 기본 방식
함수가 호출될 때 this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가 특정 HTML요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버린다
-> 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩 하는 작업이 필요하다
-> 바인딩하지 않으면 this가 undefined를 가리키게 됨

객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됨

- input의 개수가 많아질 것 같으면 e.target.name을 활용하는 것이 더 좋을 수 있다.

- e.target.name 값을 활용하려면, useState를 쓸 때 input 값들이 들어있는 form객체를 사용

# ref:DOM에 이름 달기
react component 안에서도 id는 사용이 가능함. 
JSX 안에서 DOM에 id를 달면 해당 DOM을 렌더링 할 때 그대로 전달됨. 
특수한 경우가 아니면 사용을 권장하지 않음.
ex) 컴포넌트를 여러 번 사용할 때
HTML에서 생기는 DOM의 id는 유일해야 하는데 어떤 상황에서는 중복 id를 가진 DOM이 여러 개 생기니 잘못된 사용
ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 적용하기 때문에 이런 문제가 생기지는 않음
대부분은 id를 사용하지 않고도 원하는 기능을 구현할 수 있음
다른 라이브러리나 프레임워크와 함께 id를 사용해야 하는 상황이 발생할 수 있음
컴포넌트를 만들 때마다 id 뒷부분에 추가 텍스트를 붙여서 중복 id가 발생하는 것을 방지해야함

