export function buildBaseLink(topicId) {
  const encodedTopicId = encodeURIComponent(topicId);
  const host = window.location.hostname;
  const protocol = window.location.protocol;
  const port = window.location.port;
  const isCustomPort = port && !(port == "80" || port == "0");
  return isCustomPort
    ? `${protocol}//${host}:${port}/decisions/${encodedTopicId}`
    : `${protocol}//${host}/decisions/${encodedTopicId}`;
}
