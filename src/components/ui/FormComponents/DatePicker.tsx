import React from "react";
import DateView from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker(props) {
  const { label, name, ...rest } = props;
  return (
    <>
      <label className="block text-black text-lg font-bold mb-1" htmlFor={name}>
        {label}
      </label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              showIcon
              {...field}
              name="bookingDate"
              style={{
                width: "100%",
                boxSizing: "border-box",
                height: "26px",
              }}
              containerStyle={{
                width: "100%",
              }}
              calendarPosition="bottom-center"
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </>
  );
}

export default DatePicker;
