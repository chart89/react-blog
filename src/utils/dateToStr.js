const dateToStr = date => {
    if (date) {
    const datestr = date.toISOString();
    return datestr.slice(0, -14).replaceAll('-','/');
    }
}

export default dateToStr;