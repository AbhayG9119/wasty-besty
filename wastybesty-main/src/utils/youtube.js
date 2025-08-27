const API = "https://www.googleapis.com/youtube/v3";

export async function resolveChannelId({ apiKey, handle, fallbackId }) {
  if (fallbackId) return fallbackId;
  if (!apiKey || !handle) return null;
  const q = encodeURIComponent(handle.startsWith("@") ? handle.slice(1) : handle);
  const url = `${API}/search?part=snippet&type=channel&maxResults=1&q=${q}&key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to search channel");
  const data = await res.json();
  return data.items?.[0]?.snippet?.channelId || null;
}

export async function getChannel({ apiKey, channelId }) {
  const url = `${API}/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch channel");
  const data = await res.json();
  return data.items?.[0] || null;
}

export async function getUploads({ apiKey, uploadsPlaylistId, maxResults = 9 }) {
  const url = `${API}/playlistItems?part=snippet,contentDetails&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch uploads");
  const data = await res.json();
  return (data.items || []).map(it => ({
    videoId: it.contentDetails?.videoId,
    title: it.snippet?.title,
    publishedAt: it.contentDetails?.videoPublishedAt || it.snippet?.publishedAt
  })).filter(v => v.videoId);
}

export async function getShorts({ apiKey, channelId, maxResults = 6 }) {
  // Approximation: short duration videos (API doesn’t flag "isShort")
  const url = `${API}/search?part=snippet&type=video&order=date&videoDuration=short&maxResults=${maxResults}&channelId=${channelId}&key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch shorts");
  const data = await res.json();
  return (data.items || []).map(it => ({
    videoId: it.id?.videoId,
    title: it.snippet?.title,
    publishedAt: it.snippet?.publishedAt
  })).filter(v => v.videoId);
}
