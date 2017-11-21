import React, { Component } from 'react';

import firebase from 'firebase/app';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {events: {}};
  }

  componentDidMount() {
    // Gets a reference to the firebase events so that when they change, 
    // they also change the current state.

    this.eventsRef = firebase.database().ref('events');
    this.eventsRef.on('value', (snapshot) => {
      this.setState({events: snapshot.val()})
    });
  }

  componentWillUnmount() {
    // Closes the listener when a client is about to leave
    this.eventsRef.off();
  }

  render() {
    let eventIds = Object.keys(this.state.events);
    let events = eventIds.map((id) => {
      let event = this.state.events[id];
      event.id = id;
      return event;
    });

    return (
      <div className="container">
        <p className="lead">My events</p>
        <EventList
          events={events}
          />
      </div>
    );
  }
}

class EventList extends Component {
  render() {

    if(this.props.events == null) {
      return (
        <p>You don't have any events</p>
      );
    }

    //Create the array of event items using <Event> Components
    let eventItemsArray = this.props.events.map((event) => {
      return (<Event 
        key={event.id}
        summary={event.summary} />
      );
    });

    return (
      <ol>
        {eventItemsArray}
      </ol>
    );
  }
}

class Event extends Component {

  render() {
    return (
      <li>
        {this.props.summary}
      </li>
    );
  }
}

export default App;