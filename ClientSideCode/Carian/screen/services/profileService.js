const URL = "https://hospitalmanagementbackend.herokuapp.com/";

export const postLoginApi = async (loginBody) => {
    console.log(loginBody);
    const res = await fetch(URL + 'login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: loginBody,
    });
    return await res.json();   
};

export const PostProfileApi = async (body) => {
    console.log(body);
    const res2 = await fetch(URL + 'Profiles/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body,

    });
    return await res2.json();
}

export const getdependents = async (id) => {
    
    const res2 = await fetch(URL + 'Patients/' + id + '/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    return await res2.json();
}

export const createPatient = async (body) => {
    
    const res = await fetch(URL + 'Patients/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:body,
    });
    return await res.json();
}