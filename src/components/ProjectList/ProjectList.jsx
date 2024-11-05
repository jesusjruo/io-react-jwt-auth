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
                                    {/* <p>
                                        {hoot.author.username} posted on {new Date(hoot.createdAt).toLocaleDateString()}
                                    </p> */}
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


//1. Add a link to this hoot
//2. going to show the title and username and date created
//3. goign to show the hoot text

