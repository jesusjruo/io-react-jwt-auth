import { useParams } from "react-router-dom";
import { useEffect, useState, useContext} from 'react';
import { show } from "../../services/projectService";
import { AuthedUserContext } from "../../App"
import { Link } from "react-router-dom";

const ProjectDetails = (props) => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const user = useContext(AuthedUserContext);
    console.log(user);

    useEffect(() => {
        const fetchProject = async () => {
            const projectData = await show(projectId);
            console.log('projectData', projectData);
            setProject(projectData);
        }
        fetchProject();
    }, [projectId])
    if (!project) return <main>Loading...</main>

    return (
        <main>
            <header className="details-header">
                <div className="detail-title"> 
                    <h1>{project.name}</h1>
                </div>
                <p>
                    Added by {project.author.username}
                </p>
            </header>
            <div className="content">
                <p>{project.description}</p>
                <p>
                {project.hostingLink ? (
                    <a href={project.hostingLink} target="_blank" rel="noopener noreferrer">
                        {project.hostingLink}
                    </a>
                ) : (
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        {project.repoLink}
                    </a>
                )}
            </p>
                <p>{project.status.toUpperCase()}</p>
            </div>
            <div className="content-footer">
                {  
                    project.author._id === user._id &&
                    <Link to={`/projects/${projectId}/edit`}>Edit</Link>
                }
                {
                    project.author._id === user._id &&
                    <button onClick={() => props.handleDeleteProject(projectId)}>Delete</button>
                }
            </div>
        </main>
    )
}

export default ProjectDetails;