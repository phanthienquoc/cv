import "./style.css";

import WorkingProject from "../WorkingProject";
import { ICompany } from '../../types/index';
import { formatDateRange } from "../../utils";

const Company = ({ company_name, location, from, to, projects }: ICompany) => {
    return (
        <article className="company-history">
            <div className="company-history__label">
                <div className="company-history__label-name">
                    <h3>{company_name}</h3>
                </div>
                <div className="company-history__label-date-range">
                    <div>{formatDateRange({ from, to })}</div>
                    <div>{location}</div>
                </div>
            </div>
            <div className="company-history__working-project">
                <div className="working-project__left" />
                <div className="working-project__right">
                    {
                        projects.map((project: any, index: number) =>
                            <WorkingProject key={index} {...project} />
                        )
                    }
                </div>
            </div>

        </article>
    )
}

export default Company;