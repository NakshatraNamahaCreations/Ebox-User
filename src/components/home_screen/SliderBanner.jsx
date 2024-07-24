import {View, Text, ScrollView, Image, Dimensions} from 'react-native';
import React, {useEffect, useRef} from 'react';

export default function SliderBanner() {
  const scrollViewRef = useRef(null);
  const [imgActive, setImgActive] = React.useState(0);

  const sliderImage = [
    {
      imageUrl: require('../../../assets/Kiru3_3.png'),
    },
    {
      imageUrl: require('../../../assets/Kiru3_4.png'),
    },
    {
      imageUrl: require('../../../assets/Kiru3_5.png'),
    },
  ];

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       if (imgActive < sliderImage.length - 1) {
  //         scrollViewRef.current.scrollTo({
  //           x: (imgActive + 1) * width, // Access width from here
  //           animated: true,
  //         });
  //       } else {
  //         scrollViewRef.current.scrollTo({x: 0, animated: true});
  //       }
  //     }, 2000);

  //     return () => clearInterval(interval);
  //   }, [imgActive, width]); // Ensure width is included as a dependency

  //   const onChange = event => {
  //     const slide = Math.ceil(event.nativeEvent.contentOffset.x / width); // Use width here
  //     if (slide !== imgActive) {
  //       setImgActive(slide);
  //     }
  //   };

  //   const imageSliderData = sliderImage.map(item => ({
  //     img: item.imageUrl,
  //   }));

  const onChange = event => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
    ); // Calculate active image index based on scroll position
    if (slide !== imgActive) {
      setImgActive(slide); // Update active image index
    }
  };

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        onScroll={({nativeEvent}) => onChange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal>
        {sliderImage.map((e, index) => (
          <View key={index.toString()} style={{borderRadius: 10}}>
            <Image
              key={index}
              source={e.imageUrl}
              onError={() => console.log('Error loading image:', e.img)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
