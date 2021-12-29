const selectorCss = {
    inputIdTextInput: '#textInput',
    IdFirstButton: '#firstButton',
    classHidden: '.hidden',
    classErorrContainer: '.ErorrContainer',
    idGetUsersButton: '#getUsersButton',
    classOut: '.out'

};

export default {
    inputIdTextInput: <HTMLInputElement>document.querySelector(selectorCss.inputIdTextInput),
    buttonIdFirstButton: <HTMLButtonElement>document.querySelector(selectorCss.IdFirstButton),
    divClassErorrContainer: <HTMLDivElement>document.querySelector(selectorCss.classErorrContainer),
    buttonIdGetUsersButton: <HTMLButtonElement>document.querySelector(selectorCss.idGetUsersButton),
    divClassOut: <HTMLDivElement>document.querySelector(selectorCss.classOut)
}