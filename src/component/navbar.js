import React from 'react'
export default function navbar() {

  return (
    <div>
      <nav className="navbar navbar-light bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://th.bing.com/th/id/R.d8c10ced4c324b34408dda90292e48c2?rik=hLutIkyyLdbkMw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fiynque%2fios7-style%2f1024%2fWeather-icon.png&ehk=gA92r%2fgxkM24%2f0TYtSFkMie4BkV1Samb0ZYBjpJMqpQ%3d&risl=&pid=ImgRaw&r=0" alt="logo" width="30" height="24" className="d-inline-block align-text-top" />
            <strong>WeatherCast</strong>
          </a>
        </div>
      </nav>
    </div>
  )
}
