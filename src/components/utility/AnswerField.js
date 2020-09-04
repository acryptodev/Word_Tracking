import React from "react"
import styled from "styled-components"

const AnswerField = ({title, bgcolor, color}) => {
	return(
		<AnswerFieldWrapper color={color} bgcolor={bgcolor}>{title}</AnswerFieldWrapper>
		)
}
const AnswerFieldWrapper = styled.div`
	background-color: ${(props) => props.bgcolor};
	color: ${(props) => props.color};
	font-size: 1.5rem;
	padding: .3rem;
	margin: 1rem auto;
	border-radius: 3px;
	letter-spacing: .1rem;
	font-family: 'Amiko', sans-serif;
`
export default AnswerField;