import useTyping from "./useTyping";

export default function CardContents({ adviceData }) {

    const typingWord = useTyping(adviceData);

    return (
        <div>
            <h2 className="text-[#52FFA8] text-sm font-bold -tracking-tighter">ADVICE #{adviceData.id}</h2>
            <div className='text-white text-2xl font-semibold -tracking-tighter mt-8 mb-10 break-keep'>
                <span>"</span>
                {typingWord}
                <span className="inline-block w-px h-6 bg-white mx-1 animate-blink-effect"></span>
                <span>"</span>
            </div>
        </div>
    )
}