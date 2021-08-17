# Thinkful Final Capstone: "Periodic Tables" 
## A Restaurant Reservation System
Created by Colin Lawrence 
(Web Developer based in Los Angeles)

> The Periodic Tables application software is a reservation system for fine dining restaurants designed for managing multiple daily and future reservations, and seating parties accordingly. 
> The software is designed for restaurant personnel use only. At this point, customers will not access the system online.

<hr>


## Key Features

* View all reservations for the current day, or a date in the future
* Create and edit reservations (name, date, time, mobile-number, party-size)
* Assign a reservation to a specific table
* Clear a table in the system when the reservation leaves
* Search for reservations by mobile number
* Cancel a reservation

<hr>


## Tech

### Frontend: 
* Javascript 
* React.js
* HTML5 
* Bootstrap 
* CSS3 

### Backend: 
* Node.js 
* Express.js 
* PostgreSQL
* DBeaver

<hr>


## Screenshots
### Dashboard:
![Dashboard Page](/github-images/screenshots/dashboard-screenshot.png)
### Search (before):
![Search Page](/github-images/screenshots/search-before-screenshot.png)
### Search (after):
![Search Page](/github-images/screenshots/search-after-screenshot.png)
### New Reservation:
![New Reservation Page](/github-images/screenshots/new-reservation-screenshot.png)
### New Table:
![New Table Page](/github-images/screenshots/new-table-screenshot.png)
### Choose Table:
![Choose Table Page](/github-images/screenshots/choose-table-screenshot.png)

<hr>


## Front-end Structure - React Components Map
* __Index.js__ (stateless)
    * __App.js__ (stateless)
        * __Layout.js__ (stateless)
            * __Menu.js__ (stateless)
                * __ReservationRow.js__ (stateful)
                * __TableRow.js__ (stateful)
            * __Routes.js__ (stateful)
                * __NewReservation.js__ (stateful)
                * __SeatReservation.js__ (stateful)
                * __NewTable.js__ (stateful)
                * __Dashboard.js__ (stateful)
                * __Search.js__ (stateful)
                * __NotFound.js__ (stateless)

<hr>


## API Documentation

| Endpoint                               | Method | Description                                                                                           |
| -------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| `/reservations`                        | GET    | Gets all of the reservations. |
| `/reservations`                        | POST   | Creates a new reservation.                                                                            |
| `/reservations/:reservation_id`        | GET    | Gets the reservation corresponding to 'reservation_id'.                                               |
| `/reservations/:reservation_id`        | PUT    | Updates the reservation corresponding to 'reservation_id'.                                            |
| `/reservations/:reservation_id/status` | PUT    | Updates the reservation status.                                                                       |
| `/tables`                              | GET    | Gets all of the tables.                                                                               |
| `/tables`                              | POST   | Creates a table.                                                                                      |
| `/tables/:tableId/seat`                | PUT    | Assigns a reservation to a table.                                                                     |
| `/tables/:tableId/seat`                | DELETE | Frees a table for future reservations

<hr>


## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* Added styling
* More options clearing table IDs from dashboard
* Customer access to online version



