import ApiUrls from '@/network/ApiUrl';

export const fetchNewsData = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(ApiUrls.GETNEWS, options);
    const data = await response.json();

    if (data.status === "success") {
      const newsData = data.result.find((item: any) => item.store === "GET_NEWS");
      if (newsData) {
        return newsData.response.result.result;
      } else {
        console.log("Aucune news trouvée.");
        return [];
      }
    } else {
      console.error("Erreur dans le statut de la réponse:", data.status);
      return [];
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    return [];
  }
};
