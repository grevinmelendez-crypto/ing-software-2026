# Criterios de Aceptación - Gherkin
## 5 Historias Prioritarias

---

## HU-06 — Registrar préstamo (Bibliotecario)

```gherkin
Feature: Registro de préstamo de libro

  Scenario: Préstamo exitoso con carné y libro válidos
    Given el bibliotecario está autenticado en el sistema
    And el estudiante tiene matrícula activa
    And el libro está disponible en inventario
    When el bibliotecario escanea el carné del estudiante y el código del libro
    Then el sistema registra el préstamo con la fecha actual y fecha de vencimiento en 7 días
    And el estado del libro cambia a "Prestado"
    And se genera un comprobante de préstamo

  Scenario: Préstamo rechazado por multa pendiente
    Given el estudiante tiene una multa sin pagar
    When el bibliotecario intenta registrar el préstamo
    Then el sistema muestra el mensaje "El estudiante tiene multas pendientes. No se puede realizar el préstamo."
    And no se registra ningún préstamo

  Scenario: Préstamo rechazado porque el libro no está disponible
    Given el libro solicitado está en estado "Prestado"
    When el bibliotecario escanea el código del libro
    Then el sistema muestra el mensaje "El libro no está disponible"
    And ofrece la opción de registrar una reserva
```

---

## HU-07 — Registrar devolución y calcular multa (Bibliotecario)

```gherkin
Feature: Devolución de libro y cálculo de multa

  Scenario: Devolución a tiempo sin multa
    Given el libro fue prestado el 2026-04-10 con vencimiento el 2026-04-17
    And la fecha actual es 2026-04-16
    When el bibliotecario registra la devolución
    Then el sistema marca el préstamo como "Devuelto"
    And el estado del libro cambia a "Disponible"
    And no se genera ninguna multa

  Scenario: Devolución con retraso y multa calculada
    Given el libro tenía vencimiento el 2026-04-17
    And la fecha actual es 2026-04-20
    When el bibliotecario registra la devolución
    Then el sistema calcula una multa de 6 lempiras (3 días x 2 lempiras)
    And muestra al bibliotecario el monto de la multa
    And registra la multa como "Pendiente de cobro" en la cuenta del estudiante

  Scenario: Registro de cobro de multa
    Given el estudiante tiene una multa pendiente de 6 lempiras
    When el bibliotecario indica que el estudiante pagó la multa
    Then el sistema cambia el estado de la multa a "Pagada"
    And registra la fecha y hora del pago
```

---

## HU-03 — Notificación de vencimiento próximo (Estudiante)

```gherkin
Feature: Notificación automática de vencimiento de préstamo

  Scenario: Envío de notificación 2 días antes del vencimiento
    Given el estudiante tiene un préstamo activo con vencimiento el 2026-04-22
    And la fecha actual es 2026-04-20
    When el sistema ejecuta el proceso automático de notificaciones diarias
    Then se envía un correo electrónico al estudiante con el título del libro y la fecha de vencimiento
    And el correo incluye un enlace para renovar el préstamo en línea

  Scenario: No se envía notificación duplicada
    Given el sistema ya envió una notificación el 2026-04-20
    When el proceso automático se ejecuta el 2026-04-20 nuevamente
    Then el sistema no envía un segundo correo al mismo estudiante por el mismo préstamo
```

---

## HU-02 — Reservar libro en línea (Estudiante)

```gherkin
Feature: Reserva de libro en línea

  Scenario: Reserva exitosa de libro disponible
    Given el estudiante está autenticado en el portal
    And el libro "Ingeniería de Software" está disponible
    When el estudiante selecciona el libro y hace clic en "Reservar"
    Then el sistema registra la reserva y cambia el estado del libro a "Reservado"
    And envía un correo de confirmación al estudiante con el código de reserva
    And la reserva se mantiene activa por 48 horas

  Scenario: Reserva de libro ya prestado
    Given el libro está en estado "Prestado"
    When el estudiante intenta reservarlo
    Then el sistema lo agrega a la lista de espera
    And muestra el mensaje "Serás notificado cuando el libro esté disponible"

  Scenario: Reserva rechazada por matrícula inactiva
    Given el estudiante no tiene matrícula activa en el sistema académico
    When intenta realizar una reserva
    Then el sistema muestra el mensaje "Tu matrícula no está activa. Contacta a Registro."
    And no se registra la reserva
```

---

## HU-10 — Generar reportes mensuales (Director)

```gherkin
Feature: Generación de reportes de préstamos

  Scenario: Generación exitosa del reporte mensual
    Given el director está autenticado en el sistema
    And selecciona el mes "Marzo 2026"
    When hace clic en "Generar Reporte"
    Then el sistema muestra un reporte con:
      | Métrica                        | Valor  |
      | Total de préstamos             | número |
      | Libros más solicitados (top 10)| lista  |
      | Préstamos por carrera          | tabla  |
      | Multas generadas               | monto  |
      | Multas cobradas                | monto  |
    And el director puede exportar el reporte en formato PDF o Excel

  Scenario: Reporte con rango de fechas sin datos
    Given el director selecciona un mes sin registros de préstamos
    When genera el reporte
    Then el sistema muestra el mensaje "No hay datos para el período seleccionado"
    And no genera ningún archivo de descarga
```

---
