import styled from 'styled-components'
import { color, padding, device } from '../../../styles'

export const Modal = styled.div`
	position: fixed;
	z-index: 500;
	background-color: ${color.white};
	width: 70%;
	border: 1px solid ${color.grey};
	box-shadow: 1px 1px 1px ${color.black};
	padding: ${padding.medium}px;
	left: 15%;
	top: 10vh;
	box-sizing: border-box;
	transition: all 0.3s ease-out;

	@media ${device.tablet} {
		width: 500px;
		left: calc(50% - 250px);
	}
`
