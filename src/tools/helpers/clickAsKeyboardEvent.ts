// Types
type KeyParams = {
    key: string
    code: string
}

export const clickAsKeyboardEvent = (keyParameters: KeyParams) => {
    window.dispatchEvent(new KeyboardEvent('keydown', keyParameters));
};
