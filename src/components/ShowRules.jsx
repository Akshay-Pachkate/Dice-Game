import styled from "styled-components"



const ShowRules = () => {
  return (
    <Rules>
        <h1>How to play dice game</h1>
        <p>
            1. Select any number. <br />
            2. Click on dice to roll it. <br />
            3. After click on  dice  if selected number is equal to dice number you will get same point as dice. <br />
            4. if you get wrong guess then 1 point will be deducted.
        </p>
    </Rules>
  )
}

export default ShowRules

const Rules = styled.div`
    padding: 20px;
    margin: 12px;
    margin-top: 25px;
    background-color: #3D3B40;
    color: gainsboro;
    max-width: 784px;
    border-radius: 5px;
    h1{
        font-size: 24px;
        font-weight: 700;
    }

    p{
        font-size: 16px;
        font-weight: 500;
    }
`