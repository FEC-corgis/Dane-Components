import axios from 'axios';

export async function getPhotos(id) {
    const route =
        process.env.NODE_ENV !== 'production'
            ? `http://localhost:5000/api/photos/${id}`
            : `/api/headerService/photos/${id}`;

    const { data } = await axios.get(route);
    return data;
}
