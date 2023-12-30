import styled from 'styled-components'
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from './RoleDice';
import { useState} from 'react';
import { enqueueSnackbar } from 'notistack';

const GamePlay = () => {

    const [rolledNumber, setRolledNumber] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState();
    const [score, setScore] = useState(0);
    

    const roleDice = () => {
        if (selectedNumber) {
          const n = Math.floor(Math.random() * 6 + 1);
          setRolledNumber(() => n);
          rolledNumber === selectedNumber ? setScore((prev) => prev+selectedNumber) : setScore((prev) => prev-1);
        } else {
          enqueueSnackbar("Select a Number to Start", {variant: "info", anchorOrigin: {horizontal: "center", vertical: "top"} })
        }

        setSelectedNumber(undefined);

      };


    // useEffect(() => {
    //     if(!selectedNumber){
    //         return;
    //     }
        
    //     console.log(rolledNumber === selectedNumber);
    // }, [rolledNumber]);

 

    

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
        roleDice={roleDice}
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
