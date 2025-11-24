# Proyecto: Calculadora de Tablas de Multiplicar
En este proyecto se desarrolló un proyecto calculador para generar tablas de multiplicar. El objetivo principal de la práctica era utilizar JavaScript para la lógica usando el ciclo do while para realizar los cálculos matemáticos
Para la parte visual, se integro Bootstrap 5 esto permitió darle un diseño ordenado y responsivo a los botones, las cajas de texto y las alertas y un poco de CSS personalizado para centrar
Lo primero que hace el código es validar la entrada si la caja está vacía aparece una alerta visual de color rojo (usando las clases de Bootstrap) pidiendo que se ingrese un dato válido.
Si el dato es correcto, entra en acción la lógica y es donde la instrucción usa un ciclo DO WHILE que recorre del 1 al 12 calculando el resultado de la multiplicación 
Fragmento del código
let i = 1;
do {
    tabla += txt_numero_tabla + " x " + i + " = " + (txt_numero_tabla * i) + "<br>";
    i++;
} while (i <= 12);
<img width="706" height="734" alt="image" src="https://github.com/user-attachments/assets/2aa25835-e5a1-44c6-a05d-796d434170b3" />
<img width="741" height="511" alt="image" src="https://github.com/user-attachments/assets/66010a69-50fa-45c5-96ad-74b251a90ef5" />

