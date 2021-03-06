import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: 'center'
  },
  space: {
    width: 20, 
    height: 20,
  },
  containerMultiSelecet: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  head: { height: 40, backgroundColor: '#f1f8ff', borderWidth: 2 },
  text: { margin: 1 ,fontWeight: 'bold',fontSize:1},

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
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
    marginTop: 5,
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

  label: {
    alignSelf:'flex-start',
    marginLeft:45,
    color: "blue",
    fontSize: 20,
  },
  profileImage: {
    //flex: 1,    
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center'
    //justifyContent: "flex-end",

  },
  hyperlink: {
    color: "black",
    fontSize: 15,
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
    color: 'blue',
    fontStyle: 'italic',
    paddingBottom: 10,
    paddingTop: 10,
    width: '80%',
    textAlign:'center'
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

  buttonADD: {
    width: "100%",
    backgroundColor: "#307ecc",
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
    
  },
  cardText:{
    fontWeight: "bold",
    fontSize: 15,
    color: "darkblue",
    fontStyle: "italic",
    paddingBottom: 30,
    paddingTop: 30,
  },
  cardFont:{
    fontWeight: "bold",
    fontSize: 10,
    color: "#D35400",
    fontStyle: "italic",
    paddingBottom: 30,
    paddingTop: 30,

  },
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
    color: '#4682b4', 
    fontSize: 40, 
    fontStyle: 'italic', 
    fontWeight: 'bold', 
    lineHeight: 40,    
    textShadowColor: '#0000cd', 
    fontFamily: 'sans-serif', 
    textShadowRadius: 15, 
    textShadowOffset: {width: 4, height: 4}, 
    textTransform: 'uppercase',
 
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
    color: '#00bfff', 
  },    
  departmentPositionVisble:{
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80
  },  
  space:{
    width:20,
    height:20
  }  ,

  headOrder: { height: 40, backgroundColor: '#808B97' },
  textOrder: { margin: 6,fontSize:20 },
  rowOrder: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 78, height: 32, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }      

});
