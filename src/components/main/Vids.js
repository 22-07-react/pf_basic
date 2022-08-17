import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

function Vids() {
	return (
		<section id='vids' className='myScroll'>
			<Swiper
				pagination={{ clickable: true }}
				modules={[Pagination]}
				spaceBetween={50}
				loop={true}
				slidesPerView={3}
				centeredSlides={true}>
				<SwiperSlide>1</SwiperSlide>
				<SwiperSlide>2</SwiperSlide>
				<SwiperSlide>3</SwiperSlide>
				<SwiperSlide>4</SwiperSlide>
				<SwiperSlide>5</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Vids;
