export function parseDataString(dataString) {
    // Divide el string en líneas
    const lines = (typeof dataString != 'object') ? dataString.split('\n') : ['data:' + JSON.stringify(dataString.data)];
    // console.log(lines)

    // Inicializa un array para almacenar los objetos parseados
    const parsedData = [];

    // Itera sobre cada línea del string
    lines.forEach(line => {
        // Verifica si la línea contiene datos
        const txt = parsedObject(line);
        parsedData.push(txt);
    });

    return parsedData;
}


export function parsedObject(line) {
    if (line.trim().length > 0) {
        // Elimina los espacios en blanco al principio y al final de la línea
        const trimmedLine = line.trim();

        // Elimina el prefijo "data: " y el sufijo "," si están presentes
        const cleanedLine = trimmedLine.replace(/^data:\s*/, '').replace(/,$/, '');

        // Intenta analizar el JSON en la línea y agregarlo al array de objetos parseados
        let parsed = {};
        try {
            if (cleanedLine === '[DONE]' || cleanedLine == '') return;
            parsed = (cleanedLine !== undefined && cleanedLine !== '' && cleanedLine.indexOf('{') > -1) ? JSON.parse(cleanedLine) : '';
        } catch (error) {
            console.log('Error parsing JSON:', error);
        }
        const txt = (parsed.choices && parsed.choices.length > 0 && parsed.choices[0].delta)
            ? parsed.choices[0].delta.content
            : ((parsed.choices && parsed.choices.length > 0 && parsed.choices[0].message)
                ? parsed.choices[0].message.content
                : ''
            );

        return txt === undefined ? '' : txt;
    }
}