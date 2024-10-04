// CONSTANTE PARA DEFINIR LAS VOCALES
    // DEFINIMOS UN ARRAY CON LAS VOCALES EN MINÚSCULA
        const vocales = ["a", "e", "i", "o", "u"];

// FUNCIÓN PARA DESENCRIPTAR DE X' A TEXTO
    function deEncryptText(textX) {
        // INICIALIZA UNA VARIABLE PARA ALMACENAR EL TEXTO DESENCRIPTADO
            var resultText = ""; 
        
        // ITERA A TRAVÉS DE CADA CARACTER EN EL TEXTO X.
            for (let i = 0; i < textX.length; i++) {
                // ALMACENA EL CARÁCTER ACTUAL
                    let actualChar = textX[i]; 
                // AGREGA EL CARÁCTER ACTUAL AL RESULTADO
                    resultText += actualChar;

                // COMPROBAMOS QUE SEA UNA VOCAL
                    if (vocales.includes(actualChar.toLowerCase())) { 
                        // AUMENTA EL ÍNDICE PARA SALTAR AL SIGUIENTE CARÁCTER.
                            i++; 
                        // VARIABLE PARA ALMACENAR EL TROZO DE TEXTO SIN VOCALES.
                            var temporalStrim = ""; 
                        
                        // ITERA DESDE EL ÍNCIDICE ACTUAL HASTA EL FIN DEL TEXTO.
                        for (let j = i; j < textX.length; j++) { 
                            // ALMACENA EL CARÁCTER TEMPORAL
                                let temporalActualchar = textX[j]; 
                            // SI ENCUENTRA OTRA VOCAL, ROMPE EL BUCLE
                                if (vocales.includes(temporalActualchar.toLowerCase())) {
                                     break; 
                                }
                            // AGREGA EL CARÁCTER A LA cadena
                                temporalStrim += temporalActualchar;
                        }

                        // VARIABLE PARA ALMACENAR EL TEXTO QUE VAMOS A ROTAR
                            var finalStrim = ""; 
                        
                        // ROTAMOS EL TEXTO
                            for (let j = temporalStrim.length - 1; j >= 0; j--) {
                                // AGREGAMOS CADA CARÁCTER AL RESULTADO EN ORDEN INVERSO
                                    finalStrim += temporalStrim[j];
                            }

                        // AGREGAMOS EL TEXTO ROTADO AL RESULTADO
                            resultText += finalStrim;
                        // AJUSTAMOS EL ÍNDICE PARA NO VOLVER A LEER LOS CARACTERES QUE ACABAMOS DE PROCESAR
                            i += finalStrim.length - 1;
                    }
            }

        // DEVOLVEMOS EL RESULTADO
        return resultText;
    }

// FUNCIÓN PARA DESENCRIPTAR X'' a x''
    function decryptXii(text) {
        // INICIALIZA UNA VARIABLE PARA ALMACENAR LOS CARÁCTERES EN POSICIONES PARAES
            let textPrincipio = '';
        // INICIALIZA UNA VARIABLE PARA ALMACENAR LOS CARACTERES EN POSICIONES IMPARES
            let textFinal = '';

        // ITERAMOS SOBRE CADA CARÁCTER EN EL TEXTO 
            for (let index = 0; index < text.length; index++) {
                // SI EL ÍNDICE ES PAR, AGREGAMOS EL CARÁCTER A textPrincipio.
                    if (index % 2 === 0) {
                        textPrincipio += text[index]; 
                // SI EL ÍNDICE ES IMPAR, AGREGAMOS EL CARÁCTER A textFinal.
                    } else {
                        textFinal = text[index] + textFinal; 
                    }
            }

        // DEVOLVEMOS EL RESULTADO
            return textPrincipio + textFinal; 
    }

// FUNCIÓN PARA ENCRIPTAR DE TEXTO A X'
    function encryptXI(text) {
        // INICIALIZAMOS UNA VARIABLE PARA ALMACENAR EL TEXTO TRANSFORMADO
            let transformedText = '';

        // MIENTRAS HAYA CARÁCTERES EN EL TEXTO ORIGINAL
            while (text.length > 0) {
                // AGREFAMOS EL PRIMER CARÁCTER AL TEXTO TRANSFORMADO
                    transformedText += text[0];
                // ELIMINAMOS EL PRIMER CARÁCTER DEL TEXTO ORIGINAL
                    text = text.slice(1);
                // SI AÚN HAY CARÁCTERES EN EL TEXTO
                    if (text.length > 0) { 
                        // AGREGAMOS EL ÚLTIMO CARÁCTER AL TEXTO TRANSFORMADO
                            transformedText += text[text.length - 1];
                        // ELIMINAMOS EL ÚLTIMO CARÁCTER DEL TEXTO ORIGINAL
                            text = text.slice(0, text.length - 1);
                    }
            }

        // DEVOLVEMOS EL RESULTADO
            return transformedText;
    }

