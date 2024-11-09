import { Link } from "react-router-dom";

const ProjectList = (props) => {
    return (
        <main>
            {
                props.projects.map(project => {
                    return (
                        <Link key={project._id} to={`/projects/${project._id}`}>
                            <article className="card">
                                <header>
                                    <h2>{project.name}</h2>
                                    <p>
                                        By {project.author.username}
                                    </p>
                                </header>
                                <p>{project.description}</p>
                            </article>
                        </Link>
                    )
                })
            }
        </main>
    )
}

export default ProjectList;

