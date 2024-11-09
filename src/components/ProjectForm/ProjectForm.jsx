import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { show } from '../../services/projectService';

const ProjectForm = (props) => {
    const { projectId } = useParams();

    const [formData , setFormData] = useState({
        name: "",
        description: "",
        hostingLink: "",
        repoLink: "",
        status: "hosted"
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(projectId) {
            props.handleUpdateProject(projectId , formData)
        } else {
            props.handleAddProject(formData);
        }
    }

    useEffect(() => {
        const fetchProject = async () => {
            const projectData = await show(projectId)
            console.log(projectData);
            setFormData(projectData);
        }
        if(projectId) fetchProject();
    } , [projectId])

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <h1>{projectId ? 'Edit Project' : 'New Project'}</h1>
                <label htmlFor="name">Name: </label>
                <input
                    required
                    type="text"
                    name="name"
                    id="name-input"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="text">Description: </label>
                <input
                    required
                    type="text"
                    name="description"
                    id="description-input"
                    value={formData.description}
                    onChange={handleChange}
                />
                <label htmlFor="text">Hosting Link: </label>
                <input
                    required
                    type="text"
                    name="hostingLink"
                    id="hostingLink-input"
                    value={formData.hostingLink}
                    onChange={handleChange}
                />
                <label htmlFor="text">Repository Link: </label>
                <input
                    required
                    type="text"
                    name="repoLink"
                    id="repoLink-input"
                    value={formData.repoLink}
                    onChange={handleChange}
                />
                <label htmlFor="status">Status: </label>
                <select
                    required
                    name="status"
                    id="status-input"
                    value={formData.status}
                    onChange={handleChange}
                >
                <option value="hosted">Hosted</option>
                <option value="finished">Finished</option>
                <option value="in progress">In Progress</option>
                <option value="outdated">Outdated</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default ProjectForm