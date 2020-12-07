const URL = "https://hospitalmanagementbackend.herokuapp.com/";


export const postAdminHospitalApi = async (Body) => {
    console.log(Body);
    const res = await fetch(URL + 'hospitals/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: Body,
    });
    return await res.json();   
};

export const editAdminHospitalApi = async (Body) => {
   
    const res = await fetch(URL + 'hospitals/', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: Body,
    });
    return await res.json();   
};

export const HospitalApi = async () => {
    console.log("callinghospitals");
    const res2 = await fetch(URL + 'hospitals/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

    });

    console.log("hospitalsreturn")
 
    return await res2.json();
}

