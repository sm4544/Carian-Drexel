const URL = "https://hospitalmanagementbackend.herokuapp.com/";

export const postLabApi = async (medBody) => {
    console.log(medBody);
    const res = await fetch(URL + 'LabReports/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: medBody,
    });
    return await res.json();   
};

export const getAllLabTests = async () => {
    const res = await fetch(URL + 'LabReports/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  };

export const getMyLabTests = async (medBody) => {
    console.log(medBody);
    const res = await fetch(URL + 'LabReports/'+medBody, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    return await res.json();   
};
  

 