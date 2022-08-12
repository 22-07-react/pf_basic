import Layout from '../common/Layout';
import { useRef, useEffect } from 'react';

function Location() {
	const { kakao } = window;
	const container = useRef(null);

	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3,
	};

	const markerPosition = option.center;

	const imgSrc =
		process.env.PUBLIC_URL + '/img/marker1.png'; //마커이미지 지정
	const imgSize = new kakao.maps.Size(232, 99); //마커이미지 사이즈 지정
	const imgOpt = {
		offset: new kakao.maps.Point(116, 99), //마커포인터 위치값 지정
	};
	const markerImage = new kakao.maps.MarkerImage(
		imgSrc,
		imgSize,
		imgOpt
	);

	const marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage,
	});

	useEffect(() => {
		const map_instance = new kakao.maps.Map(
			container.current,
			option
		);

		marker.setMap(map_instance);
	}, []);

	return (
		<Layout name={'Location'}>
			{/* 지도를 요소에 참조객체 등록 */}
			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
