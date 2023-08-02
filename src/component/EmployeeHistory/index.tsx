import "./style.css"
import Company from "../Company"
import { history_companies } from '../../constants/constants'

const EmployeeHistory = () => {
    return (
        <section data-aos="fade-up" data-aos-duration="1000">
            <h2>Employment History</h2>
            <div className="list-companies">
                {
                    history_companies.map((company: any, index: number) => {
                        return (<Company key={index} {...company} />)
                    })
                }
            </div>
        </section>
    )
}

export default EmployeeHistory