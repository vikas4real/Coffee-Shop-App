import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import CustomIcon from '../components/CustomIcon';
import GradientBGIcon from '../components/GradientBGIcon';

const UserAccountScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      {/* Header Bar*/}
      <View style={styles.HeaderContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <GradientBGIcon
            name="left"
            color={COLORS.primaryLightGreyHex}
            size={FONTSIZE.size_16}
          />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>My Profile</Text>
        <View style={styles.EmptyViewContainer} />
      </View>

      <View style={styles.AvatarContainer}>
        <Image
          source={require('../assets/app_images/avatar.png')}
          style={styles.AvatarStyle}
        />
        <Text style={styles.NameStyle}>John Doe</Text>
      </View>
      <View style={styles.ProfileItems}>
        <View style={styles.SubItem}>
          <View style={styles.SubItemInfo}>
            <CustomIcon
              name="user"
              size={FONTSIZE.size_24}
              color={COLORS.primaryWhiteHex}
            />
            <Text style={styles.ItemText}>Account</Text>
          </View>
          <CustomIcon
            name="arrow-right"
            size={FONTSIZE.size_24}
            color={COLORS.primaryWhiteHex}
          />
        </View>

        <View style={styles.SubItem}>
          <View style={styles.SubItemInfo}>
            <CustomIcon
              name="setting"
              size={FONTSIZE.size_24}
              color={COLORS.primaryWhiteHex}
            />
            <Text style={styles.ItemText}>Settings</Text>
          </View>
          <CustomIcon
            name="arrow-right"
            size={FONTSIZE.size_24}
            color={COLORS.primaryWhiteHex}
          />
        </View>

        <View style={styles.SubItem}>
          <View style={styles.SubItemInfo}>
            <CustomIcon
              name="dollar"
              size={FONTSIZE.size_24}
              color={COLORS.primaryWhiteHex}
            />
            <Text style={styles.ItemText}>Offers & Referals</Text>
          </View>
          <CustomIcon
            name="arrow-right"
            size={FONTSIZE.size_24}
            color={COLORS.primaryWhiteHex}
          />
        </View>

        <View style={styles.SubItem}>
          <View style={styles.SubItemInfo}>
            <CustomIcon
              name="info"
              size={FONTSIZE.size_24}
              color={COLORS.primaryWhiteHex}
            />
            <Text style={styles.ItemText}>About</Text>
          </View>
          <CustomIcon
            name="arrow-right"
            size={FONTSIZE.size_24}
            color={COLORS.primaryWhiteHex}
          />
        </View>
      </View>
      <View style={styles.AppDeveloperInfo}>
        <Text style={styles.AppDveloperText}>Developed by Vikas Pandey</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
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
  AvatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SPACING.space_36,
    gap: SPACING.space_10,
  },
  AvatarStyle: {
    borderRadius: 80,
    width: 80,
    height: 80,
  },
  NameStyle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  ProfileItems: {
    gap: SPACING.space_36,
    marginHorizontal: SPACING.space_36,
  },
  SubItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  SubItemInfo: {
    flexDirection: 'row',
    gap: SPACING.space_10,
  },
  ItemText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  AppDeveloperInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  AppDveloperText: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});
export default UserAccountScreen;
