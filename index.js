// https://medium.com/@jmartinez729/how-to-build-a-birthday-countdown-website-with-javascript-4f813e34439e
document.addEventListener('DOMContentLoaded', function () {

    const daysCountdown = document.getElementById("dayss")
    const hoursCountdown = document.getElementById("hourss")
    const minutesCountdown = document.getElementById("minutess")
    const secondsCountdown = document.getElementById("secondss")

    const currentTime = new Date()
    let yearOfTheEvent = currentTime.getFullYear()
    let eventDate = new Date(yearOfTheEvent, 01, 22)

    function countdown() {
        const now = new Date()

        if (now > eventDate) {
            eventDate = new Date(yearOfTheEvent + 1, 01, 04)
        } else if (now.getFullYear() === eventDate.getFullYear() + 1) {
            eventDate = new Date(now.getFullYear(), 01, 04)
        }

        const currentTime = now.getTime()
        const eventTime = eventDate.getTime()
        const remainingTime = eventTime - currentTime

        let seconds = Math.floor(remainingTime / 1000)
        let minutes = Math.floor(seconds / 60)
        let hours = Math.floor(minutes / 60)
        let days = Math.floor(hours / 24)

        hours %= 24
        minutes %= 60
        seconds %= 60

            daysCountdown.innerHTML = days
            hoursCountdown.innerHTML = hours
            minutesCountdown.innerHTML = minutes
            secondsCountdown.innerHTML = seconds

            setTimeout(countdown, 1000)
    }
    countdown()
})