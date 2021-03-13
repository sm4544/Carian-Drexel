const URL = "https://hospitalmanagementbackend.herokuapp.com/";


export const customerDetailsApi = async (Body) => {
    const res = await fetch(URL + 'related-patients', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: Body,
    });

    return await res.json();   
};

export const appointmentDetailsApi = async () => {
    const res = await fetch(URL + 'Appointments/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
     
    });

    return await res.json();   
};

export const patientDoctorDetailsApi = async (Body) => {
    const res = await fetch(URL + 'appointment-summary', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: Body,
     
    });

    return await res.json();   
};

export const patientOrders = async () => {
    const res = await fetch(URL + 'MedicineOrder/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
     
    });

    return await res.json();   
};

export const medicineOrders = async (orderid) => {
    const res = await fetch(URL + 'MedicineOrder/' + orderid , {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
     
    });

    return await res.json();   
};

export const labOrders = async () => {
    const res = await fetch(URL + 'LabReportOrders/',  {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
     
    });

    return await res.json();   
};

export const labOrderDetails = async (orderid) => {
    const res = await fetch(URL + 'LabReportOrders/' + orderid , {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
     
    });
  
    return await res.json();   
};