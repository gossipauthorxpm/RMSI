import React from 'react';
import NameSite from "./NameSite";
import Navigation from "./Navigation";
/**
 * Component responds for Header tag displays
 * Includes NameSite component and Navigation component.<br/>
 *
 * Компонент отвечает за отображение тега заголовка
 * Включает компонент NameSite и компонент Navigation.
 * */
class Header extends React.Component{
    render() {
        return <header className={'header'}>
            <div className={'header-container'}>
            <NameSite/>
            <Navigation/>
            </div>
        </header>
    }
}
export default Header;