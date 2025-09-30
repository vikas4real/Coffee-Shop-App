import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageProps,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
import GradientBGIcon from './GradientBGIcon';
interface FavouriteItemCardProps {
  id: string;
  name: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  average_rating: number;
  ratings_count: string;
  prices: any;
  type: string;
  favourite: boolean;
  ToggleFavouriteItem: any;
}
const FavouriteItemCard: React.FC<FavouriteItemCardProps> = ({
  id,
  name,
  imagelink_square,
  special_ingredient,
  average_rating,
  ratings_count,
  prices,
  type,
  favourite,
  ToggleFavouriteItem,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.FavouriteItemLinerGradient}>
      <View style={styles.FavouriteItemRow}>
        <Image
          source={imagelink_square}
          style={styles.FavouriteItemSingleImage}
        />
        <View style={styles.FavouriteItemInfo}>
          <View>
            <Text style={styles.FavouriteItemTitle}>{name}</Text>
            <Text style={styles.FavouriteItemSubTitle}>
              {special_ingredient}
            </Text>
          </View>
          <View style={styles.FavouriteItemSizeValueContainer}>
            <View style={styles.SizeBox}>
              <Text
                style={[
                  styles.SizeText,
                  {
                    fontSize:
                      type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                  },
                ]}>
                {prices[0].size}
              </Text>
            </View>
            <Text style={styles.SizeCurrency}>
              {prices[0].currency}
              <Text style={styles.SizePrice}> {prices[0].price}</Text>
            </Text>
          </View>
          <View style={styles.FavouriteItemCardFooterConatiner}>
            <View
              style={[styles.FavouriteItemRatingContainer, {marginTop: 10}]}>
              <CustomIcon
                name="star"
                color={COLORS.primaryOrangeHex}
                size={FONTSIZE.size_16}
              />
              <Text style={styles.FavouriteItemRatingText}>
                {average_rating}
              </Text>
              <Text style={styles.FavouriteItemRatingCountText}>
                ({ratings_count})
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => ToggleFavouriteItem(favourite, type, id)}>
              <GradientBGIcon
                name="like"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  FavouriteItemLinerGradient: {
    flex: 1,
    gap: SPACING.space_12,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  FavouriteItemRow: {flexDirection: 'row', gap: SPACING.space_12, flex: 1},
  FavouriteItemImage: {
    height: 130,
    width: 130,
    borderRadius: BORDERRADIUS.radius_20,
  },
  FavouriteItemSingleImage: {
    height: 150,
    width: 150,
    borderRadius: BORDERRADIUS.radius_20,
  },
  FavouriteItemInfo: {
    flex: 1,
    paddingVertical: SPACING.space_4,
    justifyContent: 'space-between',
  },
  FavouriteItemTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  FavouriteItemSubTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  FavouriteItemRoastedContainer: {
    height: 50,
    width: 120,
    borderRadius: BORDERRADIUS.radius_15,
    backgroundColor: COLORS.primaryDarkGreyHex,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FavouriteItemRoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  FavouriteItemSizeRowContainer: {
    flex: 1,
    alignItems: 'center',
    gap: SPACING.space_20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  FavouriteItemSizeValueContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  SizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 40,
    width: 100,
    borderRadius: BORDERRADIUS.radius_10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
  SizeCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  SizePrice: {
    color: COLORS.primaryWhiteHex,
  },
  FavouriteItemCardFooterConatiner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FavouriteItemRatingContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },
  FavouriteItemRatingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  FavouriteItemRatingCountText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
});
export default FavouriteItemCard;
