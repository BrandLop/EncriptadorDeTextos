# 🛡️ Encriptador de Mensajes

Este proyecto es una aplicación web que permite encriptar y desencriptar textos utilizando una serie de reglas definidas. Es ideal para intercambiar mensajes secretos entre personas que conozcan las claves de encriptación utilizadas.

## ✨ Funcionalidades

- **🔒 Encriptar texto**: Convierte texto ingresado en una versión encriptada utilizando reglas específicas.
- **🔓 Desencriptar texto**: Convierte un texto encriptado de vuelta a su forma original.
- **⚠️ Verificación del texto**: El texto debe estar compuesto únicamente por letras minúsculas sin acentos ni caracteres especiales.
- **📋 Copiar texto**: Permite copiar el texto encriptado o desencriptado al portapapeles.

## 🔑 Reglas de Encriptación

- La letra "e" es convertida en "enter"
- La letra "i" es convertida en "imes"
- La letra "a" es convertida en "ai"
- La letra "o" es convertida en "ober"
- La letra "u" es convertida en "ufat"

## 📝 Ejemplos

- Texto original: `gato`
  - Texto encriptado: `gaitober`
- Texto encriptado: `gaitober`
  - Texto desencriptado: `gato`

## 📋 Requisitos

- Solo se permiten letras minúsculas.
- No se permiten acentos ni caracteres especiales.

## 🗂️ Estructura del Proyecto

- **index.html**: Estructura principal de la aplicación.
- **styles.css**: Estilos para la aplicación, incluyendo ajustes de diseño responsivo.
- **script.js**: Lógica de encriptación, desencriptación, verificación y manejo de eventos.

## 🚀 Cómo Usar

1. **🔒 Encriptar un mensaje**:
   - Ingresa el texto en el campo de entrada.
   - Haz clic en el botón "Encriptar".
   - El resultado aparecerá en la sección de salida.

2. **🔓 Desencriptar un mensaje**:
   - Ingresa el texto encriptado en el campo de entrada.
   - Haz clic en el botón "Desencriptar".
   - El resultado aparecerá en la sección de salida.

3. **📋 Copiar el texto**:
   - Haz clic en el botón "Copiar" para copiar el texto encriptado o desencriptado al portapapeles.

## 🛠️ Instalación y Ejecución

1. Clona el repositorio a tu máquina local:
   ```bash
   git clone https://github.com/usuario/encriptador-de-mensajes.git
   ```
2. Navega hasta el directorio del proyecto:
   ```bash
   cd encriptador-de-mensajes
   ```
3. Abre el archivo `index.html` en tu navegador favorito.
