import domElements from './domElements/domElements';
import axios from 'axios';
import SERVER from './configuration';
import ENDPOINTS from './endpoints';
//import { IUserName } from './interfaces/interfaces';
import './style/style.css';

require("babel-core/register");
require("babel-polyfill");

domElements.buttonIdFirstButton.addEventListener('click', getInputValue);
domElements.buttonIdGetUsersButton.addEventListener('click', getLastUser);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let count = 0;

async function getInputValue(): Promise<void> {
    try {
        console.log((<HTMLInputElement>domElements.inputIdTextInput).value);
        count++;
        removeValueFromInput(domElements.inputIdTextInput);
        console.log((<HTMLInputElement>domElements.inputIdTextInput).value);
        const { data: message } = await axios.post(`${SERVER.URL}${ENDPOINTS.USERS}`, {
            "userName": (<HTMLInputElement>domElements.inputIdTextInput).value
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(message);

    } catch (err) {
        console.error('getInputValue: ', err);
    }
}

async function getLastUser(): Promise<void> {
    try {
        const { data: { userName } } = await axios.get(`${SERVER.URL}${ENDPOINTS.USERS}${ENDPOINTS.LAST_USER}`);
        domElements.divClassOut.textContent = userName;
    } catch (err) {
        console.error('getLastUser: ', err);
    }
}

function removeValueFromInput(element: HTMLInputElement): void {
    element.value = '';
}


