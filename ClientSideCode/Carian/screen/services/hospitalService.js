const URL = "https://hospitalmanagementbackend.herokuapp.com/";


export const getAllHospitals = async () => {
    //console.log(staffProfileBody);
    const res = await fetch(URL + 'hospitals-all', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        
    });
    return await res.json();   
};