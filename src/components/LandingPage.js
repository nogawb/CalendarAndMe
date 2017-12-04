import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom'; //React router

import { AppBarButton } from './UserAuth';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

export default class LandingPage extends Component {
  render() {

    const styles = StyleSheet.create({
      center: {
        textAlign: 'center'
      }
    });


    return (
      <div>
        <AppBar
          title={"Calendar & Me"}
          showMenuIconButton={false}
          iconElementRight={<AppBarButton link='login' />}
        />
        <div className={css(styles.center)}>

          <h1>{'Calendar & Me'}</h1>

          <Divider />

          <p>Some sentence about signing up today</p>
          <Link to='/join' >
            <RaisedButton
              label="Get Started"
              primary={true} />
          </Link>

        </div>
      </div>
    );
  }
}
