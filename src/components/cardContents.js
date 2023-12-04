import { FaRegFrown } from "react-icons/fa";
import useTyping from "./hooks/useTyping";

export default function CardContents({ adviceData, isError }) {

    const typingWord = useTyping(adviceData);

    return (
        (
            !isError ?
                <div>
                    <h2 className="text-[#52FFA8] text-sm font-bold -tracking-tighter">ADVICE #{adviceData.id}</h2>
                    <div className='text-white text-2xl font-semibold -tracking-tighter mt-8 mb-10 break-keep'>
                        <span>"</span>
                        {typingWord}
                        <span className="inline-block w-px h-6 bg-white mx-1 animate-blink-effect"></span>
                        <span>"</span>
                    </div>
                </div>
                :
                <div className="flex items-center flex-col">
                    <FaRegFrown color="#fff" size="42" />
                    <div className='text-white text-2xl font-semibold -tracking-tighter mt-3 mb-10 break-keep'>An error occurred, please try again later.</div>
                </div>
        )

    )
}