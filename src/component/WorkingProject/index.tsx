import { IWorkingProject } from "../../types";

const WorkingProject = (props: IWorkingProject) => {
    return (
        <div className="working-project" data-aos="fade-up" data-aos-duration="1000">
            <strong className="project_name">{props?.project_name}</strong>
            <ul>
                <li>
                    <strong className="item_label">{'Description:'}</strong>
                    <span className="item_value">{props?.description}</span>
                </li>
                <li>
                    <strong className="item_label">{'Role:'}</strong>
                    <span className="item_value">{props?.role?.join(" - ")}</span>
                </li>
                <li>
                    <strong className="item_label">{'Responsibility:'}</strong>
                    <span className="item_value">{props?.responsibility?.join(" - ")}</span>
                </li>
                <li>
                    <strong className="item_label">{'Language:'}</strong>
                    <span className="item_value">{props?.program_language?.join(" - ")}</span>
                </li>
                <li>
                    <strong className="item_label">{'Framework UI:'}</strong>
                    <span className="item_value">{props?.framework_ui?.join(" - ")}</span>
                </li>
                <li>
                    <strong className="item_label">{'Development Tool:'}</strong>
                    <span className="item_value">{props?.development_tool?.join(" - ")}</span>
                </li>
            </ul>
        </div>
    )
}

export default WorkingProject