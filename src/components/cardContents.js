import { useEffect, useState } from "react";

export default function CardContents({ adviceData }) {

    const [count, setCount] = useState(0);
    const [typingWord, setTypingWord] = useState("");

    // 텍스트 타이핑 효과
    useEffect(() => {
        const adviceWord = adviceData.content;

        const typingInterval = setInterval(() => {
            setTypingWord((current) => {
                if (count < adviceWord.length) {
                    let updateTypingWord = current;
                    updateTypingWord += adviceWord[count];
                    setCount(count + 1);

                    console.log(count)
                    console.log(updateTypingWord)

                    return updateTypingWord;
                }
            });

            if (count >= adviceWord.length) {
                setTypingWord(adviceWord);
                setCount(adviceWord.length);
            }
        }, 100);

        return () => {
            clearInterval(typingInterval);
        }
    }, [typingWord]);

    return (
        <div>
            <h2 className="text-[#52FFA8] text-sm font-bold -tracking-tighter">ADVICE #{adviceData.id}</h2>
            <div className='text-white text-2xl font-semibold -tracking-tighter mt-8 mb-10 break-keep'>"{typingWord}"</div>
        </div>
    )
}