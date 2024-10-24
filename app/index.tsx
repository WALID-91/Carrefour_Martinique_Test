import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderIcons from '@/components/HeaderIcons';
import BottomNavigation from '@/components/BottomNavigation';
import { ArcSvg } from '@/components/iconSVG/IconsSvg';
import NewsCarousel from '@/components/carousel/NewsCarousel';
import { fetchNewsData } from '@/network/apiClient'; 
import HomeScreenStyles from '@/styles/HomeScreenStyles';

export default function HomeScreen() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const newsData = await fetchNewsData();
      setNews(newsData);
    };
    loadNews();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['right', 'left']}>
      <HeaderIcons />
      <ArcSvg />
      <LinearGradient colors={['#c6c6c6', '#F6F6F6', '#F6F6F6']} style={HomeScreenStyles.content}>
        <NewsCarousel data={news} />
      </LinearGradient>
      <BottomNavigation />
    </SafeAreaView>
  );
}
