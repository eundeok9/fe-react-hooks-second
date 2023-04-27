import React, {useState, useEffect} from "react";

const RandomGame = () => {
  const [maxNumber, setMaxNumber] = useState(5);
  const [mypick, setMyPick] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [randomNumber, setRandomNumber] = useState();
  const gameResult = randomNumber === parseInt(mypick) ? "win" : "lose";

  useEffect(() => {
    setIsPlay(false);
  }, [mypick, maxNumber]);

  const onPlay = () => {
    if (mypick) setIsPlay(true);
    setRandomNumber(Math.floor(Math.random() * maxNumber));
  };

  return (
    <div className="randomgame">
      <h1>Random Number Game</h1>
      <h3>
        0 과 {maxNumber} 사이의 값을 <br />
        랜덤으로 생성합니다!
      </h3>
      <datalist id="number">
        <option value="50" />
        <option value="100" />
        <option value="150" />
        <option value="200" />
      </datalist>
      <input
        style={{marginBottom: "15px"}}
        list="number"
        type="range"
        min="5"
        max="200"
        value={maxNumber}
        step="5"
        onChange={(e) => {
          setMaxNumber(e.target.value);
        }}
      />
      <br />
      <div className="inputzone">
        <span>Guess the number:</span>
        <input
          style={{width: "70px", margin: "0 5px"}}
          type="number"
          value={mypick}
          onChange={(e) => {
            setMyPick(e.target.value);
          }}
        ></input>
        <button onClick={() => onPlay()}>Play!</button>
      </div>
      {isPlay ? (
        <>
          <div>
            You choose: {mypick}, the machine choose: {randomNumber}
          </div>
          <b>You {gameResult}!</b>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RandomGame;
