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

export const deleteDepartmentInfoApi = async (departmentInfoBody) => {
    console.log(departmentInfoBody);
    const res = await fetch(URL +'Department/', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: departmentInfoBody,
    });
    return await res.json();   
};

export const putDepartmentInfoApi = async (departmentInfoBody) => {
    console.log(departmentInfoBody);
    const res = await fetch(URL +'Department/', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: departmentInfoBody,
    });
    return await res.json();   
};
export const getAllDepartments = async (departmentInfoBody) => {
    console.log(departmentInfoBody);
    const res = await fetch(URL +'hospitaldepartments', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: departmentInfoBody,
    });
    return await res.json();   
};

export const getDoctors = async (Body) => {
   
    const res = await fetch(URL +'doctordepartments', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: Body,
      
    });
    return await res.json();   
};