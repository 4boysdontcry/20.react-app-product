import styled, { css } from 'styled-components'

const Hr = styled.hr`
	display: block;
	width: 100%;
	border-color: ${ props => props.color ? props.color : '#555' }; 
	border-width: ${ props => props.width ? props.width : '1px' }; 
`

const FlexWrap = css`
	display: flex; justify-content: flex-start; align-items: center; flex-wrap: wrap;
`

const media = {
	xs: '575px',
	sm: '767px',
	md: '991px',
	lg: '1199px',
	xl: '1399px',
}

export { Hr, FlexWrap, media }