// FUNCION PARA DESENCRIPTAR DE X' A TEXTO
    function decryptXI(textXI) {
        // INICIALIZA UNA VARIABLE PARA ALMACENAR EL TEXTO DESENCRIPTADO
            var resultText = "";
        // INICIAMOS UN ÍNDICE PARA ITERAR SOBRE textXI.
            var i = 0;

        // MIENTRAS HAY CARÁCTERES EN textXI
            while (i < textXI.length) {
                // ALMACENA EL CARÁCTER ACTUAL EN UNA VARIABLE
                    let actualChar = textXI[i];
                // AGREGA EL CARÁCTER ACTUAL AL RESULTADO
                    resultText += actualChar;

                // COMPROBAMOS SI EL CARÁCTER ACTUAL ES UNA VOCAL
                    if (vocales.includes(actualChar.toLowerCase())) {
                        // AUMENTA EL ÍNDICE PARA SALTAR AL SIGUIENTE CARÁCTER
                            i++;
                        // VARIABLE PARA ALMACENAR EL TROZO DE TEXTO SIN VOCALES
                            var temporalStrim = "";

                        // ITERAMOS DESDE EL ÍNDICE ACTUAL HASTA EL FIN DEL TEXTO
                            for (let j = i; j < textXI.length; j++) { 
                                // ALMACENAMOS EL CARÁCTER TEMPORAL EN UNA VARIABLE
                                    let temporalActualchar = textXI[j];
                                // SI ENCUENTRA OTRA VOCAL, ROMPE EL BUCLE
                                    if (vocales.includes(temporalActualchar.toLowerCase())) { break; }
                                    // AGREGA EL CARÁCTER TEMPORAL A LA CADENA SIN VOCALES
                                        temporalStrim += temporalActualchar;
                            }

                        // VARIABLE PARA ALMACENAR EL TEXTO QUE VAMOS A ROTAR
                            var finalStrim = "";

                        // REVERTIMOS EL TEXTO QUE ESTA ENTRE LAS VOCALES
                            for (let j = temporalStrim.length - 1; j >= 0; j--) {
                                // AGREGAMOS CADA CARÁCTER AL RESULTADO EN ORDEN INVERSO
                                    finalStrim += temporalStrim[j];
                            }

                        // AGREGAMOS EL TEXTO ROTADO AL RESULTADO
                            resultText += finalStrim;
                        // AJUSTAMOS EL ÍNDICE PARA AVANZAR DESPUÉS DEL TEXTO ROTADO
                            i += finalStrim.length;
                    } else {
                        // SI NO ES UNA VOCAL, AVANZA AL SIGUIENTE CARÁCTER
                            i++;
                    }
            }

        // DEVOLVEMOS EL RESULTADO
            return resultText;
    }

// DESENCRIPTAMOS DE X'' A TEXTO
    document.getElementById('button-desencriptar').addEventListener('click', () => {
        // OBTENER EL TEXTO A DESENCRIPTAR
            let textDecrytXII = document.getElementById('text-desencriptar').value;
        // OBTENER EL MÉTODO DE DESENCRIPTADO
            let metodoDesencriptado = document.getElementById('desencriptar-opcion').value;
        // OBTENER EL CONTENEDOR QUE MUESTRA X'
            let contXI = document.getElementById('cont-xi');

        // SI SE SELECCIONA EL MÉTODO PASO A PASO
            if (metodoDesencriptado === 'paso-a-paso') {
                // MUESTRA EL CONTENEDOR DE X'
                    contXI.style.display = 'block';
                // DESENCRIPTA X'' A X'
                    let textDecrytXI = decryptXii(textDecrytXII);
                // MUESTRA EL RESULTADO DE X'
                    document.getElementById('textXI-desencriptado').innerText = textDecrytXI;
                // DESENCRIPTA X' A TEXTO
                    let textDecrytPlain = deEncryptText(textDecrytXI);
                // MUESTRA EL TEXTO DESENCRIPTADO
                    document.getElementById('text-desencriptado').innerText = textDecrytPlain;
        // SI SE SELECCIONA EL MÉTODO DIRECTO
            } else {
                // OCULTAMOS EL CONTENEDOR DE X'
                contXI.style.display = 'none';

                // DESENCRIPTAMOS DE X'' A X'
                    let textDecrytXI = decryptXii(textDecrytXII);
                // DESENCRIPTA X' A TEXTO
                    let textDecrytPlain = deEncryptText(textDecrytXI);
                // LIMPIAR EL RESULTADO DE X'
                    document.getElementById('textXI-desencriptado').innerText = '';
                // MOSTRAMOS EL TEXTO DESENCRIPTADO
                    document.getElementById('text-desencriptado').innerText = textDecrytPlain;
            }
    });

// ENCRIPTAMOS DE TEXTO A X'
    document.getElementById('button-encriptar').addEventListener('click', () => {
        // OBTENEMOS EL TEXTO A ENCRIPTAR
            let textEncryptPlain = document.getElementById('text-encriptar').value;
        // DESENCRIPTAMOS EL TEXTO A X'
            let textEncryptXI = deEncryptText(textEncryptPlain);
        // MUESTRA EL RESULTADO DE X'
            document.getElementById('textXI-encriptado').innerText = textEncryptXI;
        // ENCRIPTAMOS DE X' A X''
            let textEncryptXII = encryptXI(textEncryptXI);
        // MUESTRA EL RESULTADO DE X''
            document.getElementById('textXII-encriptado').innerText = textEncryptXII;
    });

// ENCRIPTAMOS DE X' A TEXTO
    document.getElementById('button-desencriptar-xi-a-x').addEventListener('click', () => {
        //  OBTENEMOS EL TEXTO X' A DESENCRIPTAR
            let textXI = document.getElementById('textXI-a-x').value;
        // DESENCRIPTAMOS DE X' A TEXTO
            let textDecryptedX = decryptXI(textXI);
        // MOSTRAMOS EL RESULTADO
            document.getElementById('text-x-desencriptado').innerText = textDecryptedX;
    });
