# Validación IA - Análisis del Backlog

**Prompt usado en Claude.ai:**
> "Identifica requisitos ambiguos, contradictorios e implícitos que faltan."

---

## Requisitos Ambiguos

| ID | Problema detectado |
|----|--------------------|
| HU-03 | "Próximo a vencer" no está definido. ¿Con cuántos días de anticipación se envía la notificación? ¿1 día, 2 días, 3 días? Necesita un valor concreto. |
| HU-05 | "Si no hay reservas pendientes" es ambiguo. ¿Quién verifica eso, el sistema automáticamente o el bibliotecario? ¿Cuántas veces se puede renovar? |
| HU-07 | "Multa si hay retraso" no especifica la tarifa. ¿El sistema la toma de una configuración? ¿Puede cambiar? ¿Aplica igual a docentes que a estudiantes? |
| HU-10 | "Reportes mensuales" no indica el formato de salida (PDF, Excel, pantalla) ni quién puede generarlos además del director. |
| HU-12 | La HU-12 dice que los docentes pueden pedir préstamos por 30 días, pero no aclara si también aplica el límite de un ejemplar por título. |

---

## Requisitos Contradictorios

| IDs en conflicto | Contradicción detectada |
|------------------|------------------------|
| HU-06 vs HU-01 | HU-06 habla de escanear el carné del estudiante, pero HU-01 y HU-04 implican que el portal web también permite acciones sin presencia física. No queda claro si el préstamo puede iniciarse 100% en línea o solo en persona. |
| HU-14 vs HU-15 | HU-14 implica que el sistema verifica matrícula activa antes del préstamo, pero HU-15 permite pagar multas en línea. Un estudiante inactivo con deuda pendiente debería poder pagar, lo cual contradice el bloqueo de HU-14. |
| HU-03 vs HU-09 | Ambas historias hablan de notificaciones: HU-03 es para el estudiante antes del vencimiento, HU-09 es del bibliotecario para préstamos ya vencidos. Se superponen y no queda claro si el sistema envía ambas o solo una. |

---

## Requisitos Implícitos que Faltan

| # | Requisito implícito no documentado |
|---|-------------------------------------|
| 1 | **Autenticación y seguridad:** Ninguna historia menciona cómo los usuarios inician sesión. ¿Usuario y contraseña? ¿Integración con el sistema universitario SSO? |
| 2 | **Límite de préstamos simultáneos:** No se documenta cuántos libros puede tener prestados un estudiante al mismo tiempo. |
| 3 | **Gestión de inventario:** No hay historia para agregar, editar o dar de baja libros del catálogo. El Director mencionó 40,000 ejemplares pero nadie los administra en el sistema. |
| 4 | **Cancelación de reservas:** HU-02 permite reservar pero ninguna historia permite cancelar una reserva ya hecha. |
| 5 | **Tiempo de retención de reserva:** Si el estudiante reservó un libro y no lo recoge, ¿cuánto tiempo se mantiene la reserva antes de liberarse? |
| 6 | **Historial de préstamos:** El Director mencionó que no tienen historial del comportamiento de los estudiantes, pero ninguna HU documenta ver el historial propio ni el del bibliotecario. |

---
