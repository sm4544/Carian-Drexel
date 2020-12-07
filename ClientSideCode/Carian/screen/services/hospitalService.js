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
export const getAllHospitalsInfo = async () => {
  const res = await fetch(URL + 'hospital-details', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Apolo',
    }),
  });

  return await res.json();
};
