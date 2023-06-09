import React, { useContext } from 'react';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';// essa bibli mexe com cores, o shade escurece

import { Container } from './styles';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

    const { colors, title } = useContext(ThemeContext);

    return(
        <Container>
            Name

            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                onColor={colors.secundary}
                offColor={shade(0.15, colors.primary)}
            />
        </Container>
    );
};

export default Header