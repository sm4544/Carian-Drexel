const URL = "https://hospitalmanagementbackend.herokuapp.com/";

export const postMedicineApi = async (medBody) => {
    console.log(medBody);
    const res = await fetch(URL + 'Medicine/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: medBody,
    });
    return await res.json();   
};

export const getAllMedicine = async () => {
    const res = await fetch(URL + 'Medicine/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  };

export const getMyPharmacyMedicine = async (medBody) => {
    console.log(medBody);
    const res = await fetch(URL + 'pharmacymedicine', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: medBody,
    });
    return await res.json();   
};
export const getPharmacyList = async () => {
    console.log();
    const res = await fetch(URL + 'Pharmacy/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
       
    });
    return await res.json();   
};
export const getLabList = async () => {
    console.log();
    const res = await fetch(URL + 'Lab/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
       
    });
    return await res.json();   
};
export const getLabReportsList = async () => {
    console.log();
    const res = await fetch(URL + 'LabReports/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
       
    });
    return await res.json();   
};
export const postMedicineOrder = async (body) => {
    console.log(body);
    const res = await fetch(URL + 'MedicineOrder/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
       body:body,
    });
    return await res.json();   
};

  

 