import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { logout } from '../../redux/actions/usuario_actions';
import MenuUsuario from '../Usuario/menu_usuario';
import BadgeNotificaciones from '../Usuario/Notificaciones';

class Header extends Component {
  state = {
    publicos: [
      {
        nombre: 'Inicio',
        linkTo: '/'
      },
      {
        nombre: 'Ingresar',
        linkTo: '/ingresar'
      },
      {
        nombre: 'Nosotros',
        linkTo: '/nosotros'
      }
    ],
    privados: [
      {
        nombre: '',
        linkTo: '/perfil'
      },
      {
        nombre: 'Salir',
        linkTo: '/ingresar'
      }
    ]
  }

  renderNotif = () => {
    if (this.props.usuario.usuarioDatos) {
      if (this.props.usuario.usuarioDatos.isAuth && this.props.usuario.usuarioDatos.esProfesional) {
        return (
          <li>
            <BadgeNotificaciones />
          </li>
        )
      }
    }
  }

  renderNavs = () => {
    let list = [];

    if (this.props.usuario.usuarioDatos) {
      if (!this.props.usuario.usuarioDatos.isAuth) {
        this.state.publicos.forEach(item => {
          list.push(item);
        })
      } else {
        this.state.privados.forEach(item => {
          list.push(item)
        })
      }

      return list.map((item, i) => {
        if (item.nombre !== '') {
          return this.defaultLink(item, i);
        } else {
          return this.nombreLink(item, i)
        }
      })
    }
  }

  defaultLink = (item, i) => (
    item.nombre === 'Salir' ?
      <li className="nav-item" key={i}>
          <a href="#" onClick={() => {this.handlerLogout()}} className="nav-link">{item.nombre}</a>
      </li>

    : 
    <li className="nav-item" key={i}>
      <Link to={item.linkTo} className="nav-link">{item.nombre}</Link>
    </li>
  )

  nombreLink = (item, i) => {
    return (
      <li className="nav-item" key={i}>
        <MenuUsuario usuario={this.props.usuario.usuarioDatos}/>
      </li>
    )  
  }

  handlerLogout = () => {
    this.props.dispatch(logout()).then(res => {
      this.props.history.push('/ingresar');
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-white">
          <Link to="/" className="navbar-brand">
              <div className="LogoHeader">redemplear</div>
          </Link>
          <ul className="nav justify-content-end">
            { this.renderNotif() }
            { this.renderNavs() }
          </ul>
        </nav>
        <hr className="my-auto flex-grow-1" style={{borderColor: "#CEECF5"}} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    usuario: state.usuario
  }
}

export default connect(mapStateToProps)(withRouter(Header));