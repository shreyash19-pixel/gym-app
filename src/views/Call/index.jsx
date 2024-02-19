import React from 'react'
import { CallContainer, CallNumber, CallNumberContainer, CallNumberSpan } from '../../styles/Call'
import {BMICalWrap, BMISpanWrap, BMIWrap} from '../../styles/BMI'
import { ChooseHeading } from '../../styles/ChooseUs'
import { PriceBtn } from '../../styles/Pricing'
import { ClassesBtnWrap } from '../../styles/Hero'
const Call = () => {
  return (
    <CallContainer>
      <BMIWrap>
        <BMISpanWrap></BMISpanWrap>
        <BMICalWrap call = "true">
          <CallNumberContainer>
            <ChooseHeading>Need a Fitness Trainer?</ChooseHeading>
            <CallNumber><CallNumberSpan>Call:</CallNumberSpan> +123-456789</CallNumber>
          </CallNumberContainer>
          <ClassesBtnWrap style={{display: "flex", justifyContent: "flex-start"}}>
            <PriceBtn href = "#">PURCHASE NOW</PriceBtn>
          </ClassesBtnWrap>
        </BMICalWrap>
      </BMIWrap>
    </CallContainer>
  )
}

export default Call