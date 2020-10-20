
const URL = "http://127.0.0.1:8000/";

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