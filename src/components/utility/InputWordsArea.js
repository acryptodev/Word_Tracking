import React, {useState} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {inputAnswer} from '../../store/action'
import { googleTranslate } from "../../utils/googleTranslate";
import Notifications, {notify} from 'react-notify-toast'

const InputWordsArea = ({data, inputAnswer}) => {
	const [textval, setTextval] = useState("")
	const [translate, setTranslate] = useState("")
	const answerWords = new Set()
	const handleClick = () => {
		data.forEach(item=>{
			if (translate.indexOf(item.keywords) !== -1) {
				answerWords.add(item.category.category)
			}
		})
		if (answerWords.size === 0) {
			answerWords.add("inconclusive")
		}
		// console.log("answerWords", answerWords, answerWords.size)
		inputAnswer(answerWords)
	}
	const handleClearClick = () => {
		setTextval("")
		setTranslate("")
	}
	const handleChange = (e) => {
		setTextval(e.target.value)
		let transQuestion
		googleTranslate.translate(e.target.value, "en", function(err, translation) {
        transQuestion = translation.translatedText;
        setTranslate(transQuestion);
        // translating(transQuestion);
        // console.log("transQuestion==>", transQuestion)
    	})
	}
	const handleCopyClick = e => {
		let copyText = document.getElementById("translated_copy");
		copyText.select();
		copyText.setSelectionRange(0, 99999)
		document.execCommand("copy");
		if (copyText) {
			notify.show(`Copied follow text${copyText}`)
		}
		// console.log(translate)
	}
	return (
		<div>
		<Notifications />
		<ContentWordsWrapper className="card">
			<TextAreaWrapper className="card-body">
				<TextArea className="form-control" value={textval} onChange={handleChange}/>
			</TextAreaWrapper>
			<ButtonWrapper className="card-footer">
				<Button className="btn btn-primary" color="#4287f5" onClick={handleClick}>Go</Button>
				<Button className="btn btn-danger" color="#f55d42" onClick={handleClearClick}>Clear</Button>
			</ButtonWrapper>
		</ContentWordsWrapper>
		<ContentWordsWrapper className="card">
			<TextAreaWrapper className="card-body">
				<TextArea id="translated_copy" className="form-control" value={translate} readOnly/>
			</TextAreaWrapper>
			<ButtonWrapper className="card-footer">
				<CopyButton className="btn btn-primary" color="#4287f5" onClick={handleCopyClick}>Copy</CopyButton>
			</ButtonWrapper>
		</ContentWordsWrapper>
		</div>
		)
}
const ContentWordsWrapper = styled.div`
	margin-top: 2rem;
	opacity: .9;
	display: flex;
	width: 100%;
	height: auto;
	background-color: none;
	border: none;
	
`
const TextAreaWrapper = styled.div`
	background-color: black;
	border-top-right-radius: 7px;
	border-top-left-radius: 7px;
	padding: 30px 10px;
	box-shadow: 1px 3px 3px rgba(0,0,0,.8);
`
const ButtonWrapper = styled.div`
	background-color: white;
	padding: .5rem;
	border-bottom-right-radius: 7px;
	border-bottom-left-radius: 7px;
	box-shadow: 1px 3px 3px rgba(255,255,255,.8);
`
const TextArea = styled.textarea`
	width: 100%;
	min-height: 120px;
	font-size: 1rem;
`
const Button = styled.button`
	margin-left: 1rem;
	&:hover {
		background-color: transparent;
		transition: .3s all;
		color: ${(props)=>props.color}
	}
`
const CopyButton = styled.button`
	margin-left: 1rem;
	float: right;
	&:hover {
		background-color: transparent;
		transition: .3s all;
		color: ${(props)=>props.color}
	}
`
const mapStateToProps = (state) => ({
	data: state.data
})
const mapDispatchToProps = dispatch => ({
	inputAnswer: (a) => dispatch(inputAnswer(a)),
})
export default connect(mapStateToProps, mapDispatchToProps)(InputWordsArea)