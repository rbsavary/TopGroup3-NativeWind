import {Image, View, Text, Pressable} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

type DoorScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DoorScreen'
>;

type DoorScreenRouteProp = RouteProp<RootStackParamList, 'DoorScreen'>;

type Props = {
  navigation: DoorScreenNavigationProp;
  route: DoorScreenRouteProp;
};



const DoorScreen = ({route}: Props) => {
  const navigation = useNavigation<DoorScreenNavigationProp>();
  const {door, text, image} = route.params;
  return (
    <SafeAreaView className={"bg-lightGrey"}>
      <View
        className={"min-h-screen justify-center align-middle mx-auto min-w-screen"}>
        <Text className={"text-center font-bold text-5xl"}>Door {door}</Text>
        <Text className={"text-center font-bold text-3xl"}>{text}!</Text>
        <Image 
          source={{uri: image}}
          style={{ width: 350, height: 500 }}
          />
        <Pressable onPress={() => navigation.goBack()}>
          <View className="flex-row justify-center">
            <Text className={"font-bold"}>Go back</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default DoorScreen;
