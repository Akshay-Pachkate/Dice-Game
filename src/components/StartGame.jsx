/* eslint-disable react/prop-types */

import styled from "styled-components"

const StartGame = ({toggle}) => {
  return (
    <div>
        <Container>
            <div>
            <img src="images/dices 1.png" alt="" />
            </div>

            <div className="content">
                <h1>DICE GAME</h1>
                <Button onClick={toggle} >Play Now</Button>
            </div>
        </Container>
    </div>
  )
}




export default StartGame


const Container = styled.div`
    max-width: 1182px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0 auto;

    .content{
        display: flex;
        flex-direction: column;
        align-items: end;
        h1{
            font-size: 76px;
            font-weight: 700;
            margin: 0;
            color: #272727;
        }

    }

`;

const Button = styled.button`
    min-width: 220px;
    padding: 10px 18px;
    background-color: #272727;
    color: gainsboro;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.3s background-color ease-in;
    cursor: pointer;

    // & is called as pseudo
    &:hover{
        background-color: gainsboro;
        color: #272727;
        border: 1px solid black;
        transition: 0.3s background-color ease-in;
    }
`;

