import Swal from "sweetalert2";

export function showAlert(type, title, message) {

    let iconColor = "#FFCC00";
    if (type === 'error') iconColor = "#da415d";
    if (type === 'success') iconColor = "#69ba69";
    return Swal.fire({
        title: title,
        text: message,
        icon: type,
        iconColor,
        background: "rgb(0,0,0,0.90)",
        color: "#FFFFFF",
    });
}