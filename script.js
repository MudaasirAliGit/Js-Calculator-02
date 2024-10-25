function getvalue(button) {
    let result = document.getElementById('result');

    if (button.value === 'C') {
        result.value = '';
    } 
    else if (button.value === '=') {
        try {
            result.value = eval(result.value.replace('x', '*'));
        } catch (error) {
            result.value = 'Error';
        }
    } 
    else {
        result.value += button.value;
    }
}
