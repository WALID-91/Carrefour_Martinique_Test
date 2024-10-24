import React, { useRef, useState, useCallback } from 'react';
import { View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Carousel from "react-native-reanimated-carousel";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import ApiUrls from '@/network/ApiUrl';
import NewsCarouselStyles from '@/styles/NewsCarouselStyles';  // Import des styles

const NewsCarousel = ({ data }: { data: Array<any> }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<ICarouselInstance>(null);

  const renderPagination = useCallback(() => (
    <View style={NewsCarouselStyles.paginationContainer}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[
            NewsCarouselStyles.paginationDot,
            activeIndex === index ? NewsCarouselStyles.paginationDotActive : NewsCarouselStyles.paginationDotInactive,
          ]}
        />
      ))}
    </View>
  ), [activeIndex, data]);

  return (
    <View style={NewsCarouselStyles.carouselContainer}>
      <Carousel
        ref={ref}
        width={wp(100)}
        height={hp(60)}
        autoPlay={false}
        data={data}
        loop={false}
        mode={"horizontal-stack"}
        modeConfig={{
          snapDirection: 'left',
          stackInterval: 30,
          rotateZDeg: 0,
        }}
        customConfig={() => ({ type: "positive", viewCount: 3 })}
        pagingEnabled={true}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ index, item }) => (
          <View style={[NewsCarouselStyles.carouselItem, { marginLeft: 23 }]}>
            <Image
              source={{ uri: ApiUrls.BASE_URL_IMAGE + item.imageUrl }}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"  // Pour ajuster correctement les images
            />
          </View>
        )}
      />
      {renderPagination()}
    </View>
  );
};

export default React.memo(NewsCarousel);