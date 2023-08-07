
// App.css 파일 불러오기
import "./App.css";

// React, useState 불러오기
import React, { useState } from 'react';

function App() {

  const [title, setTitle] = useState([
    "8월 일상 모음",
    "YBIGTA 교육세션 끝",
    "YBIGTA 신입기수 프로젝트",
  ]);
  const [good, setGood] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [changeTitle, setChangeTitle] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // 작성내용을 저장하는 상태관리 변수 생성
  const [content, setContent] = useState([]);

  // 내용 클릭하면 색상 변하는 상태관리 변수 생성 
  const [selectColor, setSelectColor] = useState(-1);

  return (
    <div className="App">
      <div className="black-nav"> {/*배경색 다른색으로 수정*/}
        <div>
          <h4 style={{ color: "white", fontSize: "16px" }}>Blog</h4>
        </div>
        <div className="submit">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={() => {
              let copy = [...title];
              copy.unshift(inputValue);
              setTitle(copy);
            }}
          >
            글 발행
          </button>
        </div>
      </div>
      {title.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                // title 클릭 시 상태 변경 코드 작성
                setSelectColor(i);
                setModal(!modal);
                setChangeTitle(i);
              }}
              // 클릭되면 글자색 다른색으로 변경되는 코드 작성
              style={{ color: selectColor === i ? "blue" : "black" }}
            >
              {title[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...good];
                  copy[i] = copy[i] + 1;
                  setGood(copy);
                }}
              >
                {" "}
                👍{" "}
              </span>
              {good[i]}
            </h4>
          </div>
        );
      })}
      {modal == true ? (
        <Modal
          title={title}
          changeTitle={changeTitle}
        ></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.changeTitle]}</h4>
    </div>
  );
}

export default App;