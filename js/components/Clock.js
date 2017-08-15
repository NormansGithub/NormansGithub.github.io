"use strict";

let seconds;
let minutes;
let hours;

export const Clock = _ => {
    setInterval(onClockTick, 1000);
};

const onClockTick = _ => {
    const date = new Date();
    seconds = date.getSeconds();
    const sdegree = seconds * 6 + 270;
    seconds = ("0" + seconds).slice(-2);
    const secondSel = document.querySelector(".seconds");

    secondSel.style.transform = "rotate(" + sdegree + "deg) translate(160px) rotate(-" + sdegree + "deg)";
    secondSel.innerHTML = seconds;

    minutes = date.getMinutes();
    const mdegree = minutes * 6 + 270;
    const minutesSel = document.querySelector(".minutes");
    minutes = ("0" + minutes).slice(-2);

    minutesSel.style.transform = "rotate(" + mdegree + "deg) translate(181px) rotate(-" + mdegree + "deg)";
    minutesSel.innerHTML = minutes;

    hours = date.getHours();
    const hoursSel = document.querySelector(".hours");

    hours = hours % 12;
    hours = ("0" + hours).slice(-2);

    hoursSel.innerHTML = hours;
};