import { Topic } from "./TopicsDao";
import { DateTime, Interval } from "luxon";

export function timeLeft(topic: Topic): string {
  const now = DateTime.now();
  const end = DateTime.fromISO(topic.end_at);
  const interval = Interval.fromDateTimes(now, end);
  return Math.floor(interval.length("hours")).toString();
}
