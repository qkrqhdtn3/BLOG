import React, {useState} from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
    let [title, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '잠실 가볼만한 곳']);
    let [like, likeChange] = useState(0);
    let posts = '강남 고기 맛집';

    function titleChangeAt(n, str) {
        var newArray = [...title];
        newArray[n] = str;
        titleChange(newArray);
    }

    // function titleChangeAt(){
    //     var newArray = [...title];
    //     newArray[0] = '여자 코트 추천';
    //     titleChange(newArray);
    // }

    return (
        <div className="App">
            <div className="black-nav">
                <a href={""}>
                    <div>qkrqhdtn3 blog</div>
                </a>
            </div>
            <button onClick={() => {
                titleChangeAt(0, '여자 코트 추천');
            }}>버튼
            </button>
            {/*<button onClick={ ()=> { titleChange(title[0] = '여자 코트 추천')}}>버튼</button>*/}
            <div className="list">
                <h3> {title[0]} <span onClick={() => {
                    likeChange(like + 1)
                }}>👍</span> {like} </h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3> {title[1]} </h3>
                <p>2월 18일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3> {title[2]} </h3>
                <p>2월 19일 발행</p>
                <hr/>
            </div>

            <Modal/>

            <div> 안녕하세요</div>

        </div>
    );
}

function Modal() {
    return (
        <>
            <div className="modal">
                <h2>제목</h2>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        </>
    )
}

export default App;
