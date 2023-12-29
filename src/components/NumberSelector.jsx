/* eslint-disable react/prop-types */
import styled from "styled-components"


const NumberSelector = ({selectedNumber, setSelectedNumber}) => {
    const numArr = [1, 2, 3, 4, 5, 6];
    // console.log(selectedNumber);
  return (
    <SelectorContainer>
        {/* {!selectedNumber && <p className="warning">You have not selected any number</p> } */}
        <div className="numbers">
            {numArr.map((value, i) => {
                return (
                <Box 
                    isSelected={value === selectedNumber}
                    onClick={() => setSelectedNumber(value)}
                    key={i}
                >
                    {value}
                    
                </Box>)

            })}

        </div>
        <p style={{color: selectedNumber ? "black" : "gainsboro"}}>Selected Number {selectedNumber}</p>
    </SelectorContainer>
  )
}

export default NumberSelector


const Box = styled.button`
    padding: 10px 0;
    width: 72px;
    height: 72px;
    background-color: ${(props) => (props.isSelected ? "black" : "gainsboro")};
    color: ${(props) => (!props.isSelected ? "black" : "gainsboro")};
    font-size: 24px;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: #b1b0b0;
    }
`;


const SelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;

    .numbers{
        display: flex;
        gap: 24px;
    }

    p{
        font-weight: 700;
        font-size: 24px;
        transition: 0.4s color;
    }


    /* .warning{
        font-weight: 400;
        color: red;
    } */
`
