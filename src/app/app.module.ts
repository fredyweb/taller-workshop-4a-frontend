import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarTipoInmuebleComponent } from './modulos/administración/tipoInmueble/listar-tipo-inmueble/listar-tipo-inmueble.component';
import { CrearTipoInmuebleComponent } from './modulos/administración/tipoInmueble/crear-tipo-inmueble/crear-tipo-inmueble.component';
import { EditarTipoInmuebleComponent } from './modulos/administración/tipoInmueble/editar-tipo-inmueble/editar-tipo-inmueble.component';
import { EliminarTipoInmuebleComponent } from './modulos/administración/tipoInmueble/eliminar-tipo-inmueble/eliminar-tipo-inmueble.component';
import { ListarInmuebleComponent } from './modulos/administración/inmueble/listar-inmueble/listar-inmueble.component';
import { CrearInmuebleComponent } from './modulos/administración/inmueble/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './modulos/administración/inmueble/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './modulos/administración/inmueble/eliminar-inmueble/eliminar-inmueble.component';
import { EncabezadoComponent } from './pagina-maestra/encabezado/encabezado.component';
import { PiePaginaComponent } from './pagina-maestra/pie-pagina/pie-pagina.component';
import { InicioComponent } from './pagina-maestra/inicio/inicio.component';
import { ErrorComponent } from './pagina-maestra/error/error.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarTipoInmuebleComponent,
    CrearTipoInmuebleComponent,
    EditarTipoInmuebleComponent,
    EliminarTipoInmuebleComponent,
    ListarInmuebleComponent,
    CrearInmuebleComponent,
    EditarInmuebleComponent,
    EliminarInmuebleComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
