const URL = "https://hospitalmanagementbackend.herokuapp.com/";

export const postAdminPharmacyApi = async (Body) => {
    console.log(Body);
    const res = await fetch(URL + 'Pharmacy/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: Body,
    });
    return await res.json();   
};

export const editAdminPharmacyApi = async (Body) => {
    
    const res = await fetch(URL + 'Pharmacy/', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: Body,
    });
    return await res.json();   
};

export const PharmacyApi = async () => {
    const res2 = await fetch(URL + 'Pharmacy/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

    });
 
    return await res2.json();
}

