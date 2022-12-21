import React from "react";
import { BlinkingCursorTextBuilder, FloatingLettersTextBuilder } from 'react-animated-text-builders'


const About = () => {
    return(
        <>
        <div style={{display:'flex', justifyContent:'center'}}>
        <BlinkingCursorTextBuilder
        textStyle={{fontWeight :"bold", font : "Times New Roman", fontSize : "22px"}}
        style={{ marginTop:"10px", marginBottom :"10px"}}
        cursorComponent={<div style={{color : "green"}}>"VictoFire"</div>}
        blinkTimeAfterFinish={-1}>About: </BlinkingCursorTextBuilder>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center',flexDirection:'column'}}>
            <p>
            Pyrox i-CITY Pvt. Ltd. (PIPL) is today’s only proud indigenous manufacturer of end-to-end product <br/>
            solutions for fire alarm systems under the Victofire-Pyrox brand. Having a customer base spread <br/>
            across the country with prominent clusters in the north, west and south Indian markets, PIPL is <br/>
            honoured to be currently providing fire detection systems for over 25,000 apartments across 30<br/>
             project.
            </p>
            <p>
            Headed by Mrs. Vasudha Prasad (a veteran tech expert from the field) and a team of 40 <br/>
            professionals, the company is VC funded by the renowned defence equipment manufacturer and <br/>
            EMS company, Rangsons Technologies. The company is well placed with an order pipeline of over <br/>
            2 million (USD) in its key market segments. 
            </p>
            <p>
            Headquartered in Bangalore (Hoskote), with a strong team of product development engineers <br/>
            comprising senior experts from software, firmware, hardware, and app development domains, the <br/>
            company deploys its state-of-the-art patented product vision in safety and lifestyle automation.<br/>
            </p>
            <p>
            This team is complimented by an equally capable mechanical design team who bring in the <br/>
            required expertise in product design, CAM CAD, 3D printing, and modelling. The field team, <br/>
            comprising of around 30-40 personnel, consists of Regional Heads, Regional Sales Managers,<br/>
            Project Managers, and Site Engineers who execute the work across the country.
            </p>
        </div>
      </>
    )
}


export default About;