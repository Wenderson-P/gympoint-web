import React from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { Container } from './styles';

export default function DatePickerComponent({ selected, onChange, disabled }) {
  return (
    <Container>
      <DatePicker
        locale={ptBR}
        dateFormat="dd/MM/yyyy"
        selected={selected}
        onChange={onChange}
        disabled={disabled}
      />
    </Container>
  );
}
