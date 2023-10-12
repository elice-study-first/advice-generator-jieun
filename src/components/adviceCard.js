import { useState, useEffect } from "react";
import NewAdviceButton from "./newAdviceButton";

export default function AdviceCard() {
    // API 주소
    const ADVICE_API = "https://api.adviceslip.com/advice";

    // api 데이터 가져오기
    useEffect(() => {
        fetch(ADVICE_API)
            .then(res => res.json())
            .then(data => {
                console.log(data.slip);
                setAdviceData(data.slip);
            })
    }, []);

    // 데이터 state
    const [adviceData, setAdviceData] = useState([]);
    const [changeMessage, setChangeMessage] = useState(adviceData);


    const onClickHandle = () => {
        setChangeMessage(adviceData);
    }
        // const handleOnClick = useEffect(() => {
        //     setChangeMessage(adviceData);
        // }, [adviceData])

    return (
        <section className="w-1/3 max-h-96 min-h-60 p-8 bg-[#4E5D73] rounded-lg text-center relative">
            <h2 className="text-[#52FFA8] text-sm font-medium -tracking-tighter">ADVICE #{changeMessage.id}</h2>
            <div className='text-lg font-semibold -tracking-tighter my-8 text-white break-keep'>"{changeMessage.advice}"</div>
            <NewAdviceButton onClickHandle={onClickHandle} />
        </section>
    )
}