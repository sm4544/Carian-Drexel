const URL = "https://hospitalmanagementbackend.herokuapp.com/";


export const postDepartmentInfoApi = async (departmentInfoBody) => {
    console.log(departmentInfoBody);
    const res = await fetch(URL +'Department/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: departmentInfoBody,
    });
    return await res.json();   
};