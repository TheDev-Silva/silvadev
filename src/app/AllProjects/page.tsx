import { project } from "../projectId/[id]/page";
import AllProjects from "./AllProjects";

export default function AllPageProjects() {

    return (
        <AllProjects project={project} />
    )

}