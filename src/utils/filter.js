export const searchNews = (key, news) => {
  return news.filter(item => item.title.toLowerCase().includes(key.trim().toLowerCase()));
};
