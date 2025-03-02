import { useState, useEffect, useRef } from 'react';
import Button from './Button';
import SearchIcon from './icons/SearchIcon';
import LocationIcon from './icons/LocationIcon';

function Form({ onSubmit }) {
    const [localCity, setLocalCity] = useState('');
    const inputField = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(localCity);
    };

    useEffect(() => {
        inputField.current?.focus();
    }, []);

    return (
        <div className='form-container'>
            <LocationIcon />
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Podaj miasto'
                    value={localCity}
                    onChange={(e) => setLocalCity(e.target.value)}
                    ref={inputField}
                />
                <Button type={'submit'} clasName='search-button'>
                    {/* <img src='./search-icon.svg' alt='search icon' /> */}
                    <SearchIcon />
                </Button>
            </form>
        </div>
    );
}

export default Form;
