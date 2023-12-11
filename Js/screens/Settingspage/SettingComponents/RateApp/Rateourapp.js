import React, { useEffect } from 'react';
import { View, Linking } from 'react-native';
import { flex, styles } from '../../../../../styles/Styles';

const Rateourapp = () => {
  useEffect(() => {
    const openPlayStore = () => {
      Linking.openURL('market://details?id=com.SMARTBIJULEE.android');
    };

    openPlayStore();
  }, []);

  return <View style={[flex(1)]}></View>;
};

export default Rateourapp;
