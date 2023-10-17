import BeatLoader from "react-spinners/BeatLoader"

export default function Loading() {
    return (
        <>
            <h2 className="text-[#52FFA8] text-sm font-bold -tracking-tighter">LOADING...</h2>
            <BeatLoader
                color="#52FFA8"
                size={12}
                speedMultiplier={2}
                margin={5}
                className="mt-9 mb-12"
            />
        </>
    )
};