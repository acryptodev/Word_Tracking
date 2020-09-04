import React from 'react'
import HeaderTitle from './HeaderTitle'
import styled from 'styled-components'
import InputWordsArea from './InputWordsArea'
import AnswerArea from './AnswerArea'
import {connect} from 'react-redux'
import bgimage from '../../assets/bg.jpg'
import {getInitData} from '../../store/action'

const Container = ({getInitData}) => {
	getInitData()

	return(
		<FullContainer>
			<ContentContainer className="container" >
				<AdminButtonWrapper>
				<a href="http://localhost:8000/admin/">
				<AdminButton className="btn btn-primary">To Admin</AdminButton>
				</a>
				</AdminButtonWrapper>
				<HeaderTitle />
				<MainWrapper className="row">
					<div className="col-md-6 col-sm-12">
						<InputWordsArea />
					</div>
					<div className="col-md-6 col-sm-12">
						<AnswerArea />
					</div>
				</MainWrapper>
			</ContentContainer>
			<QuoteString>Alles komt altijd goed</QuoteString>
		</FullContainer>
		)
}
const QuoteString = styled.p`
	color: gray;
	position: absolute;
	bottom: 0.5rem;
	right: 1rem;
	font-family: 'Amiko', sans-serif;
	letter-spacing: 1px;
`
const AdminButtonWrapper = styled.div`
	text-align: right;
	margin-bottom: 1rem;

`
const AdminButton = styled.button`
	border-radius: 5px;
	outline: none;
	&:hover {
		background-color: transparent;
		transition: .3s all;

	}
`
const FullContainer = styled.div`
	background-image: url(${bgimage});
	background-size: 100vw 100vh;
	background-repeat: no-repeat;
	height: 100vh;
`
const ContentContainer = styled.div`
	text-align: center;
	padding: 1rem;
`
const MainWrapper = styled.div`

`

const mapDispatchToProps = dispatch => ({
	getInitData: () => dispatch(getInitData()),
})
export default connect(null, mapDispatchToProps)(Container);
// export default Container;