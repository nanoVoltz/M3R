import React, { useState, useEffect, useRef } from "react";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import { PickersCalendarHeaderProps } from "@mui/x-date-pickers/PickersCalendarHeader";
import { styled } from "@mui/material/styles";
import { IconButton, Stack, Box } from "@mui/material";
import dayjs from "dayjs";
import { Theme } from "@mui/material";
import { M3Button } from "../M3Button";
import { M3Typography } from "../M3Typography";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";

const CustomCalendarHeaderRoot = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 16px",
  alignItems: "center",
  position: "relative",
});

const SelectContainer = styled("div")({
  position: "absolute",
  top: "40px",
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-between",
  zIndex: 1,
});

const SelectBox = styled("div")({
  flexDirection: "column",
  width: "100%",
  height: "320px",
  overflowY: "auto",
  padding: "10px 0",
  display: "none",
  "&.visible": {
    display: "flex",
  },
});

const SelectList = styled("ul")<{
  theme?: Theme;
}>(({ theme }) => ({
  listStyleType: "none",
  margin: 0,
  padding: 0,
  height: "fit-content",
  backgroundColor: theme.palette.surfaceContainerHigh.main,
}));

const SelectListItem = styled("li")<{
  selected?: boolean;
  theme?: Theme;
}>(({ selected, theme }) => ({
  padding: "15px 50px",
  cursor: "pointer",
  backgroundColor: selected ? theme.palette.surfaceVariant.main : "transparent",
  "&:hover": {
    backgroundColor: theme.palette.surfaceVariant.main,
  },
}));

// Custom calendar header
function CustomCalendarHeader(props: PickersCalendarHeaderProps<dayjs.Dayjs>) {
  const { currentMonth, onMonthChange } = props;
  const months = Array.from({ length: 12 }, (_, i) =>
    currentMonth.month(i).format("MMMM")
  );
  const years = Array.from(
    { length: 50 },
    (_, i) => currentMonth.year() - 30 + i
  );
  const [showMonthList, setShowMonthList] = useState(false);
  const [showYearList, setShowYearList] = useState(false);

  const monthListRef = useRef<HTMLDivElement>(null);
  const yearListRef = useRef<HTMLDivElement>(null);

  const handleMonthChange = (month: number) => {
    onMonthChange(currentMonth.month(month), "left");
    setShowMonthList(false);
  };

  const handleYearChange = (year: number) => {
    onMonthChange(currentMonth.year(year), "left");
    setShowYearList(false);
  };

  const selectNextMonth = () => {
    onMonthChange(currentMonth.add(1, "month"), "left");
    setShowMonthList(false);
    setShowYearList(false);
  };

  const selectNextYear = () => {
    onMonthChange(currentMonth.add(1, "year"), "left");
    setShowMonthList(false);
    setShowYearList(false);
  };

  const selectPreviousMonth = () => {
    onMonthChange(currentMonth.subtract(1, "month"), "right");
    setShowMonthList(false);
    setShowYearList(false);
  };

  const selectPreviousYear = () => {
    onMonthChange(currentMonth.subtract(1, "year"), "right");
    setShowMonthList(false);
    setShowYearList(false);
  };

  const toggleMonthList = () => {
    setShowMonthList((prev) => !prev);
    if (!showMonthList) {
      setShowYearList(false);
    }
  };

  const toggleYearList = () => {
    setShowYearList((prev) => !prev);
    if (!showYearList) {
      setShowMonthList(false);
    }
  };

  useEffect(() => {
    if (showMonthList && monthListRef.current) {
      const selectedMonthIndex = currentMonth.month();
      monthListRef.current.scrollTo(0, selectedMonthIndex * 50);
    }
  }, [showMonthList, currentMonth]);

  useEffect(() => {
    if (showYearList && yearListRef.current) {
      const selectedYearIndex = years.indexOf(currentMonth.year());
      yearListRef.current.scrollTo(0, selectedYearIndex * 50);
    }
  }, [showYearList, currentMonth]);

  return (
    <CustomCalendarHeaderRoot>
      <Stack spacing={0.25} direction="row" alignItems="center">
        <IconButton
          size="small"
          onClick={selectPreviousMonth}
          title="Previous month"
        >
          <ChevronLeft />
        </IconButton>
        <Stack
          direction="row"
          alignItems="center"
          onClick={toggleMonthList}
          style={{ cursor: "pointer" }}
        >
          <M3Typography textAlign="center" variant="bodyMedium">
            {currentMonth.format("MMM")}
          </M3Typography>
          {showMonthList ? <ArrowDropUp /> : <ArrowDropDown />}
        </Stack>
        <IconButton
          size="small"
          sx={{ marginLeft: "0" }}
          onClick={selectNextMonth}
          title="Next month"
        >
          <ChevronRight />
        </IconButton>
      </Stack>
      <Stack direction="row" alignItems="center">
        <IconButton onClick={selectPreviousYear} title="Previous year">
          <ChevronLeft />
        </IconButton>
        <Stack
          direction="row"
          alignItems="center"
          onClick={toggleYearList}
          style={{ cursor: "pointer" }}
        >
          <M3Typography variant="bodySmall">
            {currentMonth.format("YYYY")}
          </M3Typography>
          {showYearList ? <ArrowDropUp /> : <ArrowDropDown />}
        </Stack>
        <IconButton onClick={selectNextYear} title="Next year">
          <ChevronRight />
        </IconButton>
      </Stack>
      <SelectContainer>
        <SelectBox
          className={showMonthList ? "visible" : ""}
          ref={monthListRef}
        >
          <SelectList>
            {months.map((month, index) => (
              <SelectListItem
                key={month}
                onClick={() => handleMonthChange(index)}
                selected={currentMonth.month() === index}
              >
                {month}
              </SelectListItem>
            ))}
          </SelectList>
        </SelectBox>
        <SelectBox className={showYearList ? "visible" : ""} ref={yearListRef}>
          <SelectList>
            {years.map((year) => (
              <SelectListItem
                key={year}
                onClick={() => handleYearChange(year)}
                selected={currentMonth.year() === year}
              >
                {year}
              </SelectListItem>
            ))}
          </SelectList>
        </SelectBox>
      </SelectContainer>
    </CustomCalendarHeaderRoot>
  );
}

const CustomActionBar = ({
  onAccept,
  onCancel,
}: {
  onAccept: () => void;
  onCancel: () => void;
}) => (
  <Box display="flex" justifyContent="flex-end">
    <M3Button onClick={onCancel} variant="text">
      Cancel
    </M3Button>
    <M3Button onClick={onAccept} variant="text">
      OK
    </M3Button>
  </Box>
);

const M3DatePicker = (props: DatePickerProps<dayjs.Dayjs, boolean>) => {
  return (
    <DatePicker
      format="DD/MM/YYYY"
      {...props}
      showDaysOutsideCurrentMonth={true}
      fixedWeekNumber={6}
      closeOnSelect={false}
      slotProps={{
        layout: {
          sx: {
            display: "flex",
            flexDirection: "column",
          },
        },
      }}
      slots={{
        actionBar: CustomActionBar,
        calendarHeader: CustomCalendarHeader,
      }}
    />
  );
};

export default M3DatePicker;
