import moment from 'moment';

// TODO: use dayjs instead of moment

export function formatUnixUTC(value: number, timeFormat: string) {
  return moment.unix(value).utc().format(timeFormat);
}
