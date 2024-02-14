const minute = 60;
const hour = minute * 60;
const day = 24 * hour;
const month = 30 * day;
const year = 12 * month;

export function dateToLabel(date: string): string {
  const prevTime = new Date(date);
  const now = new Date();
  const diff = Math.floor(Math.abs(now.getTime() - prevTime.getTime()) / 1000);

  if (diff >= year) {
    return labelTime(diff, year, "year");
  }

  if (diff >= month) {
    return labelTime(diff, month, "month");
  }

  if (diff >= day) {
    return labelTime(diff, day, "day");
  }

  if (diff >= hour) {
    return labelTime(diff, hour, "hour");
  }

  if (diff >= minute) {
    return labelTime(diff, minute, "minute");
  }

  return labelTime(diff, 1, "second");
}

function labelTime(time: number, unit: number, label: string): string {
  const times = Math.floor(time / unit);
  return `${times} ${times > 1 ? `${label}s` : label} ago`;
}
