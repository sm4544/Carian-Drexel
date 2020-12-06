import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: 'center'

  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: "#F0F0E1",
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: 'center'

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
    width: "60%",
    backgroundColor: "#CD6155",
    borderRadius: 18,
    borderColor: "white",
    borderWidth: 2,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 20
  },
  image: {
    width: 250,
    height: 300,
    borderRadius: 20
  },
  dropdownstyle: {
    backgroundColor: '#307ecc',
    width: "80%",
    borderRadius: 18,

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
    fontSize: 20,
    color: '#CD6155',
    fontStyle: 'italic',
    paddingBottom: 10,
    paddingTop: 10,
    width: '80%'
  },

  sectionText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#CD6155',
    fontStyle: 'italic',
    paddingBottom: 10,
    paddingTop: 10,
    width: '95%'
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
    paddingHorizontal: 15,
  },
  cardContainer: {
    width: '90%',
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: 'center'
  },
  setFlexRow: { flex: 1, flexDirection: 'row' },
  setFlexRowWithWrap: { flex: 1, flexWrap: 'wrap', flexDirection: 'row' },
  positionImage: { width: '30%', alignItems: "center", justifyContent: 'center', alignSelf: 'center' },
  specialityCardHeightAndBorder:{ height: "80", borderRadius: 18 },
  hospitalCardTouch:{ width: '100%', flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: 'center' },
  card: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    flex: 1,
    margin: 10,
    height: 130,
  },
  hospitalCard: {
    backgroundColor: 'white',
    alignSelf: 'center',
    flex: 1,
    margin: 10,
    height: 'auto',
    width: '100%',
  },
  cardText: {
    textAlign: 'left',
    margin: 3,
    fontSize: 15,
    fontWeight: 'bold'
  },
  cardSubBoldText: {
    textAlign: 'left',
    margin: 3,
    fontSize: 13,
    fontWeight: 'bold'
  },
  cardSubItalicText: {
    textAlign: 'left',
    margin: 3,
    fontSize: 13,
    fontStyle: 'italic'
  },
  imageRightPosition: { width: '70%', justifyContent: 'center', alignSelf: 'center' },
  image: {
    flex: 1,
    width: 180,
    justifyContent: "flex-end",

  },
  hospitalImage: {
    width: 100,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center'

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
  profileHeaderPicCircle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  },
  profileHeaderText: {
    color: 'black',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  itemStyle: {
    justifyContent: 'flex-start',
    width: "80%"
  },
  dropDownDataStyle: { backgroundColor: '#fafafa', width: "80%" },


});