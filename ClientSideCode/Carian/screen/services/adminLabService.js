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

export const deleteAdminLabApi = async (Body) => {
   
    const res = await fetch(URL + 'Lab/', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: Body,
    });
    return await res.json();   
};


export const workingHoursLabApi = async (Body) => {
   
    const res = await fetch(URL + 'LabWorkingHours/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: Body,
    });
    return await res.json();   
};

export const workingHoursGetLabApi = async () => {
    console.log("callinghospitals");
    const res2 = await fetch(URL + 'LabWorkingHours/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
      
       

    });

    console.log("labreturn")
 
    return await res2.json();
}

export const workingHoursEditLabApi = async (Body) => {
   
    const res = await fetch(URL + 'LabWorkingHours/', {
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


