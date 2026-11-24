# VetLog

Análisis y diseño de una plataforma web de gestión veterinaria. Proyecto de título del Técnico en Programación y Análisis de Sistemas (AIEP).

## Problemática

Muchas clínicas veterinarias pequeñas gestionan sus reservas, agendas, fichas clínicas e inventario con métodos manuales o herramientas no especializadas. Esto genera información fragmentada, registros duplicados, conflictos de agenda, poca trazabilidad y dificultades para avisar a tiempo cambios o recordatorios a los clientes.

## Solución propuesta

VetLog es una plataforma web que centraliza los procesos principales de una clínica veterinaria pequeña que atiende perros y gatos:

- Acceso y autorización por roles: cliente, recepcionista, veterinario y administrador.
- Gestión de clientes y mascotas.
- Reserva, modificación y cancelación de horas.
- Agendas de especialistas.
- Fichas clínicas con acceso controlado.
- Inventario clínico básico.
- Registro de cambios para la trazabilidad.

## Alcance

El proyecto se trabaja en dos etapas:

### 1. Análisis y diseño (proyecto de título)

- Requisitos funcionales y no funcionales, reglas de negocio e historias de usuario.
- Procesos de negocio en BPMN 2.0.
- Casos de uso, diagramas de secuencia y diagrama de clases (UML).
- Modelo entidad-relación y diccionario de datos.
- Prototipo de interfaz (MVP).
- Seguridad, privacidad, riesgos, presupuesto y carta Gantt.

### 2. Desarrollo (continuación del equipo)

- Implementación del frontend en React y del backend en NestJS.
- Base de datos en PostgreSQL a partir del modelo diseñado.
- Pruebas basadas en los casos de prueba definidos en el diseño.

VetLog es un caso académico: no usa datos personales ni clínicos reales.

## Arquitectura propuesta

Patrón MVC (Modelo-Vista-Controlador):

- **Vista:** React
- **Controlador:** NestJS
- **Modelo y datos:** PostgreSQL

## Metodología

RUP, para estructurar el análisis, los artefactos y su trazabilidad.

## Estructura del repositorio

```
VetLog/
├── docs/        ← entregables e informes
├── diagramas/   ← BPMN, UML y modelo de datos
└── prototipo/   ← prototipo de interfaz
```

## Equipo

- **Lorena Ramos Fuentes:** jefa de proyecto, diseño UI/UX y frontend, QA y trazabilidad.
- **Luis Huerta Jiménez:** análisis de requisitos, arquitectura, modelo de datos y backend.