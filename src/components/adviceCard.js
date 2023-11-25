import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import NewAdviceButton from "./newAdviceButton";
import dividerImg from "../images/pattern-divider-desktop.svg";
import CardContents from "./cardContents";
import Loading from "./loading";

export default function AdviceCard() {
    // API 주소
    const ADVICE_API = "https://api.adviceslip.com/advice";

    // react query 데이터 불러오기
    const { isFetching, data, refetch } = useQuery('adviceData', async () => {
        try{
            const res = await fetch(ADVICE_API);
            return res.json();

        } catch(error) {
            alert(`${error} 문제가 발생했습니다. 다시 시도해주세요.`)
        }
    },
        {
            enabled: true,
            refetchOnWindowFocus: false
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
        <section className="w-1/3 max-h-96 p-8 bg-[#323A49] rounded-lg text-center relative shadow-blue-gray">
            {isFetching ? <Loading /> : <CardContents adviceData={adviceData} />}
            <img className="inline-block text-center mb-8" src={dividerImg} alt="구분선 이미지" />
            <NewAdviceButton
                data={data}
                refetch={refetch}
                isFetching={isFetching}
                setAdviceData={setAdviceData}
                getAdviceData={getAdviceData}
            />
        </section>
    )
}