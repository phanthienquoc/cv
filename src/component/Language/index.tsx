import "./style.css"
import RatingDot from "../../shareComponent/RatingDot"


const Language = () => {
    return (
        <section>
            <h2>
                Language
            </h2>
            <div className="language__item">
                <strong className="language__item--label">
                    English
                </strong>
                <div className="language__item--rating">
                    <RatingDot value={2} range={5} />
                </div>
            </div>
        </section>
    )
}

export default Language