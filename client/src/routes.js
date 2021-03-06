import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Permisos from './components/Usuario/permisos_de_usuario';
import NotFound from './components/Utilidades/not_found';
import Home from './components/Home/home';
import Main from './components/Main';
import Ingresar from './components/Registro_Ingresar/ingresar';
import RegistroProfesional from './components/Registro_Ingresar/registro_profesional';
import RegistroEmpleador from './components/Registro_Ingresar/registro_empleador';
import Perfil from './components/Usuario/MiPerfil';
import Nosotros from './components/Nosotros/nosotros';
import MiCurriculum from './components/Usuario/MiCurriculum';
import BuscarProfesionales from './components/Usuario/BuscarProfesionales';
import CrearEmpleo from './components/Usuario/CrearEmpleo';
import PostularProfesional from './components/Usuario/BuscarProfesionales/postular_profesional';
import GestionEmpleos from './components/Usuario/GestionEmpleos';
import NotificacionDetalle from './components/Usuario/Notificaciones/notificacion_detalle';
import BuscarTrabajo from './components/Usuario/BuscarTrabajo';
import MisEmpleos from './components/Usuario/MisEmpleos';

const Routes = () => {
  return (
    <Main>
      <Switch>
        {/*RUTAS PUBLICAS*/}
        <Route path="/" exact component={Permisos(Home, null)} />
        <Route path="/ingresar" exact component={Permisos(Ingresar, false)} />
        <Route path="/registro_profesional" exact component={Permisos(RegistroProfesional, false)} />
        <Route path="/registro_empleador" exact component={Permisos(RegistroEmpleador, false)} />
        <Route path='/nosotros' exact component={Permisos(Nosotros, null)} />
        {/*RUTAS PRIVADAS*/}
        <Route path="/perfil" exact component={Permisos(Perfil, true)} />
        {/*RUTAS PROFESIONALES*/}
        <Route path="/curriculum" exact component={Permisos(MiCurriculum, true, true)} />
        <Route path="/notificacion/:id" exact component={Permisos(NotificacionDetalle, true, true)} />
        <Route path="/buscar_empleos" exact component={Permisos(BuscarTrabajo, true, true)} />
        <Route path="/mis_empleos" exact component={Permisos(MisEmpleos, true, true)} />
        {/*RUTAS EMPLEADOR*/}
        <Route path="/buscar_profesionales" exact component={Permisos(BuscarProfesionales, true, null, true)} />
        <Route path="/crear_empleo" exact component={Permisos(CrearEmpleo, true, null, true)} />
        <Route path="/postular/:id" exact component={Permisos(PostularProfesional, true, null, true)} />
        <Route path="/gestionar_empleos" exact component={Permisos(GestionEmpleos, true, null, true)} />

        <Route component={Permisos(NotFound)} />
      </Switch>
    </Main>
  )
}

export default Routes;
