import axios from 'axios';

export async function getPhotos(id) {
	const res = await axios.get(`http://localhost:5000/api/photos/${id}`);
	return res.data;
}
