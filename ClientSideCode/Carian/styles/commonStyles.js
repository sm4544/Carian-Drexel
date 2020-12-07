import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: 'center'
  },
  AppTitle: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#D35400",
    fontStyle: "italic",
    paddingBottom: 30,
    paddingTop: 30,
  },
  inputView: {
    width: "80%",
    backgroundColor: "steelblue",
    borderRadius: 18,
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    padding: 5,
    borderColor: "white",
    //borderWidth: 2,
  },

  inputViewPatients: {
    width: "80%",
    backgroundColor: "steelblue",
    borderRadius: 18,
    height: 50,
    marginBottom: 15,
    justifyContent: "center",
    padding: 5,
    borderColor: "white",
    //borderWidth: 2,
  },
  input: {
    height: 100,
    color: "white",
    fontSize: 20,
  },
  hyperlink: {
    color: "black",
    fontSize: 25,
    textDecorationLine: "underline",
  },
  button: {
    width: "80%",
    backgroundColor: "#CD6155",
    borderRadius: 18,
    borderColor: "white",
    borderWidth: 2,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 25
  },
  image: {
    width: 250,
    height: 300,
    borderRadius: 20
  },
  dropdownstyle: {
    width: "80%",
    backgroundColor: "steelblue",
    borderRadius: 18,
    height: 50,
    marginTop: 20,
    //justifyContent: "center",
    //padding: 5,
    borderColor: "white",

  },
  ConfirmationText: {
    fontSize: 25,
    color: 'teal',
    fontStyle: 'italic',
    paddingBottom: 15,
    paddingTop: 15,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'

  },
  errormessages: {
    width: '75%',
    color: 'red',
    textAlign: 'left',
    alignItems: 'flex-start',
    fontSize: 15

  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#CD6155',
    fontStyle: 'italic',
    paddingBottom: 10,
    paddingTop: 10,
    width: '80%'
  },

  labelText: {
    
    fontSize: 15,
    color: '#CD6155',    
    paddingBottom: 3,
    paddingTop: 3,
    width: '80%'
  },
  textCal: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#D35400',
    fontStyle: 'italic',

    paddingTop: 10,
  },
  buttonCal: {
    width: '100%',
    fontWeight: 'bold',
    backgroundColor: '#307ecc',
    borderRadius: 18,
    borderColor: 'black',
    borderWidth: 2,

    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
    // paddingLeft: 10,
    paddingHorizontal: 15,
  },
});
