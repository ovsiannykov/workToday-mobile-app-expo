import * as Font from "expo-font";

export async function bootstrap() {
  await Font.loadAsync({
    'Poppins300': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins400': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins500': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins600': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins700': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins800': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins900': require('../assets/fonts/Poppins-Black.ttf'),
    'Roboto500': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto900': require('../assets/fonts/Roboto-Black.ttf')
  });
}
