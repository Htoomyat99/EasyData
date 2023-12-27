import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    flex: 1,
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    marginTop: hp(20),
    borderRadius: wp(3),
    padding: wp(6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerText: {
    textAlign: 'center',
    marginBottom: hp(3),
    marginTop: hp(1),
    fontWeight: 'bold',
    fontSize: hp(2.2),
    color: 'teal',
  },
  monthContainer: {
    width: wp(70),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  monthText: {
    fontSize: hp(2.2),
    fontWeight: 'bold',
    color: 'teal',
  },
  typeContainer: {
    width: wp(70),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(3),
  },
  typeText: {
    fontSize: hp(2.2),
    fontWeight: 'bold',
    color: 'teal',
  },
  valueContainer: {
    width: wp(70),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(3),
  },
  valueText: {
    fontSize: hp(2.2),
    fontWeight: 'bold',
    color: 'teal',
  },
  textInput: {
    backgroundColor: 'white',
    paddingHorizontal: wp(4),
    paddingVertical: wp(0.3),
    borderRadius: wp(1),
    borderWidth: wp(0.3),
    borderColor: 'teal',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(6),
  },
  cancelContent: {
    backgroundColor: '#960019',
    width: wp(30),
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingVertical: wp(2),
    borderRadius: wp(1),
  },
  addContent: {
    backgroundColor: 'teal',
    width: wp(30),
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingVertical: wp(2),
    borderRadius: wp(1),
  },
});
