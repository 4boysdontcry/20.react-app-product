import React, { useState, useCallback, useRef, useMemo } from 'react'
import styled from 'styled-components'
import { FlexWrap } from '../styled/index';
import List from './List'

const ListWrapper = styled.ul`
	${ FlexWrap }

`

const Lists = ({ lists }) => {

	return (
		<ListWrapper>
			{
				lists.map(v => <List list={v} key={ v.id } /> )
			}
		</ListWrapper>
	);
}

export default Lists;
