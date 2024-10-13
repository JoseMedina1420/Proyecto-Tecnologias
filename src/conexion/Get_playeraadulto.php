<?php
include 'Coexion_bd.php';

$sql = "SELECT id, nombre, descripcion, talla, precio, stock, imagen_blob FROM playera_adulto";
$result = $conn->query($sql);

$productos = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $row['imagen'] = base64_encode($row['imagen_blob']);
        unset($row['imagen_blob']); 
        $productos[] = $row;
    }
    echo json_encode($productos);
} else {
    echo json_encode(array("message" => "No se encontraron productos"));
}

$conn->close();
?>
