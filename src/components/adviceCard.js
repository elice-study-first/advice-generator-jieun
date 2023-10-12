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
    })

    // 클릭 이벤트
    const handleClickBtn = () => {
        refetch();
    }

    return (
        <section className="w-1/3 max-h-96 min-h-60 p-8 bg-[#323A49] rounded-lg text-center relative shadow-[0_10px_20px_rgba(21,_26,_33,_0.7)]">
            {
                isLoading ? <div className="text-white text-lg font-semibold -tracking-tighter my-8 break-keep">LOADING...</div> :
                    <>
                        <h2 className="text-[#52FFA8] text-sm font-medium -tracking-tighter">ADVICE #{data.slip.id}</h2>
                        <div className='text-white text-xl font-semibold -tracking-tighter my-8 break-keep'>"{data.slip.advice}"</div>
                    </>
            }
            <img className="inline-block text-center mb-8" src={dividerImg} />
            <NewAdviceButton handleClickBtn={handleClickBtn} />
        </section>
    )
}