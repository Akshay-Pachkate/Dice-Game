import styled from 'styled-components'
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from './RoleDice';
import { useState, useEffect} from 'react';

const GamePlay = () => {

    const [rolledNumber, setRolledNumber] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState();
    const [score, setScore] = useState(0);
    
    useEffect(() => {
        if(!selectedNumber){
            return;
        }
        rolledNumber === selectedNumber ? setScore((prev) => prev+selectedNumber) : setScore((prev) => prev-1);
        console.log(rolledNumber === selectedNumber);
    }, [rolledNumber]);

 

    

  return (
    <MainContainer>
        <div className="top-section">
            <TotalScore score={score}/>
            <NumberSelector
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}
            />
        </div>
        <div className="bottom-section">
        <RoleDice
        setScore={setScore}
        selectedNumber={selectedNumber}
        rolledNumber={rolledNumber}
        setRolledNumber={setRolledNumber}
        />
        </div>
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.main`
    padding-top: 40px;
    
    
    .top-section{
        margin: 0 auto;
        max-width: 1280px;
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .bottom-section{
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
