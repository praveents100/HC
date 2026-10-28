import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../Components/customButton'
import CustomView from '../Components/customView';

const Home = () => {

  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [count, setCount] = useState(25);
  const [selectedNumber, setSelectedNumber] = useState(3);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    if (count === 0){
      rollDice();
      return;
    } 

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(randomNumber);
  };
  function buttonClicked(num: number) {
    setSelectedButton(num);
    setSelectedNumber(num)
    // Alert.alert(`${num} Pressed`);
  }

  function StartClicked(num: number) {
    setSelectedButton(num);
    setCount(3);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: '100%', height: '30%', backgroundColor: 'lightblue' }}></View>
      <View style={{ width: '100%', height: '30%', backgroundColor: 'green', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <CustomView
          title={selectedNumber > 0 ? selectedNumber.toString() : '0'}
          backgroundColor="lightgray"
          height={100}
          width={100}
          radius={10}
          margin={25}
          padding={25}
          fontSize={35}
        />
        <CustomView
          title={randomNumber > 0 ? randomNumber.toString() : '0'}
          backgroundColor="lightgray"
          height={100}
          width={100}
          radius={10}
          margin={25}
          padding={25}
          fontSize={35}
        />
      </View>
      <View style={{ width: '100%', height: '15%', backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

        <CustomView
          //title="1"
          title={count > 0 ? count.toString() : '0'}
          backgroundColor="lightgray"
          height={100}
          width={100}
          radius={50}
          margin={25}
          padding={25}
          fontSize={35}
        />
        <CustomButton
          title="Start"
          onPress={() => StartClicked(7)}
          colorButton={selectedButton === 7 ? 'green' : 'white'}
          height={50}
          width={100}
          fontSize={20}
          margin={10}
          padding={10} />

      </View>
      <View style={{ width: '100%', height: '25%', backgroundColor: 'orange' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <CustomButton
            title="1"
            onPress={() => buttonClicked(1)}
            colorButton={selectedButton === 1 ? 'yellow' : 'white'}
            width={100}
            height={50}
            margin={10}
            padding={10}
          />
          <CustomButton
            title="2"
            onPress={() => buttonClicked(2)}
            colorButton={selectedButton === 2 ? 'yellow' : 'white'}
            width={100}
            height={50}
            margin={10}
            padding={10}
          />
          <CustomButton
            title="3"
            onPress={() => buttonClicked(3)}
            colorButton={selectedButton === 3 ? 'yellow' : 'white'}
            width={100}
            height={50}
            margin={10}
            padding={10}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <CustomButton
            title="4"
            onPress={() => buttonClicked(4)}
            colorButton={selectedButton === 4 ? 'yellow' : 'white'}
            width={100}
            height={50}
            margin={10}
            padding={10}
          />
          <CustomButton
            title="5"
            onPress={() => buttonClicked(5)}
            colorButton={selectedButton === 5 ? 'yellow' : 'white'}
            width={100}
            height={50}
            margin={10}
            padding={10}
          />
          <CustomButton
            title="6"
            onPress={() => buttonClicked(6)}
            colorButton={selectedButton === 6 ? 'yellow' : 'white'}
            width={100}
            height={50}
            margin={10}
            padding={10}
          />
        </View>
      </View>
    </View >
  )
}

export default Home