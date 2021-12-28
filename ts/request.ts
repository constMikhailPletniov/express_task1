import axios from 'axios';
import SERVER from './configuration';

export default async function requestQueryUsers(): Promise<void> {

    await axios.get(`${SERVER}?`);

}

