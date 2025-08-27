import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.REACT_APP_CHANNEL_ID;

export function useYouTubeData() {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [shorts, setShorts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API_KEY || !CHANNEL_ID) {
      setError("YouTube API key or Channel ID not provided.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        // 1) channel details
        const chRes = await axios.get("https://www.googleapis.com/youtube/v3/channels", {
          params: { part: "snippet,statistics", id: CHANNEL_ID, key: API_KEY }
        });
        setChannel(chRes.data.items?.[0] || null);

        // 2) fetch latest videos from uploads playlist
        // get uploads playlist id:
        const uploadsPlaylistId = chRes.data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
        // fallback: use search list by channelId
        const vidRes = await axios.get("https://www.googleapis.com/youtube/v3/search", {
          params: { key: API_KEY, channelId: CHANNEL_ID, part: "snippet", order: "date", maxResults: 24 }
        });
        const items = vidRes.data.items || [];
        // split shorts vs regular by checking videoDuration or title length or presence of 'shorts' — simple heuristic:
        const regular = items.filter(i => i.id.kind === "youtube#video" && !/shorts?/i.test(i.snippet.title)).map(i => i);
        const s = items.filter(i => i.id.kind === "youtube#video" && /shorts?/i.test(i.snippet.title));
        setVideos(regular);
        setShorts(s);
      } catch (err) {
        console.error(err);
        setError("Failed to load YouTube data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { channel, videos, shorts, isLoading, error };
}
