import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Inbox,
  Star,
  ListAlt,
  Label,
  People,
  PowerSettingsNew,
  Refresh,
  Autorenew
} from '@material-ui/icons';

const icons = {
  inbox: Inbox,
  star: Star,
  list_alt: ListAlt,
  label: Label,
  people: People,
  power_off: PowerSettingsNew,
  refresh: Refresh,
  autorenew: Autorenew
};

const Icon = ({ name, color, size }) => {
  const _Icon = icons[name];

  return (
    <_Icon
      style={{
        color: color,
        fontSize: size
      }}
    />
  );
};

export default Icon;

Icon.propTypes = {};
