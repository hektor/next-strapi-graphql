import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const GCAL_ID = process.env.GCAL_ID
const GCAL_API_KEY = process.env.GCAL_API_KEY

export default () => {
	const [events, setEvents] = useState([])

	useEffect(() => {
		getEvents()
	}, [])

	const getEvents = () => {
		fetch(
			`https://content.googleapis.com/calendar/v3/calendars/${GCAL_ID}/events?key=${GCAL_API_KEY}`
		)
			.then(res => res.json())
			.then(res => {
        const events = []
        if (!res) throw Error('Could not get calendar events');
        res.items.map(({start, end, summary}) => {
					events.push({
						start: start.date || start.dateTime,
						end: end.date || end.dateTime,
						title: summary
					})
        })
        console.log(events)
				setEvents(events)
			})
	}

	return (
    <Calendar
    	localizer={localizer}
    	events={events}
    	startAccessor="start"
    	endAccessor="end"
    	style={{flex: 1}}
    />
	)
}
