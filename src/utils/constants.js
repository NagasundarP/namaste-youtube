const GOOGLE_API_KEY = "AIzaSyCBYj8YxGKDe69wqJT54OJyyPvs_fUeFmc";
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const GOOGLE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&q=";

export const SEARCH_YOUTUBE_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API_KEY +
  "&q=";
