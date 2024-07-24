import FlashScreen from '../screens/FlashScreen';
import Login from '../screens/Login';
import OtpScreen from '../screens/OtpScreen';
import BottomTab from './BottomTab';
import AddAddress from '../components/cart_screen/AddAddress';
import Project from '../mood board/Project';
import OrderSummary from '../components/cart_screen/OrderSummary';
import AddLocality from '../components/cart_screen/AddLocality';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/Register';
import EnableLocation from '../screens/EnableLocation';
import BookingSummary from '../components/booking_screen/BookingSummary';
import UpdateAccount from '../components/profile_screen/UpdateAccount';
import Favourites from '../components/profile_screen/Favourites';
import UpdateAddress from '../components/profile_screen/UpdateAddress';
import Notification from '../notification/Notification';
import ProductFiltered from '../components/product_screen/ProductFiltered';
import ProductDetails from '../components/product_screen/ProductDetails';
import ProductReview from '../components/product_screen/ProductReview';
import AddProfile from '../screens/AddProfile';
import CompanyDetails from '../components/cart_screen/CompanyDetails';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FlashScreen"
        component={FlashScreen}
        options={{title: 'Welcome', headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Welcome', headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{title: 'Welcome', headerShown: false}}
      />
      <Stack.Screen
        name="AddProfile"
        component={AddProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Otp"
        component={OtpScreen}
        options={{title: 'Welcome', headerShown: false}}
      />
      <Stack.Screen
        name="Enable Location"
        component={EnableLocation}
        options={{title: 'Welcome', headerShown: false}}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Add Address"
        component={AddAddress}
        options={{title: 'Event Address', headerShown: true}}
      />
      <Stack.Screen
        name="Add Locality"
        component={AddLocality}
        options={{headerShown: false}}
      />
      {/* cart///start */}
      <Stack.Screen
        name="Company Details"
        component={CompanyDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order Summary"
        component={OrderSummary}
        options={{headerShown: false}}
      />
      {/* cart///// end */}
      <Stack.Screen
        name="Create New Project"
        component={Project}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notification}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="ProductFiltered"
        component={ProductFiltered}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductReview"
        component={ProductReview}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Booking Summary"
        component={BookingSummary}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={UpdateAccount}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Address"
        component={UpdateAddress}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
