# Proyecto: Calculadora de Tablas de Multiplicar

En este proyecto se desarrolló una aplicación web para generar tablas de multiplicar. El objetivo principal de la práctica era utilizar JavaScript para la lógica, implementando específicamente el ciclo do while para realizar los cálculos matemáticos.

Para la parte visual se integró Bootstrap 5. Esto permitió darle un diseño ordenado y responsivo a los botones, las cajas de texto y las alertas, junto con un poco de CSS personalizado para centrar los elementos.

Lo primero que hace el código es validar la entrada. Si la caja está vacía, aparece una alerta visual de color rojo (usando las clases de Bootstrap) pidiendo que se ingrese un dato válido.

Si el dato es correcto, entra en acción la lógica. Aquí es donde se utiliza la instrucción DO WHILE que recorre del 1 al 12 calculando el resultado de la multiplicación.

Fragmento del código
let i = 1;

do {

tabla += txt_numero_tabla + " x " + i + " = " + (txt_numero_tabla * i) + "<br>";

i++;

} while (i <= 12);

<img width="706" height="734" alt="image" src="https://github.com/user-attachments/assets/9f0cbb4b-61ee-4faf-93f5-f924e3a1ebc4" />
<img width="741" height="511" alt="image" src="https://github.com/user-attachments/assets/23676938-491e-4095-a55e-5cb1bf4825c2" />



