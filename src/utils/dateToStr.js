const dateToStr = date => {
    if (date) {
        const datestr = date.toISOString().slice(0, -14);
        const dateArray = datestr.split("-");
        const changeDate = dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0];
    return changeDate;
    }
}

export default dateToStr;