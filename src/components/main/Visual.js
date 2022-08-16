import Anime from '../../assets/Anime';
import { useRef } from 'react';

const btnStyle = {
	position: 'absolute',
	top: 120,
	left: 100,
};

function Visual() {
	return (
		<figure id='visual' className='myScroll'>
			<button
				style={btnStyle}
				onClick={() => {
					new Anime(window, {
						prop: 'scroll',
						value: 600,
						duration: 500,
					});
				}}>
				start
			</button>
		</figure>
	);
}

export default Visual;
