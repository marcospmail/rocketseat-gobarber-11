import React, { useState, useMemo } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  async function handleOpenPicker() {
    setOpened(true);
  }

  function handleOnDateChange(event, newDate) {
    setOpened(false);

    if (newDate !== undefined) {
      onChange(newDate);
    }
  }

  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <DateTimePicker
          mode="date"
          value={new Date()}
          minimumDate={new Date()}
          onChange={handleOnDateChange}
        />
      )}
    </Container>
  );
}

DateInput.defaultProps = {
  onChange: null,
};

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func,
};
