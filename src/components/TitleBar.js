import React from 'react';
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
color: #111; padding: 1.5em; border-radius: .5em; margin: 1em 0;
background-color: ${ props => props.bgColor ? props.bgColor : '#ddd' };
color: ${ props => props.color ? props.color : '#ddd' };		/* 여기서 props는 const wrapper가 const TitleBar에게서 받아온 props임 */
`

const style = {
	borderColor: "#f00", borderWidth: "5px"
}

const TitleBar = ({title, design}) => {
	return (
		<Wrapper color={ design.color } bgColor={ design.bgColor }>
			<h1>{ title.mainTitle}</h1>
			<hr style={ style } />
			<h1>{ title.subTitle }</h1>
		</Wrapper>
	);
}

export default TitleBar;
