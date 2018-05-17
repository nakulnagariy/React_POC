import React from 'react'
import { render } from 'react-dom'

//import { SkiDayCount, Toggle, Nakul } from './components/SkiDayCount'
import { Body } from './components/Body/stats'
import { Header } from './components/Header/header'
import { Footer } from './components/Footer/footer'
import { BasicExample } from './components/Routing/routingExample1'

window.React = React;


render (
  [<Header />,
    <BasicExample />,
    <Body />,
  <Footer name = "footer"/>],
  document.getElementById('react-container')
)