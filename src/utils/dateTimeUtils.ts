import moment from 'moment';

export function formatUnixUTC(value: number, timeFormat: string) {
  return moment.unix(value).utc().format(timeFormat);
}
