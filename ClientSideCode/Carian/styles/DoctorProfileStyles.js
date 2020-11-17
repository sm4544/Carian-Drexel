import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  doctorCardView:{ flex: 1, alignSelf: 'center', margin: 10, backgroundColor: 'white', width: '95%' },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: "#F0F0E1",
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: 'center'

  },
  button: {
    //width: "60%",
    backgroundColor: "#F7DC6F",
    borderRadius: 10,
    flexBasis: '30%',
    borderColor: "white",
    borderWidth: 2,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 4
  },
  buttonText: {
    color: "black",
    fontSize: 15
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
    backgroundColor: "#F0F0E1",
    alignItems: "center",
    justifyContent: 'center'
  },
  setFlexRow: { flex: 1, flexDirection: 'row', marginTop: 20, marginLeft: 10, },
  addressHeader:{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic' },
  adressText:{ fontSize: 16, fontStyle: 'italic' },
  hospitalDataRow:{ flexDirection: 'row', marginTop: 1 },
  ratingText:{ fontSize: 18, fontWeight: 'bold', marginTop: 8, },
  imagesRowSetUp:{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', backgroundColor: 'white' },
  footerView:{ alignSelf: 'center', flexDirection: 'row', backgroundColor: '#307ecc', width: '100%', justifyContent: 'space-between' },
  footerSubView:{ alignSelf: 'center', justifyContent: 'center' },
  footerText:{ color: 'black', fontSize: 20 },
  payButton:{ backgroundColor: "#F7DC6F", borderRadius: 10, borderColor: "white", padding: 10, borderWidth: 2, alignItems: "center", justifyContent: "center", margin: 4 },
  payButtonText:{ color: 'black', fontSize: 25 },
  feesdisplay: { flex: 1, flexDirection: 'row', margin: 10, fontSize: 23, borderRadius: 5, backgroundColor: '#82E0AA', padding: 10, width: '95%', justifyContent: "space-between" },
  positionImage: { width: '40%', alignItems: "center", justifyContent: 'center', alignSelf: 'center' },
  card: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    flex: 1,
    margin: 10,
    height: 130,
  },
  hospitalSectionView:{ flex: 1, alignSelf: 'center', margin: 10, backgroundColor: 'white', width: '95%' },
  hospitalSectionSubView:{ alignSelf: 'center', margin: 10, width: '95%' },
  hospitalName:{ fontSize: 25, fontWeight: "bold", marginBottom: 5 },
  slotsView:{ width: '95%', marginTop: 10, flex: 1, backgroundColor: 'white', flexWrap: 'wrap', alignSelf: 'center', flexDirection: 'row' },
  slotsTouch:{ padding: 4, backgroundColor: '#AED6F1', borderColor: 'black', alignSelf: 'center', margin: 4, justifyContent: "center", borderRadius: 5, borderWidth: 2 },
  sectionTitle:{ margin: 15, fontWeight: 'bold', fontSize: 18 },
  horizontalLine:{ borderBottomColor: 'black', borderBottomWidth: 1, margin: 15 },
  calenderViewStyle:{ flex: 1, alignSelf: 'center', margin: 10, backgroundColor: 'white', width: '95%' },
  calenderStrip:{ height: 135, paddingTop: 10, paddingBottom: 10 },
  reviewsSubText:{ marginLeft: 15, fontSize: 12, marginBottom: 10 },
  hospitalCard: {
    backgroundColor: 'white',
    //alignItems: 'flex-start',
    //justifyContent: 'flex-end',
    alignSelf: 'center',
    flex: 1,
    margin: 10,
    height: 'auto',
    width: '100%'
  },
  cardText: {
    textAlign: 'left',
    margin: 3,
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardSubBoldText: {
    textAlign: 'left',
    margin: 3,
    fontSize: 15,
    fontWeight: 'bold'
  },
  cardSubItalicText: {
    textAlign: 'left',
    margin: 3,
    fontSize: 15,
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
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center'
    //justifyContent: "flex-end",

  },

  hospitalImage: {
    //flex: 1,    
    width: 120,
    height: 120,
    //borderRadius: 120/2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center'
    //justifyContent: "flex-end",

  }
});