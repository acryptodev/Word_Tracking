import React from 'react'
import styled from 'styled-components'


const HeaderTitle = () => {
	return (
		<div className="row">
			<div className="col-md-12 col-sm-12 col-xs-12">
				<Title className="header_title">Leen's CT Helper</Title>
			</div>
		</div>
		)
}
const Title = styled.p`
	border-radius: 3px;
	opacity: .8;
	box-shadow: 1px 3px 3px rgba(255,255,255,.8);
	background-color: white;
	color: black;
	font-size: 2.4rem;
	font-weight: 400;
	letter-spacing: .1rem;
	text-align: center;
	font-family: 'Amiko', sans-serif;
`
export default HeaderTitle