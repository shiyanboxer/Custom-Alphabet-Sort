'use client'
import { useState } from 'react';
import { customSort } from '@/app/utils/customSort';

export default function Form() {
    const [input, setInput] = useState('');
    const [customAlphabet, setCustomAlphabet] = useState('');
    const [result, setResult] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleCustomAlphabetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomAlphabet(e.target.value);
    };

    const handleSubmit = () => {
        try {
            const sortedString = customSort(input, customAlphabet);
            setResult(sortedString);
        } catch (error) {
            const errorMessage = (error as Error).message;
            console.error(errorMessage);
            setResult('Error: ' + errorMessage);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="space-y-4 w-full max-w-md mx-auto">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enter string to sort"
                    className="px-4 py-2 border rounded-md w-full text-black"
                />
                <input
                    type="text"
                    value={customAlphabet}
                    onChange={handleCustomAlphabetChange}
                    placeholder="Enter custom alphabet"
                    className="px-4 py-2 border rounded-md w-full text-black"
                />
                <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md w-full"
                >
                    Sort String
                </button>
            </div>
            {result && (
                <div className="mt-4 p-4 border rounded-md w-full max-w-md mx-auto">
                    <p>Result: {result}</p>
                </div>
            )}
        </main>
    )
}