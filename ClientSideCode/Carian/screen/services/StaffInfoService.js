const URL = "https://hospitalmanagementbackend.herokuapp.com/";


export const postStaffInfoProfileApi = async (staffProfileBody) => {
    console.log(staffProfileBody);
    const res = await fetch(URL + 'Staff/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: staffProfileBody,
    });
    return await res.json();   
};