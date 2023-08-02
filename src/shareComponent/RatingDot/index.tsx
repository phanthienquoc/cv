import "./style.css"

interface IRatingDotProps {
    value: number
    range: number
}

const RatingDot = ({ value, range = 5 }: IRatingDotProps) => {
    return (
        <ul className='rating-dot-container'>
            {Array(range).fill("").map((_: string, index: number) => (
                <ol key={index} className={`rating-dot ${value > index ? "active" : ""}`} />
            ))}
        </ul>
    )
}

export default RatingDot;