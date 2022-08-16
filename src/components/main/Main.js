import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Btns from './Btns';

import { useRef, useEffect, useState } from 'react';
import Anime from '../../assets/Anime';

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [Index, setIndex] = useState(0);
	const [Scrolled, setScrolled] = useState(0);

	//섹션의 세로 위치값을 구하는 함수
	const getPos = () => {
		pos.current = [];
		const secs = main.current.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
	};

	//스크롤 위치에 따라서 버튼 활성화 함수
	const activation = () => {
		const scroll = window.scrollY;
		const btns = main.current.querySelectorAll('.scroll_navi li');
		setScrolled(scroll);

		pos.current.map((pos, idx) => {
			if (scroll >= pos) {
				for (const btn of btns) btn.classList.remove('on');
				btns[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);

		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	useEffect(() => {
		console.log(Index);
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[Index],
			duration: 500,
		});
	}, [Index]);

	return (
		<main ref={main}>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics />
			<Vids />
			<Btns setIndex={setIndex} Scrolled={Scrolled} pos={pos.current} Index={Index} />
		</main>
	);
}

export default Main;

/*
	useRef : state와는 달리 useRef에 담겨있는 값은 변경이 되도 화면이 재랜더링되지 않으면서
	만약 다른 state변경으로 화면이 재랜더링 되었을때 일반 변수값처럼 useRef에 담겨있는 값은 사라지지 않음

	state : 해당값이 변경이 되면 무조건 해당 컴포넌트는 재랜더링 일어남 (화면의 변경점을 담당하는 화면UI에 관련 데이터)
	지역변수 : 컴포넌트가 재랜더링될떄마다 해당 변수에 있는 값은 유지가 안되고 다시 초기화 (권장사항 아님)
	useRef : 컴포넌트가 재랜더링되더라도 값이 유지가됨, 해당 값이 변경되어도 화면을 재랜더링하지 않음 (화면UI의 직접적인 변경사항은 아니나 특정 정보값을 단기간에 엄청 많이 변경해야될때)
*/
