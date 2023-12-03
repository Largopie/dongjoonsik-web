import { CalendarMonthRounded, HomeRounded, SettingsRounded } from '@mui/icons-material';
import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  background-color: #e8e8e8;
`;

const MenuItem = styled(Tab)`
  flex: 1;
  padding-bottom: 36px !important;
`;

const StyledTabs = styled(Tabs)`
  width: 100%;
  display: flex;
  span {
    background-color: transparent;
  }
`;

export default function NavigationBar() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const onChange = (_: React.SyntheticEvent , newValue: string) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  }

  return (
    <Menu>
      <StyledTabs value={value} onChange={onChange}>
        <MenuItem icon={<HomeRounded />} label='홈' value=''/>
        <MenuItem icon={<CalendarMonthRounded />} label='식단표' value='meal-schedule'/>
        <MenuItem icon={<SettingsRounded />} label='설정' value='settings'/>
      </StyledTabs>
    </Menu>
  );
}
