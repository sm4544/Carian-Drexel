const URL = 'https://hospitalmanagementbackend.herokuapp.com/';

export const getAllHospitals = async () => {
  //console.log(staffProfileBody);
  const res = await fetch(URL + 'hospitals-all', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};
export const getAllHospitalsInfo = async (body) => {
  const res = await fetch(URL + 'hospital-summary', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: body,
  });

  return await res.json();
};

export const getAvailableSlots = async(body) => {
  const res = await fetch(URL + 'appointments-all', {
    method:'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: body,
  });
  return await res.json();
};

export const getDoctorDetails = async(body) => {
  const res = await fetch(URL + 'doctor-summary', {
    method:'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: body,
  });
  return await res.json();
};

export const getHospitals = async() => {
  const res = await fetch(URL + 'hospitals-simple', {
    method:'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    
  });
  return await res.json();
};

export const getDoctors = async() => {
  const res = await fetch(URL + 'doctors-simple', {
    method:'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    
  });
  return await res.json();
};
