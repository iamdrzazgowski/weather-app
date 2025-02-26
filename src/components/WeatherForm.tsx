import { useState } from 'react';
import Button from './Button';

function Form({ onSubmit }) {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(city);
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Podaj miasto'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <Button type={'submit'}>
                    <img src='./search_icon.svg' alt='search icon' />
                </Button>
            </form>
        </div>
    );
}

export default Form;
