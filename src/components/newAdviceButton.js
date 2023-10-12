import diceIcon from '../images/icon-dice.svg'

export default function NewAdviceButton({handleClickBtn}) {

    return(
        <div onClick={handleClickBtn} className='bg-[#52FFA8] w-14 h-14 rounded-full flex items-center justify-center absolute left-2/4 -translate-x-2/4 cursor-pointer'>
            <img src={diceIcon}/>
        </div>
    )
};