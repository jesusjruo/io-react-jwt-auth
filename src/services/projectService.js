const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/projects`;


export const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        return res.json();
    } catch (err) {
        console.log(err)
    }
}

export const show = async (projectId) => {
    try{
        const res = await fetch(`${BASE_URL}/${projectId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        return res.json();
    } catch (err) {
        console.log(err)
    }
}

export const create = async (projectFormData) => {
    try{
        const res = await fetch(BASE_URL , {
            method: 'POST',
            body: JSON.stringify(projectFormData),
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
              }
        });
        return res.json();
    }catch(error){
        console.log(error);
    }
}

  export const deleteProject = async (projectId) => {
    try {
      const res = await fetch(`${BASE_URL}/${projectId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        }
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  export const update = async (projectId , projectFormData) => {
    try {
      const res = await fetch(`${BASE_URL}/${projectId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };