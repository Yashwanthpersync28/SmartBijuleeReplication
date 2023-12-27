import React from 'react';
import Carousel from 'react-native-snap-carousel';

import { Sliderdata } from '../../../Constants/Carousaldata/Energytipsswiperdata';
import Lotti from '../Components/Lotti';


const CarouselWithLottie = () => {

  const renderCard = ({ item }) => {
    return <Lotti animationSource={item.animationSource} title={item.title} name={item.name}/>;
  };

  return (
    <Carousel
      data={Sliderdata}
      renderItem={renderCard}
      sliderWidth={300}
      itemWidth={200}
      layout={'stack'}
      layoutCardOffset={18}
    />
  );
};

export default CarouselWithLottie;
