import axios from 'axios';

export async function getPhotos(id) {
    const { data } = await axios.get(`/api/headerService/photos/${id}`);
    return data;
}
