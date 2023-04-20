import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormControl, FormLabel, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import './styles.css';

registerLocale('pt', pt); // registra o idioma português

const InputData = ({ value, onChange }) => {

  const { colorMode } = useColorMode();
  const bordaInput = useColorModeValue("black","white")

  const [dataNascimento, setDataNascimento] = useState(value);

  const spacedWeekDay = (date) => {
    return date.getDay() === 0 || date.getDay() === 6 
      ? 'spaced-week-day'
      : null;
  }

  return (
    <FormControl id="dataNascimento">
      <FormLabel>Data de Nascimento</FormLabel>
      <DatePicker
        selected={dataNascimento}
        borderColor={colorMode === "light" ? "white" : bordaInput}
        onChange={(date) => {
          setDataNascimento(date);
          onChange(date.toISOString().slice(0, 10));
        }}
        dateFormat="dd/MM/yyyy"
        wrapperClassName="react-datepicker-wrapper"
        className="react-datepicker__input-container"
        popperClassName="react-datepicker-popper"
        weekDayClassName={spacedWeekDay}
        locale="pt" // define o idioma como português
      />
    </FormControl>
  );
};

export default InputData;
