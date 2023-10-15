import diceIcon from '../images/icon-dice.svg'

export default function NewAdviceButton({ refetch, setAdviceData, getAdviceData, data }) {

    // 클릭 이벤트
    const handleClickBtn = () => {
        refetch();

        // 로컬 스토리지에 데이터 저장
        if (data) {
            localStorage.setItem("adviceData", JSON.stringify({
                id: data.slip.id,
                content: data.slip.advice
            }));
        }

        // 상태에 저장
        if (getAdviceData) setAdviceData(getAdviceData);
    };

    return (
        <div onClick={handleClickBtn} className='bg-[#52FFA8] w-14 h-14 rounded-full flex items-center justify-center absolute left-2/4 -translate-x-2/4 cursor-pointer transition-all hover:shadow-[rgba(82,_255,_168,_0.6)_0px_0px_16px]'>
            <img src={diceIcon} alt='주사위 이미지' />
        </div>
    )
};