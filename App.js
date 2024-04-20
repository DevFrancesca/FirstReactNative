import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MainContainer, Wrapper } from './components/MainContainer';
import MyButton from './components/MyButton';
import MyTypography from './components/MyTypography';
// import Typography from './components/Typography';
import { AntDesign } from '@expo/vector-icons';
import { Component } from 'react';

export default function App() {
  return (
    <MainContainer>
      <Wrapper sx={{backgroundColor: "white"}}>
        <View style={styles.butt}>
          <AntDesign 
            name='arrowleft'
          />
          <MyTypography type='text16' sx={{fontWeight: "bold"}}>Receipt</MyTypography>
        </View>

        <View style={styles.heading}>
          <View>
            <MyTypography type="text20" sx={{fontWeight: "bold", color: "blue"}}>Lisa's Weekly Suply Receipt</MyTypography>
            <MyTypography type='text16'>November 22, 2024</MyTypography>
          </View>
        </View>

        <View style={styles.first}>
          <View style={styles.second}>
            <View style={styles.price}>
              <MyTypography type='text16'>Shoping Service</MyTypography>
              <MyTypography type='text16' sx={{fontWeight: "bold",}}>List 1</MyTypography>
            </View>
            <View style={styles.price}>
              <MyTypography type='text16'>Service Cost</MyTypography>
              <MyTypography type='text16' sx={{fontWeight: "bold",}}>N 1000</MyTypography>
            </View>
          </View>
          <View style={styles.second}>
            <View style={styles.price3}>
              <MyTypography type='text16'>Shipping Adress</MyTypography>
              <MyTypography type='text16' sx={{fontWeight: "bold", height: 30, width: 120}}>8, Makinde Lawanson streeet, Ikeja, Lagos</MyTypography>
            </View>
          </View>
        </View>

        <View style={styles.payment}>
          <View>
            <View style={styles.price}>
                <MyTypography type='text16'>Payment Type</MyTypography>
                <MyTypography type='text16' sx={{fontWeight: "bold",}}>Weekly</MyTypography>
            </View>
            <View style={styles.price}>
                <MyTypography type='text16'>Payment Method</MyTypography>
                <MyTypography type='text16' sx={{fontWeight: "bold",}}>Debit card (5011)</MyTypography>
            </View>
          </View>
        </View>

        <View style={styles.third}>
          <View style={styles.second}>
            <View style={styles.price}>
              <MyTypography type='text16'>Plan State Date</MyTypography>
              <MyTypography type='text16' sx={{fontWeight: "bold",}}>22-1-2020</MyTypography>
            </View>
            <View style={styles.price}>
              <MyTypography type='text16'>Plan Start Time</MyTypography>
              <MyTypography type='text16' sx={{fontWeight: "bold",}}>8:45AM</MyTypography>
            </View>
            <View style={styles.price}>
              <MyTypography type='text16'>Plan State Day</MyTypography>
              <MyTypography type='text16' sx={{fontWeight: "bold",}}>2nd day of every month</MyTypography>
            </View>
            <View style={styles.price2}>
              <MyTypography type='text16'>Order Status</MyTypography>
              <MyTypography type='text16' sx={{fontWeight: "bold", color: "blue",}}>Pending</MyTypography>
            </View>
          </View>
        </View>

        <MyButton type="rounded" sx={{flexDirection: "row", justifyContent: "space-around", height: 40}}>
          <AntDesign name='arrowdown' style={{color: "blue"}}/>
          <MyTypography type="text16" sx={{color: "blue"}}>
            Download as PDF
          </MyTypography>
        </MyButton>
        
      </Wrapper>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  butt: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  heading: {
    height: 75,
    justifyContent: "center",
    borderBottomWidth: 1,
  },
  first: {
    height: 160,
  },
  second : {
    height : 80,
  },
  third : {
    height : 200,
    paddingTop: 30
  },
  price: {
    height: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  price2: {
    height: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25
  },

  price3: {
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  payment: {
    height: 90,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderStyle: "dotted",
    paddingTop: 20
  }
});
