// ~/composables/timeAgoHelper.ts
export function timeAgo(timestamp: { _seconds: number; _nanoseconds: number }): string {
  // Convert Firestore timestamp to milliseconds
  const milliseconds = timestamp._seconds * 1000 + timestamp._nanoseconds / 1000000;
  
  // Create a Date object from the milliseconds
  const inputDate = new Date(milliseconds);

  // Check if the created date is valid
  if (isNaN(inputDate.getTime())) {
    console.error("Invalid date provided:", timestamp);
    throw new Error("Invalid date provided");
  }

  // Calculate the difference in seconds between the current time and the input date
  const seconds = Math.floor((new Date().getTime() - inputDate.getTime()) / 1000);

  // Calculate and return the appropriate "time ago" string based on the time difference
  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) return interval === 1 ? "a year ago" : `${interval} years ago`;

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return interval === 1 ? "a month ago" : `${interval} months ago`;

  interval = Math.floor(seconds / 604800);
  if (interval >= 1) return interval === 1 ? "a week ago" : `${interval} weeks ago`;

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return interval === 1 ? "a day ago" : `${interval} days ago`;

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return interval === 1 ? "an hour ago" : `${interval} hours ago`;

  interval = Math.floor(seconds / 60);
  if (interval >= 1) return interval === 1 ? "a minute ago" : `${interval} minutes ago`;

  return seconds === 1 ? "a second ago" : `${seconds} seconds ago`;
}
