import { useState, useEffect, useRef } from 'react';
import Button from './Button';

function Form({ onSubmit }) {
    const [localCity, setLocalCity] = useState('');
    const inputField = useRef<HTMLInputElement>(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(localCity);
    };

    useEffect(() => {
        inputField.current?.focus();
    }, []);

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Podaj miasto'
                    value={localCity}
                    onChange={(e) => setLocalCity(e.target.value)}
                    ref={inputField}
                />
                <Button type={'submit'}>
                    <img src='./search-icon.svg' alt='search icon' />
                </Button>
            </form>
        </div>
    );
}

export default Form;
