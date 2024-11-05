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
        category: "hosted"
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
            props.handleUpdateHoot(projectId , formData)
        } else {
            props.handleAddHoot(formData);
        }
    }

    useEffect(() => {
        const fetchHoot = async () => {
            const hootData = await show(projectId)
            console.log(hootData);
            setFormData(hootData);
        }
        if(projectId) fetchHoot();
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
                    value={formData.title}
                    onChange={handleChange}
                />
                <label htmlFor="text">Description: </label>
                <input
                    required
                    type="text"
                    name="description"
                    id="description-input"
                    value={formData.text}
                    onChange={handleChange}
                />
                <label htmlFor="text">Hosting Link: </label>
                <input
                    required
                    type="text"
                    name="hostingLink"
                    id="hostingLink-input"
                    value={formData.text}
                    onChange={handleChange}
                />
                <label htmlFor="text">Repository Link: </label>
                <input
                    required
                    type="text"
                    name="repoLink"
                    id="repoLink-input"
                    value={formData.text}
                    onChange={handleChange}
                />
                <label htmlFor="category">Status: </label>
                <select
                    required
                    name="status"
                    id="status-input"
                    value={formData.category}
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