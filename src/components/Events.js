import React, { useEffect, useState } from 'react';

import EditEvent from './EditEvents';
import AddEvents from './AddEvents';

const Events = (props) => {
    const [eventData, setEventsData] = useState([]);

    const deleteEvents = async (id) => {
        try {
            const deleteData = await fetch(`http://157.245.184.202:8080/deleteEvent/${id}`, {
                method: 'DELETE'
            })
            setEventsData(eventData.filter(event => event.id !== id))
        } catch (error) {
            console.error(error.message);
        }
    }

    const getEvents = async () => {
        try {
            const response = await fetch('http://157.245.184.202:8080/calendar')
            const jsonData = await response.json()

            setEventsData(jsonData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getEvents();
    }, [])
    return (
        <div>
            <h1 className="events-section">Events</h1> 
           
            <AddEvents/>
            {eventData.length === 0 ? <h1 className="text-center mt-5 mb-5 text-white">There is not events yet!{'😌'}</h1> : (
                eventData.map(event => {
                    return (

                        <div className="card mb-5" key={event.id} >

                            <div className="card-body text-left" >
                                <h5 className="card-title">{event.description}</h5>
                                <p className="card-text ">{event.notes}</p>
                                <p><strong>Location:</strong> {event.location}</p>
                                <p><strong>From: </strong> {event.duration}</p>
                                <p><strong>Start Date:</strong> {event.start_date}</p>
                                <p> <strong>End Date:</strong> {event.end_date}</p>
                                <div className=" card-link btn-group">
                                    <EditEvent event={event} props={props} />
                                </div>
                                <button
                                    type="button"
                                    className="card-link btn btn btn-danger"
                                    onClick={() => deleteEvents(event.id)}>Delete</button>
                            </div>
                        </div>

                    )
                })
            )}
           
        </div>
    )
}

export default Events;