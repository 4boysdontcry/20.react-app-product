import React, { useState, useCallback, useRef, useMemo } from 'react'
import styled from 'styled-components'
import { FlexWrap } from '../styled/index';
import List from './List'

const ListWrapper = styled.ul`
	${ FlexWrap }

`

const Lists = () => {
	const v = {
		src: "//via.placeholder.com/100",
		title: 'test',
		price: 126.0
	}

	return (
		<ListWrapper>
			<List v={v} />
			<List v={v} />
			<List v={v} />
			<List v={v} />
			<List v={v} />
			<List v={v} />
			<List v={v} />
		</ListWrapper>
	);
}

export default Lists;
