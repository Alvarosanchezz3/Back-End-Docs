import { Routes } from '@angular/router';
import { ImagenesComponent } from './components/componentes-docker/imagenes/imagenes.component';
import { DockerComoEmpezarComponent } from './components/componentes-docker/docker-como-empezar/docker-como-empezar.component';
import { ContenedoresComponent } from './components/componentes-docker/contenedores/contenedores.component';
import { RedesComponent } from './components/componentes-docker/redes/redes.component';
import { DockerComposeComponent } from './components/componentes-docker/docker-compose/docker-compose.component';
import { ComandosDockerComponent } from './components/componentes-docker/comandos-docker/comandos-docker.component';
import { SpringComoEmpezarComponent } from './components/componentes-spring/spring-como-empezar/spring-como-empezar.component';
import { HomeComponent } from './components/home/home.component';
import { AwsComoEmpezarComponent } from './components/componentes-aws/aws-como-empezar/aws-como-empezar.component';
import { AwsCrearCuentaComponent } from './components/componentes-aws/aws-crear-cuenta/aws-crear-cuenta.component';
import { AwsServicioS3Component } from './components/componentes-aws/aws-servicio-s3/aws-servicio-s3.component';
import { S3CreacionProyectoComponent } from './components/componentes-aws/s3-creacion-proyecto/s3-creacion-proyecto.component';
import { SpringWebComoEmpezarComponent } from './components/componentes-spring/spring-web-components/spring-web-como-empezar/spring-web-como-empezar.component';
import { SpringWebApiRestBasicaComponent } from './components/componentes-spring/spring-web-components/spring-web-api-rest-basica/spring-web-api-rest-basica.component';
import { ValidacionJavaBeanValidationComponent } from './components/componentes-spring/spring-web-components/validacion-java-bean-validation/validacion-java-bean-validation.component';
import { MsgsValidacionPersComponent } from './components/componentes-spring/spring-web-components/msgs-validacion-pers/msgs-validacion-pers.component';
import { ValidacionPersonalizadaComponent } from './components/componentes-spring/spring-web-components/validacion-personalizada/validacion-personalizada.component';
import { AnotacionesPersComponent } from './components/componentes-spring/spring-web-components/anotaciones-pers/anotaciones-pers.component';
import { SpringSecurityComoEmpezarComponent } from './components/componentes-spring/spring-security-components/spring-security-como-empezar/spring-security-como-empezar.component';
import { SpringSecurityProyectoBaseComponent } from './components/componentes-spring/spring-security-components/spring-security-proyecto-base/spring-security-proyecto-base.component';
import { SpringSecurityComponentesClaveComponent } from './components/componentes-spring/spring-security-components/spring-security-componentes-clave/spring-security-componentes-clave.component';
import { SpringSecurityAutenticacionComponent } from './components/componentes-spring/spring-security-components/spring-security-autenticacion/spring-security-autenticacion.component';
import { SpringSecurityFiltrosSeguridadComponent } from './components/componentes-spring/spring-security-components/spring-security-filtros-seguridad/spring-security-filtros-seguridad.component';
import { SpringSecurityAutorizacionComponent } from './components/componentes-spring/spring-security-components/spring-security-autorizacion/spring-security-autorizacion.component';
import { SpringSecurityCorsComponent } from './components/componentes-spring/spring-security-components/spring-security-cors/spring-security-cors.component';
import { MsvcsComoEmpezarComponent } from './components/componentes-msvcs/msvcs-como-empezar/msvcs-como-empezar.component';
import { EurekaServerComponent } from './components/componentes-msvcs/eureka-server/eureka-server.component';
import { SpringCloudGatewayReactiveComponent } from './components/componentes-msvcs/spring-cloud-gateway-reactive/spring-cloud-gateway-reactive.component';
import { ConfigServerComponent } from './components/componentes-msvcs/config-server/config-server.component';
import { OpenFeignComponent } from './components/componentes-msvcs/open-feign/open-feign.component';
import { KafkaComoEmpezarComponent } from './components/componentes-kafka/kafka-como-empezar/kafka-como-empezar.component';
import { KafkaIniciarServidorComponent } from './components/componentes-kafka/kafka-iniciar-servidor/kafka-iniciar-servidor.component';
import { KafkaSpringBootComponent } from './components/componentes-kafka/kafka-spring-boot/kafka-spring-boot.component';

export const routes: Routes = [
    {path:"", redirectTo: "home", pathMatch: 'full'},
    {path:"home", component: HomeComponent},
    
    {path: "spring/como-empezar", component: SpringComoEmpezarComponent},

    {path: "spring/spring-web/como-empezar", component: SpringWebComoEmpezarComponent},
    {path: "spring/spring-web/api-rest-básica", component: SpringWebApiRestBasicaComponent},
    {path: "spring/spring-web/validación-java-bean-validation", component: ValidacionJavaBeanValidationComponent},
    {path: "spring/spring-web/mensajes-validación-personalizados", component: MsgsValidacionPersComponent},
    {path: "spring/spring-web/validación-personalizada", component: ValidacionPersonalizadaComponent},
    {path: "spring/spring-web/anotaciones-personalizadas", component: AnotacionesPersComponent},

    {path: "spring/spring-security/como-empezar", component: SpringSecurityComoEmpezarComponent},
    {path: "spring/spring-security/proyecto-base", component: SpringSecurityProyectoBaseComponent},
    {path: "spring/spring-security/componentes-clave", component: SpringSecurityComponentesClaveComponent},
    {path: "spring/spring-security/autenticación", component: SpringSecurityAutenticacionComponent},
    {path: "spring/spring-security/filtros-de-seguridad", component: SpringSecurityFiltrosSeguridadComponent},
    {path: "spring/spring-security/autorización", component: SpringSecurityAutorizacionComponent},
    {path: "spring/spring-security/cors", component: SpringSecurityCorsComponent},

    {path: "docker/como-empezar", component: DockerComoEmpezarComponent},
    {path: "docker/imágenes", component: ImagenesComponent},
    {path: "docker/contenedores", component: ContenedoresComponent},
    {path: "docker/redes", component: RedesComponent},
    {path: "docker/comandos-más-importantes", component: ComandosDockerComponent},
    {path: "docker/docker-compose", component: DockerComposeComponent},

    {path: "aws/como-empezar", component: AwsComoEmpezarComponent},
    {path: "aws/crear-cuenta", component: AwsCrearCuentaComponent},
    {path: "aws/servicio-s3/como-empezar", component: AwsServicioS3Component},
    {path: "aws/servicio-s3/CRUD-usando-S3", component: S3CreacionProyectoComponent},

    {path: "microservicios/como-empezar", component: MsvcsComoEmpezarComponent},
    {path: "microservicios/spring-cloud-netflix-eureka-server", component: EurekaServerComponent},
    {path: "microservicios/spring-cloud-gateway-reactive", component: SpringCloudGatewayReactiveComponent},
    {path: "microservicios/spring-cloud-config", component: ConfigServerComponent},
    {path: "microservicios/open-feign", component: OpenFeignComponent},

    {path: "apache-kafka/como-empezar", component: KafkaComoEmpezarComponent},
    {path: "apache-kafka/iniciar-servidor", component: KafkaIniciarServidorComponent},
    {path: "apache-kafka/spring-boot", component: KafkaSpringBootComponent},
];