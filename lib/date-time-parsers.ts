import {
  differenceInCalendarDays,
  differenceInCalendarMonths,
  format,
  isToday,
  isYesterday
} from "date-fns"
class DatetimeParsers {
  isDateTimeValid(dateTime: unknown) {
    return !isNaN(Date.parse(dateTime as string))
  }

  isToday(date: string) {
    if (!this.isDateTimeValid(date)) {
      return false
    }
    return isToday(new Date(date))
  }

  isYesterday(date: string) {
    if (!this.isDateTimeValid(date)) {
      return false
    }
    return isYesterday(new Date(date))
  }
  getConversationTimeStamp(date: string) {
    if (!this.isDateTimeValid(date)) {
      return null
    }

    if (this.isToday(date)) {
      return format(new Date(date), "HH:mm")
    }
    if (this.isYesterday(date)) {
      return "Yesterday"
    }
    if (
      differenceInCalendarDays(new Date(date), new Date()) >= -6 &&
      differenceInCalendarDays(new Date(date), new Date()) < 0
    ) {
      return format(new Date(date), "E")
    }

    if (differenceInCalendarMonths(new Date(date), new Date()) == 0) {
      return format(new Date(date), "MMM dd")
    }
    return format(new Date(date), "yyyy-MM-dd")
  }
}

export const dateTimeParser = new DatetimeParsers()
