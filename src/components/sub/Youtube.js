import Layout from '../common/Layout';
import Popup from '../common/Popup';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Youtube() {
	const icon = useRef(null);
	const [Vids, setVids] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyCjKYbUcNseIkTsTgciA-Pkjzcm-_IjYdM';
		const playlist = 'PLHtvRFLN5v-VD95TBpr5Dh2zguWCjjmMG';

		const num = 4;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		axios
			.get(url)
			.then((json) => {
				console.log(json.data.items);
				setVids(json.data.items);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		console.log(Vids);
	}, [Vids]);

	return (
		<>
			<Layout name={'Youtube'}>
				{Vids.map((vid, idx) => {
					return (
						<article key={idx}>
							<FontAwesomeIcon icon={faTwitter} ref={icon} />
							<h2>{vid.snippet.title}</h2>
							<p>{vid.snippet.description}</p>
							<img
								src={vid.snippet.thumbnails.standard.url}
								onClick={() => {
									setOpen(true);
									setIndex(idx);
								}}
							/>
							<span>{vid.snippet.publishedAt}</span>
						</article>
					);
				})}
			</Layout>

			{Open && (
				<Popup setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				</Popup>
			)}
		</>
	);
}

export default Youtube;
