<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encriptador/Desencriptador</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h1 class="centered-title">Encriptador/Desencriptador de Aina y Mario</h1>
        <!-- DESENCRIPTAR DESDE X'' -->
            <div class="column">
                <h2>Desencriptar X''</h2>
                <label for="text-desencriptar">Introduce el texto X''</label>
                <input id="text-desencriptar" type="text" placeholder="Texto para desencriptar">
                
                 <!-- OPCIÓN PARA ESCOGER EL TIPO DE DESENCRIPTADO -->
                    <label for="desencriptar-opcion">Método de desencriptado</label>
                    <select id="desencriptar-opcion">
                        <option value="paso-a-paso">Paso a paso</option>
                        <option value="directo">Directo</option>
                    </select>
                <br>
                <br>
                <button id="button-desencriptar">Desencriptar</button>
                <br>
                <br> 
                <div class="result">
                    <!-- CONTENEDOR PARA QUE X' SE OCULTE -->
                        <p id="cont-xi"><strong>x' =></strong> <span id="textXI-desencriptado">-</span></p>
                        <p><strong>Texto desencriptado =></strong> <span id="text-desencriptado">-</span></p>
                </div>
            </div>

         <!-- DESENCRIPTAR DESDE X' -->
            <div class="column">
                <h2>Desencriptar X'</h2>
                <label for="textXI-a-x">Introduce el texto x'</label>
                <input id="textXI-a-x" type="text" placeholder="Texto x' para desencriptar">
                <button id="button-desencriptar-xi-a-x">Desencriptar</button><br><br>
                
                <p><strong>Texto desencriptado x =></strong> <span id="text-x-desencriptado">-</span></p>
            </div>

         <!-- ENCRIPTAR TEXTO -->
            <div class="column">
                <h2>Encriptar texto</h2>
                <label for="text-encriptar">Introduce el texto</label>
                <input id="text-encriptar" type="text" placeholder="Texto para encriptar">
                <button id="button-encriptar">Encriptar</button>
                <br>
                <br>            
                <div class="result">
                    <p><strong>x' =></strong> <span id="textXI-encriptado">-</span></p>
                    <p><strong>x'' =></strong> <span id="textXII-encriptado">-</span></p>
                </div>
            </div>


    </div>

</body>
<script src="javascript/script.js"></script>
</html>
