import {View, Text, Image, SafeAreaView, Pressable} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
const pages = [
  {door: 1, text: 'You Win', image: 'https://i.imgur.com/hEeDAE8.png/'},
  {door: 2, text: 'You Lose', image: 'https://i.imgur.com/JWdMrMu.jpeg/'},
  {door: 3, text: 'Give Me A Kiss', image: 'https://i.imgur.com/eWMWeyu.jpeg/'},
]
const Home = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="justify-center bg-lightGrey md:flex-col align-middle min-h-screen min-w-screen">
      <View className="justify-center align-middle">
        <View className="flex-row justify-center">
          <Text className="font-bold text-3xl">
            Pick a door, any door...
          </Text>
        </View>
        
        <View className="flex-row p-2 justify-center max-w-screen mx-1">
          {pages.map(page => (
            <Pressable
              className={'m-2 border border-black'} 
              key={page.door}
              onPress={() =>
                navigation.navigate('DoorScreen', {
                  door: page.door,
                  text: page.text,
                  image: page.image,
                })
              }>
              <Image 
                source={{
                uri: 'https://i.imgur.com/qUESSIF.jpeg'
                }}
              style={{ width: 115, height: 300 }}
              />
            </Pressable>
            
        
       
            ))}  
        </View>
        <View className="flex-row justify-center">
          <Text className="font-bold text-xl">
            Choose your fate!
          </Text>
        </View>
      
      </View>
    </SafeAreaView>
  );
};

export default Home;