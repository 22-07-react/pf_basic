import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';

import { useRef, useEffect } from 'react';

function Main() {
	const main = useRef(null);

	useEffect(() => {
		const secs = main.current.querySelectorAll('.myScroll');
	}, []);

	return (
		<main ref={main}>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics />
			<Vids />
		</main>
	);
}

export default Main;

/*
	useRef : state와는 달리 useRef에 담겨있는 값은 변경이 되도 화면이 재랜더링되지 않으면서
	만약 다른 state변경으로 화면이 재랜더링 되었을때 일반 변수값처럼 useRef에 담겨있는 값은 사라지지 않음
*/
