import { useEffect, useState, useRef } from "react";

export default function useTyping(adviceData) {

    const [count, setCount] = useState(0);
    const [typingWord, setTypingWord] = useState("");

     // 텍스트 타이핑 효과
     useEffect(() => {
        const typingData = adviceData.content;

        const typingInterval = setInterval(() => {
            setTypingWord((current) => {
                if (count < typingData.length) {
                    let updateTypingWord = current;
                    updateTypingWord += typingData[count];
                    setCount(count + 1);

                    return updateTypingWord;
                }
            });
            if (count >= typingData.length) {
                setTypingWord(typingData);
                setCount(typingData.length);
            }
        }, 100);

        return () => {
            clearInterval(typingInterval);
        }
    }, [typingWord]);

    return typingWord;
}