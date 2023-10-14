import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import NewAdviceButton from "./newAdviceButton";
import dividerImg from "../images/pattern-divider-desktop.svg";

export default function AdviceCard() {
    // API 주소
    const ADVICE_API = "https://api.adviceslip.com/advice";

    // react qurey로 데이터 불러오기
    const { isLoading, data, refetch } = useQuery('adviceData', async () => {
        const res = await fetch(ADVICE_API);
        return res.json();
    },
        {
            enabled: true,
        }
    );

    const [adviceId, setAdviceId] = useState(null);
    const [adviceContent, setAdviceContent] = useState(null);
    const [initilalData, setInitialData] = useState(null);

    const getAdviceData = JSON.parse(localStorage.getItem("adviceData"));

    // 클릭 이벤트
    const handleClickBtn = () => {
        refetch();

        if (data) {
            localStorage.setItem("adviceData", JSON.stringify({
                id: data.slip.id,
                content: data.slip.advice
            }));
        }

        if (getAdviceData) {
            setAdviceId(getAdviceData.id);
            setAdviceContent(getAdviceData.content);
        }
    };

    // 초기값 설정
    useEffect(() => {
        if(getAdviceData) {
            setInitialData(getAdviceData);   
        }

        console.log(initilalData)
    }, [data])

    return (
        <section className="w-1/3 max-h-96 min-h-60 p-8 bg-[#323A49] rounded-lg text-center relative shadow-[0_10px_20px_rgba(21,_26,_33,_0.7)]">
            {
                isLoading ? <div className="text-white text-lg font-semibold -tracking-tighter my-8 break-keep">LOADING...</div> :
                    <>
                        <h2 className="text-[#52FFA8] text-sm font-medium -tracking-tighter">ADVICE #{adviceId !== null ? adviceId : initilalData.id}</h2>
                        <div className='text-white text-xl font-semibold -tracking-tighter my-8 break-keep'>"{adviceContent !== null ? adviceContent : initilalData.content}"</div>
                    </>
            }
            <img className="inline-block text-center mb-8" src={dividerImg} alt="구분선 이미지" />
            <NewAdviceButton handleClickBtn={handleClickBtn} />
        </section>
    )
}