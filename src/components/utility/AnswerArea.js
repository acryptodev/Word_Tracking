import React from 'react';
import styled from 'styled-components'
import AnswerField from "./AnswerField"
import {connect} from 'react-redux'

const AnswerArea = ({answer}) => {
	
	let arr
	if (answer && answer.size > 0) {
		arr = Array.from(answer)
	}
	let invalid, valid
	if (arr && arr.length === 1 && arr[0] === "inconclusive") {
		invalid = "inconclusive"
	} else if (arr && arr.length > 0) {
		valid = arr
	}
	return(
		<AnswerAreaWrapper>
		{
			valid && valid.length > 0 && valid.map((item, key)=>
				<AnswerField key={key} title={item} color="#017809" bgcolor="#b8e2f5"></AnswerField>
				)
		}
		{
			invalid && <AnswerField title={invalid} color="#b01f02" bgcolor="#f5bfb8"></AnswerField>
		}
		</AnswerAreaWrapper>
		)
}
const AnswerAreaWrapper = styled.div`
	width: 70%;
	background: black;
	opacity: .9;
	margin: 3rem auto 0 auto;
	padding: 1rem;
	border-radius: 5px;
	box-shadow: 1px 3px 3px rgba(0,0,0,.9)
`
const mapStateToProps = (state) => ({
	answer: state.answer
})
export default connect(mapStateToProps, null)(AnswerArea)
// export default AnswerArea;