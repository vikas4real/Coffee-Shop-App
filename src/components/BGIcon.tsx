import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, COLORS, FONTSIZE, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';
interface BGIconProps {
  name: string;
  color: string;
  size: number;
  bgColor: string;
}
const BGIcon: React.FC<BGIconProps> = ({name, color, size, bgColor}) => {
  return (
    <View style={[styles.IconBG, {backgroundColor: bgColor}]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  );
};
const styles = StyleSheet.create({
  IconBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDERRADIUS.radius_8,
  },
});
export default BGIcon;
