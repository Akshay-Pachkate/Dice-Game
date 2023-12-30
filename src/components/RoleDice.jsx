/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import ShowRules from "./ShowRules";


const RoleDice = ({ setScore, rolledNumber, roleDice }) => {
  const [showRules, setShowRules] = useState(false);


  console.log(rolledNumber);

  return (
    <Role>
      <img src={`images/dice_${rolledNumber}.png`} onClick={roleDice} />
      <p>Click on Dice to roll</p>
      <div className="buttons">
        <Button
          backgroundColor="gainsboro"
          onClick={() => setScore(0)}
          textColor="black"
          key="1"
        >
          Reset Score
        </Button>
        <Button
          backgroundColor={!showRules ? "black" : "#3D3B40"}
          onClick={() => setShowRules((prev) => !prev)}
          textColor="gainsboro"
          key="2"
        >
          {!showRules ? "Show Rules" : "Hide Rules"}
        </Button>
      </div>
      {showRules && <ShowRules />}
    </Role>
  );
};

export default RoleDice;

const Button = styled.button`
  width: 220px;
  padding: 10px 18px;
  font-size: 16px;
  font-weight: 600;
  margin: 1;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  transition: 0.5s background-color;
  cursor: pointer;
`;

const Role = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
    font-weight: 500;
  }

  .buttons {
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  img {
    cursor: pointer;
  }
`;
