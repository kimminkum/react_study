import "./App.css";
import { useState } from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitch } from "react-icons/bs";
import ModalPortal from "./components/ModalPortal";
import SampleModal from "./components/SampleModal";

function App() {
  let post = "미친 토끼가 날뛴다. ";
  let [네임, nameChange] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬 독학"]);
  let [따봉, goodPlus] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);

  const handleOpen = () => {
    setModalOpened(true);
  };
  const handleClose = () => {
    setModalOpened(false);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>만렙토끼</h4>
      </div>
      <h4>
        {post}
      </h4>

      <button
        onClick={() => {
          let copy = [...네임];
          copy.sort();
          nameChange(copy);
        }}
      >
        글수정
      </button>

      <div className="bodywrite">
        <h4>
          {네임[0]}{" "}
          <span
            onClick={() => {
              goodPlus(따봉 + 1);
            }}
          >
            乃
          </span>{" "}
          {따봉}{" "}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="bodywrite">
        <h4>
          {네임[1]}
        </h4>
        <p>2월 18일 발행</p>
      </div>

      <div className="bodywrite">
        <h4>
          {네임[2]}
        </h4>
        <p>2월 19일 발행</p>
      </div>

      <button onClick={handleOpen}>Open Modal</button>
      {modalOpened &&
        <ModalPortal closePortal={handleClose}>
          <SampleModal />
        </ModalPortal>}
      <div id="root-modal" />

      <Modal />

      <Footend />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>럭키토끼</h4>
      <p>행복하다</p>
      <p>클로버의 꽃말은 세잎 = 행복, 네잎 = 행운이다. 난 운이좋아 행복하다.</p>
    </div>
  );
}

const Footend = () => {
  return (
    <div className="ending">
      <span className="lates" style={{ fontSize: "8px" }}>
        © 2012-2022 OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t
        reflect the views or opinions of Riot Games or anyone officially
        involved in producing or managing League of Legends. League of Legends
        and Riot Games are trademarks or registered trademarks of Riot Games,
        Inc. League of Legends © Riot Games, Inc.
      </span>
      <div className="endlogo">
        <AiFillTwitterSquare />
        <AiFillFacebook />
        <BsTwitch />
      </div>
    </div>
  );
};

export default App;
