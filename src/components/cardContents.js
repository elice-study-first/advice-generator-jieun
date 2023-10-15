export default function CardContents({ adviceData }) {
    return (
        <div>
            <h2 className="text-[#52FFA8] text-sm font-medium -tracking-tighter">ADVICE #{adviceData.id}</h2>
            <div className='text-white text-xl font-semibold -tracking-tighter mt-8 mb-10 break-keep'>"{adviceData.content}"</div>
        </div>
    )
}