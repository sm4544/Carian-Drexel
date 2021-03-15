const URL = "https://hospitalmanagementbackend.herokuapp.com/";

export const postAdminStaffApi = async (Body) => {
    console.log(Body);
    const res = await fetch(URL + 'Staff/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: Body,
    });
    return await res.json();   
};

export const editAdminStaffApi = async (Body) => {
    
    const res = await fetch(URL + 'Staff/', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: Body,
    });
    return await res.json();   
};

export const deleteAdminStaffApi = async (Body) => {
    
    const res = await fetch(URL + 'Staff/', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: Body,
    });
    return await res.json();   
};

export const StaffApi = async () => {
    const res2 = await fetch(URL + 'doctors-simple', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

    });
 
    return await res2.json();
}