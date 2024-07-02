var yearsAgo = (year) => {
    let date = new Date();
    let currentYear = date.getFullYear();

    return (currentYear - year);
}
