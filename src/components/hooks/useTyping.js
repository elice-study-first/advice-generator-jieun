import { useEffect, useState } from "react";

export default function useTyping(adviceData) {

    const [count, setCount] = useState(0);
    const [typingWord, setTypingWord] = useState("");

    // 텍스트 타이핑 효과
    useEffect(() => {
        const typingData = adviceData.content;

        const typingInterval = setInterval(() => {
            setTypingWord(current => {
                if (count < typingData.length) {
                    let updateTypingWord = current + typingData[count];
                    setCount(count => count + 1);
                    return updateTypingWord;
                } else {
                    clearInterval(typingInterval);
                    return typingData;
                }
            });
        }, 100);

        return () => {
            clearInterval(typingInterval);
        }
    }, [count, adviceData.content]);

    return typingWord;
}