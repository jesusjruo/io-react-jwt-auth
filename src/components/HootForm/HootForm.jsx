import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { show } from '../../services/hootService';

const HootForm = (props) => {
    const { hootId } = useParams();

    const [formData , setFormData] = useState({
        title: "",
        text: "",
        category: "News"
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(hootId) {
            props.handleUpdateHoot(hootId , formData)
        } else {
            props.handleAddHoot(formData);
        }
    }

    useEffect(() => {
        const fetchHoot = async () => {
            const hootData = await show(hootId)
            console.log(hootData);
            setFormData(hootData);
        }
        if(hootId) fetchHoot();
    } , [hootId])

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <h1>{hootId ? 'Edit Hoot' : 'New Hoot'}</h1>
                <label htmlFor="title">Title: </label>
                <input
                    required
                    type="text"
                    name="title"
                    id="title-input"
                    value={formData.title}
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="text">Text: </label>
                <input
                    required
                    type="text"
                    name="text"
                    id="text-input"
                    value={formData.text}
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="category">Category: </label>
                <select
                    required
                    name="category"
                    id="category-input"
                    value={formData.category}
                    onChange={handleChange}
                >
                <option value="News">News</option>
                <option value="Games">Games</option>
                <option value="Movies">Movies</option>
                <option value="Sports">Sports</option>
                <option value="Television">Television</option>
                </select>
                <br/><br/>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default HootForm