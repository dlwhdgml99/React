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
react component 안에서도 id는 사용이 가능하다. 
JSX 안에서 DOM에 id를 달면 해당 DOM을 렌더링 할 때 그대로 전달된다. 
특수한 경우가 아니면 사용을 권장하지 않는다.
ex) 컴포넌트를 여러 번 사용할 때
HTML에서 생기는 DOM의 id는 유일해야 하는데 어떤 상황에서는 중복 id를 가진 DOM이 여러 개 생기니 잘못된 사용이다.
ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 적용하기 때문에 이런 문제가 생기지는 않는다.
대부분은 id를 사용하지 않고도 원하는 기능을 구현할 수 있다.
다른 라이브러리나 프레임워크와 함께 id를 사용해야 하는 상황이 발생할 수 있다.
컴포넌트를 만들 때마다 id 뒷부분에 추가 텍스트를 붙여서 중복 id가 발생하는 것을 방지해야한다.

## ref는 어떤 상황에서 사용해야 하는가
- DOM을 꼭 직접적으로 건드려야 할 때
- 예제 컴포넌트 생성

- DOM을 꼭 사용해야 하는 상황

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기

이 때는 어쩔 수 없이 DOM에 직접적으로 접근해야 하는데, 이를 위해 바로 ref 사용

## ref 사용
- 콜백 함수를 통한 ref 설정
- ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해주면 된다.
- 이 콜백 함수는 ref 값을 파라미터로 전달받는다.
- 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정해준다.

<input ref={(ref) => {this.input=ref}} />
- this.input은 요소의 DOM을 가리킨다.
- ref의 이름은 원하는 것으로 자유롭게 지정할 수 있다.
- DOM 타입과 관계없이 this.superman = ref처럼 마음대로 지정한다.

### createRef를 통한 ref 설정
우선 컴포너트 내부에서 멤버 변수로 React.createRef()를 담아주어야 한다.
해당 멤버 변수 ref를 담고자 하는 요소에 ref props로 넣어주면 ref 설정이 완료된다.
설정한 뒤 나중에 ref를 설정해준 DOM에 접근하려면 this.input.current를 조회하면 된다.

- input에 ref 달기
...
<input ref={(ref) => this.input=ref}
...
/>

# 컴포넌트에 ref 달기
React에서는 Component에도 ref를 달 수 있다. 이 방법은 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 쓴다. 컴포넌트에 ref를 다는 방법은 DOM에 ref를 다는 방법과 같다.

- 사용법
<MyComponent
    ref={(ref) => {this.myComponent=ref}}
/>

- MyComponent 내부의 메서드 및 멤버 변수에도 접근할 수 있다(내부의 ref에도 접근할 수 있다)(ex) myComponent.handleClick, myComponent.input등 )

- 컴포넌트 초기 설정
스크롤 박스가 있는 컴포넌트를 하나 만들고, 스크롤바를 아래로 내리는 작업을 부모 컴포넌트에서 실행하는 예

- scrollTop : 세로 스크롤바 위치(0~350)
- scrollHeight: 스크롤이 있는 박스 안의 div 높이(650)
- clientHeight: 스크롤이 있는 박스의 높이(300)

scrollToBottom 메서드의 첫 번째 줄에서는 ES6의 비구조화 할당 문법을 사용했다.
이렇게 만든 메서드는 부모 컴포넌트인 App 컴포넌트에서 ScrollBox에 ref를 달면 사용할 수 있다.

문법상으로 onClick={this.scrollBox.scrollBottom} 같은 형식으로 작성해도 틀린 것은 아니나 처음 렌더링될 때는 this.scrollBox값이 undefined이므로 this.scrollBox.scrollToBottom 값을 읽어 오는 과정에서 오류가 발생한다. 화살표 함수 문법을 사용하여 아예 새로운 함수를 만들고 그 내부에서 this.scrollBox.scrollBottom 메서드를 실행하면, 버튼을 누를 때(이미 한 번 렌더링을 해서 this.scrollBox를 설정한 시점) this.scrollBox.scrollBottom 값을 읽어 와서 실행하므로 오류가 발생하지 않는다.

함수형 컴포넌트에서 ref를 사용하려면 useRef라는 Hook 함수를 사용한다. 사용법은 React.createRef와 유사하다.
