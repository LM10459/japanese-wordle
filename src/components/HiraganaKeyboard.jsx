import React from 'react';

const HiraganaKeyboard = () => {
    const hiraganaKeys = [
        'あ', 'い', 'う', 'え', 'お',
        'か', 'き', 'く', 'け', 'こ',
        'さ', 'し', 'す', 'せ', 'そ',
        'た', 'ち', 'つ', 'て', 'と',
        'な', 'に', 'ぬ', 'ね', 'の',
        'は', 'ひ', 'ふ', 'へ', 'ほ',
        'ま', 'み', 'む', 'め', 'も',
        'や', 'ゆ', 'よ',
        'ら', 'り', 'る', 'れ', 'ろ',
        'わ', 'を', 'ん'
    ];

    return (
        <div className="hiragana-keyboard">
            {hiraganaKeys.map((key, index) => (
                <button key={index} className="key">
                    {key}
                </button>
            ))}
        </div>
    );
};

export default HiraganaKeyboard;