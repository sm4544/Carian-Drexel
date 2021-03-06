const URL = "https://hospitalmanagementbackend.herokuapp.com/";

export const getAppointmentDetails = async (body) => {
    console.log();
    const res = await fetch(URL + 'appointment-doctor', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body
    });
    return await res.json();   
};
export const postDoctorSchedule = async (body) => {
    console.log(body);
    const res = await fetch(URL + 'DoctorWorkingHours/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
       body:body,
    });
    return await res.json();   
};
