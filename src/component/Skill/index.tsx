import { skils } from "../../constants/constants"

const Skill = () => {
    return (
        <section className="mobile-skill">
            <h2>
                Knowledge
            </h2>
            <ul>
                {skils.map((item, index) =>
                    <li key={index}>{item}</li>)}
            </ul>
        </section>
    )
}

export default Skill