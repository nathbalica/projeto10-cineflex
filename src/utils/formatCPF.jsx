export const formatCPF = (value) => {
    const cpfDigits = value.replace(/\D/g, "").slice(0, 11);
    let formattedCPF = cpfDigits;

    if (cpfDigits.length > 3 && cpfDigits.length <= 6) {
        formattedCPF = `${cpfDigits.slice(0, 3)}.${cpfDigits.slice(3)}`;
    } else if (cpfDigits.length > 6 && cpfDigits.length <= 9) {
        formattedCPF = `${cpfDigits.slice(0, 3)}.${cpfDigits.slice(3, 6)}.${cpfDigits.slice(6)}`;
    } else if (cpfDigits.length > 9) {
        formattedCPF = `${cpfDigits.slice(0, 3)}.${cpfDigits.slice(3, 6)}.${cpfDigits.slice(6, 9)}-${cpfDigits.slice(9)}`;
    }

    return formattedCPF;
};