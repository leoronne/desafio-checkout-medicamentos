import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';

import { useLanguage } from '../../hooks/useLanguage';

import { useStyles, Select } from '../../styles/MaterialUI';

import { ReactComponent as BrazilIcon } from '../../assets/svg/brazil.svg';
import { ReactComponent as USAIcon } from '../../assets/svg/usa.svg';

import logo from '../../assets/img/logo-horizontal-white.png';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './styles';

const Header: React.FC = () => {
  const { language, changeLanguage } = useLanguage();
  const classes = useStyles();

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h1>
          <Link to="/">
            <img src={logo} alt="Memed" />
          </Link>
        </h1>
      </HeaderLeft>

      <HeaderRight>
        <Select
          value={language}
          onChange={e => changeLanguage(String(e.target.value))}
          MenuProps={{ classes: { paper: classes.selectOptions } }}
          inputProps={{ 'data-testid': 'language-select' }}
        >
          <MenuItem value="en">
            <USAIcon />
            <span>English (United States)</span>
          </MenuItem>
          <MenuItem value="pt">
            <BrazilIcon />
            <span>Português (Brasil)</span>
          </MenuItem>
        </Select>
      </HeaderRight>
    </HeaderWrapper>
  );
};

export default Header;
