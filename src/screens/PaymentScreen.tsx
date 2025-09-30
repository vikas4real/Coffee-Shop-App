import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import GradientBGIcon from '../components/GradientBGIcon';
import PaymentMethod from '../components/PaymentMethod';
import PaymentFooter from '../components/PaymentFooter';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../components/CustomIcon';
import {useStore} from '../store/store';
import PopUpAnimation from '../components/PopUpAnimation';

const PaymentList = [
  {name: 'Wallet', icon: 'icon', isIcon: true},
  {
    name: 'Google Pay',
    icon: require('../assets/app_images/gpay.png'),
    isIcon: false,
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/app_images/applepay.png'),
    isIcon: false,
  },
  {
    name: 'Amazon Pay',
    icon: require('../assets/app_images/amazonpay.png'),
    isIcon: false,
  },
];

const PaymentScreen = ({navigation, route}: any) => {
  const [paymentMode, setPaymentMode] = useState('Credit Card');
  const [showAnimation, setShowAnimation] = useState(false);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToOrderHistoryListFromCart = useStore(
    (state: any) => state.addToOrderHistoryListFromCart,
  );

  const buttonPressHandler = () => {
    setShowAnimation(true);
    addToOrderHistoryListFromCart();
    calculateCartPrice();
    setTimeout(() => {
      setShowAnimation(false);
      navigation.navigate('Order History');
    }, 2000);
  };
  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showAnimation ? (
        <PopUpAnimation
          style={styles.LottieAnimation}
          source={require('../lottie/successful.json')}
        />
      ) : (
        <></>
      )}
      {/* Header Bar*/}
      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <GradientBGIcon
            name="left"
            color={COLORS.primaryLightGreyHex}
            size={FONTSIZE.size_16}
          />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Payment</Text>
        <View style={styles.EmptyViewContainer} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewContainer}>
        <View style={styles.PaymentOptionsContainer}>
          {/* Credit Card UI  */}
          <TouchableOpacity onPress={() => setPaymentMode('Credit Card')}>
            <View
              style={[
                styles.CreditCardContainer,
                {
                  borderColor:
                    paymentMode == 'Credit Card'
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryGreyHex,
                },
              ]}>
              <Text style={styles.CreditCardTitle}>Credit Card</Text>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                style={styles.LinearGradientStyle}>
                <View style={styles.CreditCardRow}>
                  <CustomIcon
                    name="chip"
                    color={COLORS.primaryOrangeHex}
                    size={FONTSIZE.size_20 * 2}
                  />
                  <CustomIcon
                    name="visa"
                    color={COLORS.primaryWhiteHex}
                    size={FONTSIZE.size_30 * 2}
                  />
                </View>
                <View style={styles.CreditCardNumberConatiner}>
                  <Text style={styles.CreditCardNumber}>1234</Text>
                  <Text style={styles.CreditCardNumber}>1234</Text>
                  <Text style={styles.CreditCardNumber}>1234</Text>
                  <Text style={styles.CreditCardNumber}>1234</Text>
                </View>
                <View style={styles.CreditCardRow}>
                  <View style={styles.CreditCardHolderConatiner}>
                    <Text style={styles.CreditCardHolder}>
                      Card Holder Name
                    </Text>
                    <Text style={styles.CreditCardHolderName}>
                      Vikas Pandey
                    </Text>
                  </View>
                  <View style={styles.CreditCardDateConatiner}>
                    <Text style={styles.CreditCardHolder}>Expiry</Text>
                    <Text style={styles.CreditCardHolderName}>08/30</Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </TouchableOpacity>
          {/* Other Payment Mode UI */}
          {PaymentList.map((data: any) => (
            <TouchableOpacity
              key={data.name}
              onPress={() => {
                setPaymentMode(data.name);
              }}>
              <PaymentMethod
                paymentMode={paymentMode}
                name={data.name}
                icon={data.icon}
                isIcon={data.isIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <PaymentFooter
        buttonTitle={`Pay with ${paymentMode}`}
        price={{price: route.params.amount, currency: '$'}}
        buttonPressHandler={buttonPressHandler}
      />
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  ScreenContainer: {flex: 1, backgroundColor: COLORS.primaryBlackHex},
  LottieAnimation: {flex: 1},
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_15,
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  EmptyViewContainer: {
    height: 36,
    width: 36,
  },
  ScrollViewContainer: {flexGrow: 1},
  PaymentOptionsContainer: {
    gap: SPACING.space_15,
    padding: SPACING.space_15,
  },
  CreditCardContainer: {
    padding: SPACING.space_10,
    gap: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_15 * 2,
    borderWidth: 3,
  },
  CreditCardTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  CreditCardBG: {
    borderRadius: BORDERRADIUS.radius_25,
    backgroundColor: COLORS.primaryGreyHex,
  },
  LinearGradientStyle: {
    borderRadius: BORDERRADIUS.radius_25,
    gap: SPACING.space_36,
    paddingHorizontal: SPACING.space_15,
    paddingVertical: SPACING.space_10,
  },
  CreditCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CreditCardNumberConatiner: {
    flexDirection: 'row',
    gap: SPACING.space_15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CreditCardNumber: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
    letterSpacing: 4,
  },
  CreditCardHolderConatiner: {alignItems: 'flex-start'},
  CreditCardDateConatiner: {alignItems: 'flex-end'},
  CreditCardHolder: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  CreditCardHolderName: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
});
