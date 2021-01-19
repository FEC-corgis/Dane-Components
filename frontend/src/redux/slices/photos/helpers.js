import axios from 'axios';

export async function getPhotos() {
  const res = await axios.get('http://localhost:5000/api/photos/10');
  return res.data;
}
