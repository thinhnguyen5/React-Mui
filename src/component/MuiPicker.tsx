import { Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  console.log(selectedDateTime);
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        // renderInput={(params:any) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue: any) => setSelectedDate(newValue)}
      />

      {/* <TimePicker
        label="Time Picker"
        // renderInput={(params:any) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newValue: any) => setSelectedTime(newValue)}
      /> */}

      <TimePicker
        label="Controlled picker"
        value={selectedTime}
        onChange={(newValue: any) => setSelectedTime(newValue)}
      />

      <DateTimePicker
        label="Date and Time picker"
        value={selectedDateTime}
        onChange={(newValue: any) => setSelectedDateTime(newValue)}
      />
    </Stack>
  );
};

export default MuiPicker;
