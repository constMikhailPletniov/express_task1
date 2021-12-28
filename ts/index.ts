import domElements from './domElements/domElements';
import './style/style.css';

domElements.buttonIdFirstButton.addEventListener('click', getInputValue);
domElements.buttonIdGetUsersButton.addEventListener('click', getLastUser);

let count = 0;
const usersArray: Array<string> = [];

function getInputValue(): undefined {
    if (!validateInput((<HTMLInputElement>domElements.inputIdTextInput).value)) return;

    count++;
    usersArray.push((<HTMLInputElement>domElements.inputIdTextInput).value);
    pushValueToStorage((<HTMLInputElement>domElements.inputIdTextInput).value, count);
    removeValueFromInput(domElements.inputIdTextInput);
    console.log(usersArray);
    // getLastUser(usersArray);
}

function getLastUser() {
    console.log(usersArray);
}

function pushValueToStorage(value: string, count: number): void {
    localStorage.setItem(`id-${count}`, value);
}

function removeValueFromInput(element: HTMLInputElement): void {
    element.value = '';
}

function validateInput(text: string): unknown {
    if (!text.match(/[A-Z][a-z]*/g)) {
        setError();
        return;
    }
    else if (text === '') {
        setError();
        return;
    }

}

function setError(): void {
    domElements.divClassErorrContainer.classList.toggle('hidden');
}

