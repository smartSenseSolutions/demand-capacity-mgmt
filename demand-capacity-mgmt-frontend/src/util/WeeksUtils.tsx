/*
 *  *******************************************************************************
 *  Copyright (c) 2023 BMW AG
 *  Copyright (c) 2023 Contributors to the Eclipse Foundation
 *
 *    See the NOTICE file(s) distributed with this work for additional
 *    information regarding copyright ownership.
 *
 *    This program and the accompanying materials are made available under the
 *    terms of the Apache License, Version 2.0 which is available at
 *    https://www.apache.org/licenses/LICENSE-2.0.
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 *    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 *    License for the specific language governing permissions and limitations
 *    under the License.
 *
 *    SPDX-License-Identifier: Apache-2.0
 *    ********************************************************************************
 */

import moment from "moment";

export function getISOWeekMonday(year: number, isoWeek: number): moment.Moment {
    return moment().year(year).isoWeek(isoWeek).startOf('isoWeek');
}

export function getYearOfWeek(date: moment.Moment): number {
    return date.add(3, 'days').year();
}

export const getWeekNumber = (date: Date) => {
    const momentDate = moment(date);
    return momentDate.isoWeek();
};

export function getWeeksInMonth(year: number, monthIndex: number, knownNextMonthWeeks?: Set<number>): number[] {
    const weeks: Set<number> = new Set();

    const firstDayOfMonth = moment().year(year).month(monthIndex).startOf('month');
    const lastDayOfMonth = moment().year(year).month(monthIndex).endOf('month');
    // Fetch weeks of the next month if not provided.
    if (!knownNextMonthWeeks && monthIndex < 11) {
        knownNextMonthWeeks = new Set(getWeeksInMonth(year, monthIndex + 1));
    }

    let currentDay = firstDayOfMonth;
    while (currentDay <= lastDayOfMonth) {
        const weekNum = currentDay.week();
        const isoWeekYear = getYearOfWeek(currentDay);

        // If the month is January and the week year is the previous year, skip it
        if (monthIndex === 0 && isoWeekYear < year) {
            currentDay = currentDay.add(1, 'days');
            continue;
        }

        // If it's the last week of the month and it's also in the next month, skip it.
        if (currentDay.isAfter(moment(new Date(year, monthIndex, 24))) && knownNextMonthWeeks?.has(weekNum)) {
            currentDay = currentDay.add(1, 'days');
            continue;
        }

        weeks.add(weekNum);
        currentDay = currentDay.add(1, 'days');
    }
    return Array.from(weeks).sort((a, b) => a - b);
}


export const generateWeeksForDateRange = (start: Date, end: Date) => {
    const weeks: { name: string; year: number; weeks: number[]; monthIndex: number }[] = [];
    let currentDate = moment(start).startOf('isoWeek');

    while (currentDate.isSameOrBefore(moment(end), 'day')) {
        const year = currentDate.year();
        const monthName = currentDate.format('MMMM');
        const weeksInMonth = getWeeksInMonth(year, currentDate.month());

        const monthIndex = currentDate.month();

        const existingMonthIndex = weeks.findIndex((monthData) => monthData.year === year && monthData.monthIndex === monthIndex);

        if (existingMonthIndex === -1) {
            weeks.push({
                name: monthName,
                year,
                weeks: weeksInMonth,
                monthIndex,
            });
        } else {
            weeks[existingMonthIndex].weeks.push(...weeksInMonth);
        }

        currentDate.add(1, 'month');
    }

    return weeks;
};


// Function to get the beginning and end dates of the week
export const getWeekDates = (year: number, month: string, week: number) => {
    const startDate = getISOWeekMonday(year, week);

    const endDate = new Date(startDate.toDate());
    endDate.setDate(endDate.getDate() + 6); // Assuming weeks end on Saturdays

    return {
        startDate: startDate.toString(),
        endDate: endDate.toDateString(),
    };
};

export const getMondaysBetweenDates = (startDate: Date, endDate: Date): string[] => {
    const mondays: string[] = [];
    const current = new Date(startDate);

    while (current <= endDate) {
        if (current.getDay() === 1) {
            // Monday has index 1 in JS (0 is Sunday, 1 is Monday, etc.)
            const formattedDate = current.toISOString().slice(0, 10);
            mondays.push(formattedDate);
        }

        current.setDate(current.getDate() + 1);
    }

    return mondays;
};

export const getNextMondayfromToday = () => {
    const today = new Date();
    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + ((1 + 7 - today.getDay()) % 7));
    return nextMonday;
};

export function toCamelCase(str: string) {
    const lowerCaseStr = str.toLowerCase();
    const camelCase = lowerCaseStr.replace(/[-_]+(.)?/g, (_, c) => c ? c.toLowerCase() : '');
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}
