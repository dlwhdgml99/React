import { Component } from "react";

class ScrollBox extends Component {

    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
            /* 앞 코드에서는 비구조화 할당 문법을 사용했습니다. 
		    	다음 코드와 같은 의미 입니다.
		    	const scrollHeight = this.box.scrollHeight;
		    	const clientheight = this.box.clientHeight;
		    */
    }

    render() {
        <div
            style={style}
            ref={(ref) => {this.box=ref}}>
                <div style={innerStyle} />
        </div>
    }
}

export default ScrollBox;