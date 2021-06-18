/** 
*! useState() => [component에서 사용할 변수 등록, 변경] state 등록
*! useEffect() => [component 이벤트 콜백] component가 실행, 업데이트, 종료 될 때 실행할 기능을 정의하는 곳
*! useRef() => DOM요소에 접근할 루트 정의 (화면이 뿌려질 루트를 정함)
*! useCallback() => [component의 이벤트 콜백 함수를 재사용할 때(메모리 최적화)] 사용
*! useMemo() => [state 최적화]
*/

import React, { useState, useCallback, useRef } from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'

const CloseButton = styled.div`
	position: absolute; top: 50%; right: .325em; transform: translateY(-50%); font-size: 1.5em; cursor: pointer;
`

const Search = ({ handleChange }) => {
	const [query, setQuery] = useState('')
	
	const inputRef = useRef(null)

	const onChange = useCallback((e) => {
		setQuery(e.target.value)
		handleChange(e.target.value)
	}, [handleChange])
	
	const onClick = useCallback((e) => {
		setQuery('')
		inputRef.current.focus()
	}, [])

	return (
		<Form className="position-relative">
			<Form.Control type="text" size="lg" ref={inputRef} onChange={onChange} value={query} autoFocus />
			{
				query !== ''
					? <CloseButton className="fa fa-times-circle" onClick={onClick} /> : ''
			}
		</Form>
	);
}

export default React.memo(Search)
