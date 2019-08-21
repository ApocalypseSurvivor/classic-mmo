import React from 'react'
import moment from 'moment'
import { withRouter } from 'react-router'

import Counter from './Counter'
import Options from './Options'
import Logo from '../images/classic-mmo.gif'
import Signup335 from '../images/signup-wow335.jpg'

const rand = (min, max) => Math.floor( (Math.random() * (max - min + 1) ) + min)

const svgFoo = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI2IDI2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNiAyNiIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CiAgPGc+CiAgICA8cGF0aCBkPSJNMjUuNyw4LjNDMjIuNCw1LDE4LDMsMTMsM1MzLjUsNSwwLjMsOC4zQzAuMSw4LjUsMCw4LjcsMCw5YzAsMC4zLDAuMSwwLjUsMC4zLDAuN2wxLjQsMS40YzAuNCwwLjQsMSwwLjQsMS40LDAgICBDNS42LDguNiw5LjEsNywxMyw3czcuNCwxLjYsOS45LDQuMWMwLjQsMC40LDEsMC40LDEuNCwwbDEuNC0xLjRDMjUuOSw5LjUsMjYsOS4zLDI2LDlTMjUuOSw4LjQsMjUuNyw4LjN6IiBmaWxsPSIjMDAwMDAwIi8+CiAgICA8cGF0aCBkPSJtMTMsMTFjLTIuOCwwLTUuMiwxLjEtNywyLjktMC40LDAuNC0wLjQsMSAwLDEuNGwxLjQsMS40YzAuNCwwLjQgMSwwLjQgMS40LDAgMS4xLTEuMSAyLjYtMS43IDQuMi0xLjcgMS42LDAgMy4xLDAuNyA0LjIsMS43IDAuNCwwLjQgMSwwLjQgMS40LDBsMS40LTEuNGMwLjQtMC40IDAuNC0xIDAtMS40LTEuOC0xLjgtNC4yLTIuOS03LTIuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgIDxjaXJjbGUgY3g9IjEzIiBjeT0iMjEiIHI9IjIiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+Cjwvc3ZnPgo="

//  <div>Icons made by <a href="https://www.flaticon.com/authors/eleonor-wang" title="Eleonor Wang">Eleonor Wang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>




class Login extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      canvas: null,
      ctx: null,
      blips: [],
      tick: 80,
    }  //  state
  }  //  constructor

  showOptions = (e) => {
    this.setState({showOptions: true})
  }  //  showOptions

  hideOptions = (e) => {
    this.setState({showOptions: false})
  }  //  hideOptions

  resize = () => {
    let {canvas} = this.state
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    this.setState({ canvas: canvas })
  }  //  resize

  componentDidMount() {
    let {canvas, ctx} = this.state
    document.body.style.backgroundColor = 'black'
    /*
    canvas = document.getElementById('screen').appendChild(document.createElement('canvas'))
    canvas.style.position = 'absolute'
    canvas.style.left = 0
    canvas.style.top = 0
    canvas.style.zIndex = -1
    canvas.width = window.innerWidth  //  / divider
    canvas.height = window.innerHeight  //  / divider
    ctx = canvas.getContext('2d')
    window.addEventListener( 'orientationchange', this.resize )
    window.addEventListener( 'resize', this.resize )

    this.setState({ canvas: canvas, ctx: ctx }, this.run )
    */

    let punk = document.getElementById('screen').appendChild(document.createElement('img'))
    punk.src = Signup335
    punk.style.position = 'absolute'
    punk.style.left = 0
    punk.style.top = 0
    punk.style.zIndex = -1
    punk.width = window.innerWidth  //  / divider
    punk.height = window.innerHeight  //  / divider


  }  //  componentDidMount

  //  Idea from CoffeeScript Snipit
  //  https://codepen.io/jackrugile/pen/hgdzl?page=1
  run = () => {
    let {blips, tick, ctx, canvas } = this.state

    //clear
    ctx.globalCompositeOperation = 'destination-out'
    ctx.fillStyle = 'hsla(0, 0%, 0%, .05)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.globalCompositeOperation = 'lighter'
    //clear

    blips = blips.reduce( (list, blip) => {
      const percent = ( blip.rMax - blip.r) / blip.rMax
      blip.rGrowth = .1 + blip.rGrowthBase * percent
      blip.r += blip.rGrowth
      blip.alpha = percent
      if (blip.r < blip.rMax) list.push(blip)
      return list
    }, [] )  //  reduce  //  update

    //tick = (tick > (360-80)) ? 80 : tick
    blips.forEach((blip) => {
      ctx.beginPath()
      ctx.arc( blip.x, blip.y, blip.r, 0, Math.PI * 2, false )
      ctx.fillStyle = 'hsla(' + rand( tick - 80, tick + 80 ) + ', 50%, 1%, ' + blip.alpha + ')'
      ctx.fill()
    })  //  forEach  //  render
    tick++

    blips.push({
      x: rand(0, canvas.width),
      y: rand(0, canvas.height),
      r: .1,
      rGrowthBase: 1,
      rGrowth: 1,
      rMax: (canvas.width + canvas.height)/12,
      alpha: 1,
    })

    this.setState({ blips: blips, tick: tick }, () => {
      window.requestAnimationFrame( this.run )
    } )

  }  //  run

  render() {
    const version_number = '0.0.1'
    const build_number = 123456
    const build_cycle = 'alpha'
    const build_date = moment().format('YYYY MM Do')
    const realm_name = 'Arcadia'
    //const logo = ''
    return (
      <div id="screen">
        {
          this.state.showOptions && <Options/>
        }
        <div className="row m-0 pb-3">
          <img src={svgFoo} alt="logo" className="img_fluid logo"/>
          <div className="w-100"></div>
          <div className="col-md align-self-end">
            <div className="alert alert-primary">
              <h2>MOTD</h2>
              <p>Now is the time for all good men to come to the aid of their country.</p>
            </div>
            <a href="/account" className="btn btn-primary w-100">Manage Account</a>
            <a href="/community" className="btn btn-primary w-100">Community Site</a>
            <small className="text-muted">Version {version_number} ({build_number}) ({build_cycle}) {build_date}</small>
          </div>
          <div className="row col-md-7 mx-auto justify-content-center align-self-center">
                <div className="w-100"></div>
                <label className="label-gold" htmlFor="username">Account Name</label>
                <div className="w-100"></div>
                <input className="col-md-5" type="text" id="username"/>
                <div className="w-100"></div>
                <label className="label-gold" htmlFor="password">Password</label>
                <div className="w-100"></div>
                <input className="col-md-5" type="password" id="password"/>
          </div>
          <div className="col-md align-self-end">
            <a href="#Options" className="btn btn-primary w-100" onClick={this.showOptions}>Options</a>
            <a href="/credits" className="btn btn-primary w-100">Credits</a>
            <a href="/terms" className="btn btn-primary w-100">Terms of Use</a>
            <small className="text-muted">{realm_name}</small>
            <Counter/>
            <a href="/home" className="btn btn-primary w-100">Quit</a>
          </div>
        </div>
      </div>
    )  //  return
  }  //  render
}  //  Maude
export default withRouter(Login)
