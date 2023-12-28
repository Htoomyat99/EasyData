import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BarChart} from 'react-native-gifted-charts';
import DropDownBtn from '../components/DropDownBtn';
import DataAddModal from '../modals/DataAddModal';
import FilterIcon from '../../assets/icons/FilterIcon';
import AddIcon from '../../assets/icons/AddIcon';

const HomeScreen = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [monthValue, setMonthValue] = useState(null);
  const [monthOpen, setMonthOpen] = useState(false);
  const [typeValue, setTypeValue] = useState(null);
  const [typeOpen, setTypeOpen] = useState(false);
  const [userInputValue, setUserInputValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [textInputvalue, setTextInputValue] = useState('');
  const [emptyArr, setEmptyArr] = useState([]);

  // const barData = [
  //   {
  //     label: 'Jan',
  //     value: 10,
  //     frontColor: '#4ABFF4',
  //     spacing: wp(1),
  //   },
  //   {value: 20, frontColor: '#4abff4', spacing: wp(1)},
  //   {value: 20, frontColor: '#4abff4', spacing: wp(1)},
  //   {value: 20, frontColor: '#4abff4'},

  //   {
  //     value: 20,
  //     label: 'Feb',
  //     frontColor: '#79C3DB',
  //     spacing: wp(1),
  //   },
  //   {value: 30, frontColor: '#79C3DB', spacing: wp(1)},
  //   {value: 30, frontColor: '#79C3DB', spacing: wp(1)},
  //   {value: 30, frontColor: '#79C3DB'},

  //   {
  //     value: 30,
  //     label: 'Mar',
  //     frontColor: '#28B2B3',
  //     spacing: wp(1),
  //   },
  //   {value: 40, frontColor: '#28B2B3', spacing: wp(1)},
  //   {value: 40, frontColor: '#28B2B3', spacing: wp(1)},
  //   {value: 40, frontColor: '#28B2B3'},

  //   {
  //     value: 40,
  //     label: 'Apr',
  //     frontColor: '#4ADDBA',
  //     spacing: wp(1),
  //   },
  //   {value: 50, frontColor: '#4ADDBA', spacing: wp(1)},
  //   {value: 50, frontColor: '#4ADDBA', spacing: wp(1)},
  //   {value: 50, frontColor: '#4ADDBA'},

  //   {
  //     value: 50,
  //     label: 'May',
  //     frontColor: '#4ABFF4',
  //     spacing: wp(1),
  //   },
  //   {value: 60, frontColor: '#4ABFF4', spacing: wp(1)},
  //   {value: 60, frontColor: '#4ABFF4', spacing: wp(1)},
  //   {value: 60, frontColor: '#4ABFF4'},

  //   {
  //     value: 60,
  //     label: 'June',
  //     frontColor: '#79C3DB',
  //     spacing: wp(1),
  //   },
  //   {value: 70, frontColor: '#79C3DB', spacing: wp(1)},
  //   {value: 70, frontColor: '#79C3DB', spacing: wp(1)},
  //   {value: 70, frontColor: '#79C3DB'},

  //   {value: 70, label: 'July', frontColor: '#28B2B3', spacing: wp(1)},
  //   {value: 80, frontColor: '#28B2B3', spacing: wp(1)},
  //   {value: 80, frontColor: '#28B2B3', spacing: wp(1)},
  //   {value: 80, frontColor: '#28B2B3'},

  //   {value: 80, label: 'Aug', frontColor: '#4ADDBA', spacing: wp(1)},
  //   {value: 90, frontColor: '#4ADDBA', spacing: wp(1)},
  //   {value: 90, frontColor: '#4ADDBA', spacing: wp(1)},
  //   {value: 90, frontColor: '#4ADDBA'},

  //   {value: 30, label: 'Sep', frontColor: '#4ABFF4', spacing: wp(1)},
  //   {value: 40, frontColor: '#4ABFF4', spacing: wp(1)},
  //   {value: 40, frontColor: '#4ABFF4', spacing: wp(1)},
  //   {value: 40, frontColor: '#4ABFF4'},

  //   {value: 40, label: 'Oct', frontColor: '#79C3DB', spacing: wp(1)},
  //   {value: 50, frontColor: '#79C3DB', spacing: wp(1)},
  //   {value: 50, frontColor: '#79C3DB', spacing: wp(1)},
  //   {value: 50, frontColor: '#79C3DB'},

  //   {value: 50, label: 'Nov', frontColor: '#28B2B3', spacing: wp(1)},
  //   {value: 60, frontColor: '#28B2B3', spacing: wp(1)},
  //   {value: 60, frontColor: '#28B2B3', spacing: wp(1)},
  //   {value: 60, frontColor: '#28B2B3'},

  //   {value: 60, label: 'Dec', frontColor: '#4ADDBA', spacing: wp(1)},
  //   {value: 70, frontColor: '#4ADDBA', spacing: wp(1)},
  //   {value: 70, frontColor: '#4ADDBA', spacing: wp(1)},
  //   {value: 70, frontColor: '#4ADDBA'},
  // ];

  const barData = [
    {label: 'Type 1', value: 10},
    {label: 'Type 1', value: 10},
    {label: 'Type 1', value: 10},
    {label: 'Type 1', value: 10},
    {label: 'Type 1', value: 10},
    {label: 'Type 1', value: 10},
  ];

  const [monthList, setMonthList] = useState([
    {label: 'All', value: 'All'},
    {label: 'Jan', value: 'Jan'},
    {label: 'Feb', value: 'Feb'},
    {label: 'Mar', value: 'Mar'},
    {label: 'Apr', value: 'Apr'},
    {label: 'May', value: 'May'},
    {label: 'June', value: 'June'},
    {label: 'July', value: 'July'},
    {label: 'Aug', value: 'Aug'},
    {label: 'Sep', value: 'Sep'},
    {label: 'Oct', value: 'Oct'},
    {label: 'Nov', value: 'Nov'},
    {label: 'Dec', value: 'Dec'},
  ]);

  const [typeItem, setTypeItem] = useState([
    {label: 'All', value: 'all'},
    {label: 'Type 1', value: 'type1'},
    {label: 'Type 2', value: 'type2'},
    {label: 'Type 3', value: 'type3'},
    {label: 'Type 4', value: 'type4'},
  ]);

  const openAddModal = () => {
    setIsAdd(!isAdd);
    setIsFilter(false);
  };

  const filterHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const addDataHandler = () => {
    if (!textInputvalue) {
      Alert.alert('Please fill the vaild input value');
    } else {
      setIsAdd(false);
      console.log('type >>>', typeValue);
      console.log('value >>>', textInputvalue);
      console.log('month >>>', monthValue);
      emptyArr.push(typeValue);
      console.log('emt >>', emptyArr);
    }
  };

  const cancelHandler = () => {
    console.log('cancel Data');
    setIsAdd(false);
  };

  return (
    <SafeAreaView style={style.mainContainer}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

      <View style={style.container}>
        <Text style={style.headerText}>Excel Data</Text>

        <View style={style.headerContent}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={openAddModal}
            style={{
              paddingHorizontal: wp(2),
              paddingVertical: wp(0.5),
            }}>
            <AddIcon width={wp(7)} height={wp(7)} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            disabled={isAdd}
            onPress={() => setIsFilter(!isFilter)}
            style={{
              paddingHorizontal: wp(2),
              paddingVertical: wp(1),
              marginLeft: wp(2),
            }}>
            <FilterIcon width={wp(6)} height={wp(6)} />
          </TouchableOpacity>
        </View>

        {isFilter ? (
          <View style={style.filterContainer}>
            <DropDownBtn
              placeholder="Month"
              items={monthList}
              value={monthValue}
              setValue={setMonthValue}
              open={monthOpen}
              setOpen={() => setMonthOpen(!monthOpen)}
              width={wp(22)}
            />

            <DropDownBtn
              placeholder="Type"
              items={typeItem}
              value={typeValue}
              setValue={setTypeValue}
              open={typeOpen}
              setOpen={() => setTypeOpen(!typeOpen)}
              width={wp(24)}
            />

            {/* <TextInput
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: wp(4),
                  paddingVertical: wp(0.3),
                  borderRadius: wp(1),
                  borderWidth: wp(0.3),
                  borderColor: 'teal',
                }}
                selectionColor={'#fff'}
                keyboardType="number-pad"
                placeholder="Value"
                value={textInputvalue}
                onChangeText={(value: any) =>
                  setTextInputValue(value.replace(/[^0-9]/g, ''))
                }
              /> */}

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={filterHandler}
              disabled={!typeValue && !monthValue ? true : false}
              style={[
                style.resultContainer,
                {backgroundColor: typeValue && monthValue ? 'teal' : '#d9d9d9'},
              ]}>
              <Text style={style.resultText}>Result</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {/* 
        <View style={{width: wp(92), marginTop: hp(3)}}>
          <BarChart
            showValuesAsTopLabel
            showFractionalValues
            showYAxisIndices
            height={hp(50)}
            stepValue={10}
            noOfSections={10}
            maxValue={100}
            data={barData}
            isAnimated
            animationDuration={1500}
            spacing={wp(7)}
            onPress={item => console.log(item)}
            barWidth={wp(6)}
            xAxisLabelTextStyle={{textAlign: 'center'}}
            labelWidth={100}
          />
        </View> */}
      </View>

      {/* <BottomSheet
          style={{alignItems: 'center'}}
          backgroundStyle={{backgroundColor: '#fff'}}
          containerHeight={hp(100)}
          ref={bottomSheetRef}
          index={-1}
          enablePanDownToClose={true}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View><Text>AweSome</Text></View>
        </BottomSheet> */}

      {isAdd && (
        <DataAddModal
          addOnPress={addDataHandler}
          cancelPress={cancelHandler}
          monthList={monthList}
          monthValue={monthValue}
          setMonthValue={setMonthValue}
          monthOpen={monthOpen}
          setOpen={() => setMonthOpen(!monthOpen)}
          typeItem={typeItem}
          typeValue={typeValue}
          setTypeValue={setTypeValue}
          typeOpen={typeOpen}
          setTypeOpen={() => setTypeOpen(!typeOpen)}
          textInputvalue={textInputvalue}
          onChangeText={value =>
            setTextInputValue(value.replace(/[^0-9]/g, ''))
          }
        />
      )}

      {isLoading && <ActivityIndicator size={wp(10)} color={'teal'} />}
    </SafeAreaView>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: hp(100),
  },
  container: {
    backgroundColor: '#fff',
    width: wp(92),
    alignItems: 'center',
  },
  headerText: {
    fontSize: hp(2.2),
    marginTop: hp(3),
  },
  headerContent: {
    width: wp(92),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: hp(1),
  },
  addText: {
    paddingVertical: wp(1),
    paddingHorizontal: wp(3),
    fontSize: hp(1.9),
    color: '#fff',
    backgroundColor: 'teal',
    borderRadius: wp(1),
  },
  filterText: {
    paddingVertical: wp(1),
    paddingHorizontal: wp(5),
    fontSize: hp(1.9),
    color: 'teal',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp(92),
    marginTop: hp(1.5),
  },
  resultContainer: {
    paddingHorizontal: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
  },
  resultText: {
    color: 'white',
    fontSize: hp(1.8),
  },
});
