import React, { useState } from 'react'
import { BMICalWrap, BMIContainer, BMIDesc, BMIHeadingSpan, BMIInput, BMIInputContainer, BMIInputWrap, BMILabel, BMILabelContainer, BMILabelWrap, BMISpanWrap, BMIWrap, CalculateBtn, CalculateBtnWrap, CalculatedBMI } from '../../styles/BMI'
import { ChooseHeading } from '../../styles/ChooseUs'

const BMI = () => {

    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [calcBMI, setCalcBMI] = useState("")
    const [status, setStatus] = useState("")

    const handleWeightChange = (event) => {
        let numericValue = event.target.value.replace(/\D/g, ''); 
        numericValue = numericValue.slice(0, 3); 
        setWeight(numericValue);
      };

      const handleHeightChange = (event) => {
        let numericValue = event.target.value.replace(/\D/g, ''); 
        numericValue = numericValue.slice(0, 3); 
        setHeight(numericValue);
      };

    const handleBMI = () => {
        let heightInM = height / 100
        let bmi = weight / (heightInM * heightInM)
        bmi = bmi.toFixed(2)
        setCalcBMI(bmi)

        if(bmi < 18.5)
        {
            setStatus("Underweight")
        }
        else if(bmi>= 18.5 && bmi <= 24.9)
        {
            setStatus("Healthy Weight")
        }
        else if(bmi>= 25.9 && bmi <= 29.9)
        {
            setStatus("Overweight")
        }
        else if(bmi > 30.0)
        {
            setStatus("Obesity")
        }
    }

  return (
    <BMIContainer>
        <BMIWrap>
            <BMISpanWrap></BMISpanWrap>
            <BMICalWrap>  
                <ChooseHeading>Let's Calculate Your  <BMIHeadingSpan>BMI</BMIHeadingSpan></ChooseHeading>
                <BMIDesc>
                    Easily determine your body mass index with our accurate calculation tool.
                </BMIDesc>
                <BMIInputContainer>
                    <BMIInputWrap>
                        <BMIInput type = "text" value = {weight} placeholder='Weight / Kg' onChange={handleWeightChange} />
                    </BMIInputWrap>
                    <BMIInputWrap>
                        <BMIInput type = "text" value = {height} placeholder='Height / cm' onChange={handleHeightChange} />
                    </BMIInputWrap>
                </BMIInputContainer>
                <BMILabelContainer>
                    <BMILabelWrap>
                        <BMILabel>Your BMI is:</BMILabel>
                        <CalculatedBMI>{calcBMI}</CalculatedBMI>
                    </BMILabelWrap>
                    <BMILabelWrap>
                        <BMILabel>Your Weight is:</BMILabel>
                        <CalculatedBMI>{status}</CalculatedBMI>
                    </BMILabelWrap>
                </BMILabelContainer>
                <CalculateBtnWrap>
                    <CalculateBtn onClick = {handleBMI}>CALCULATE</CalculateBtn>
                </CalculateBtnWrap>
            </BMICalWrap>
        </BMIWrap>
    </BMIContainer>
  )
}

export default BMI