
import Reacutt, { useState } from 'react';
import input from './inputField.css'

const InputField = () => {
    const [inputValue, setInputValue] = useState('');
    const [isError, setIsError] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        if (event.target.value) {
            setIsError(false);
        }
    };

    const handleSubmit = () => {
        if (!inputValue) {
            setIsError(true);
        } else {
            console.log('Отправлено:', inputValue);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className={`input-field ${isError ? 'input-error' : ''}`}
                placeholder="Введите текст"
            />
            <button onClick={handleSubmit}>Send</button>
        </div>
    );
};

export default InputField;
