import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../context/ThemeContext';
import { hp, wp, metrics } from '../theme/layout';

const TabBarBackground = () => {
    const { colors } = useTheme();

    const width = wp('90%');
    const height = hp('8%');
    const borderRadius = metrics.borderRadius * 1.5;

    const centerWidth = wp('20%');
    const cutoutRadius = centerWidth / 2;

    const path = `
      M 0,${borderRadius}
      A ${borderRadius},${borderRadius} 0 0 1 ${borderRadius},0
      L ${width / 2 - cutoutRadius - 10},0
      C ${width / 2 - cutoutRadius + 5},0 ${width / 2 - cutoutRadius + 5},${height / 3} ${width / 2},${height / 3}
      C ${width / 2 + cutoutRadius - 5},${height / 3} ${width / 2 + cutoutRadius - 5},0 ${width / 2 + cutoutRadius + 10},0
      L ${width - borderRadius},0
      A ${borderRadius},${borderRadius} 0 0 1 ${width},${borderRadius}
      L ${width},${height}
      L 0,${height}
      Z
    `;

    return (
        <View style={{ ...metrics.cardShadow, shadowOpacity: 0.15 }}>
            <Svg width={width} height={height}>
                <Path d={path} fill={colors.surface + 'F2'} />
            </Svg>
        </View>
    );
};

export default TabBarBackground;