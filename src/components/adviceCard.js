import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import NewAdviceButton from "./newAdviceButton";
import dividerImg from "../images/pattern-divider-desktop.svg";
import Loading from "./loading";

export default function AdviceCard() {
    // API 주소
    const ADVICE_API = "https://api.adviceslip.com/advice";

    // react qurey로 데이터 불러오기
    const { isLoading, isFetching, data, refetch } = useQuery('adviceData', async () => {
        const res = await fetch(ADVICE_API);
        return res.json();
    },
        {
            enabled: true,
        }
    );

    const [adviceData, setAdviceData] = useState(null);

    // 로컬 스토리지 데이터 가져오기
    const getAdviceData = JSON.parse(
        localStorage.getItem("adviceData")
    );

    // 초기값 설정
    useEffect(() => {
        if (getAdviceData) setAdviceData(getAdviceData);
    }, [data])

    return (
        <section className="w-1/3 max-h-96 p-8 bg-[#323A49] rounded-lg text-center relative shadow-[0_10px_20px_rgba(21,_26,_33,_0.7)]">
            {
                isLoading ?
                    <Loading /> :
                    <div>
                        <h2 className="text-[#52FFA8] text-sm font-medium -tracking-tighter">ADVICE #{adviceData.id}</h2>
                        <div className='text-white text-xl font-semibold -tracking-tighter mt-8 mb-10 break-keep'>"{adviceData.content}"</div>
                    </div>
            }
            <img className="inline-block text-center mb-8" src={dividerImg} alt="구분선 이미지" />
            <NewAdviceButton
                isFetching={isFetching}
                data={data}
                refetch={refetch}
                setAdviceData={setAdviceData}
                getAdviceData={getAdviceData}
            />
        </section>
    )
}