import moment from 'moment';

export function PeriodDisplay({
  periodInDays,
  className,
}: {
  periodInDays: number;
  className?: string;
}) {
  const now = moment();
  const fromDate = moment().subtract(periodInDays, 'days');

  const isSameYear = now.isSame(fromDate, 'year');
  const isSameMonth = now.isSame(fromDate, 'month');

  const fromDateFormat = getDateFormat(isSameMonth, isSameYear);
  const dateFormat = getDateFormat(false, false);

  return (
    <div className={className}>
      {fromDate.format(fromDateFormat)} — {now.format(dateFormat)}
    </div>
  );
}

function getDateFormat(showMonth: boolean, showYear: boolean): string {
  let format = 'DD';
  if (!showMonth) {
    format += ' MMM';
  }
  if (!showYear) {
    format += ' YYYY';
  }
  return format;
}
