const URL = "https://hospitalmanagementbackend.herokuapp.com/";

export const postAdminLabApi = async (Body) => {
    console.log(Body);
    const res = await fetch(URL + 'Lab/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: Body,
    });
    return await res.json();   
};

export const editAdminLabApi = async (Body) => {
   
    const res = await fetch(URL + 'Lab/', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: Body,
    });
    return await res.json();   
};


export const LabApi = async () => {
    const res2 = await fetch(URL + 'Lab/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

    });
 
    return await res2.json();
}


