const hexInput = document.getElementById('hex');
const convertBtn = document.getElementById('calcbtn');
const resultDiv = document.getElementById('result');
convertBtn.addEventListener('click', () => {
    const hexCode = hexInput.value.trim();
    if (hexCode.length === 7 && hexCode.startsWith('#')) {
        const rgb = hex_To_Rgb(hexCode);
        resultDiv.textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
    } else {
        resultDiv.textContent = 'Invalid hex code';
    }
});
function hex_To_Rgb(hex) {
    const hexCode = hex.substring(1);
    const r = parseInt(hexCode.substring(0, 2), 16);
    const g = parseInt(hexCode.substring(2, 4), 16);
    const b = parseInt(hexCode.substring(4, 6), 16);
    return { r, g, b };
}