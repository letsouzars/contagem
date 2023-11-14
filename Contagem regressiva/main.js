(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Nov 27, 2023 00:00:00",
        countdown = new Date(birthday).getTime(),
        x = setInterval(function () {
            let now = new Date().getTime(),
                distance = countdown - now;

            // Calcular dias, horas, minutos e segundos
            let days = Math.floor(distance / day);
            let hours = Math.floor((distance % day) / hour);
            let minutes = Math.floor((distance % hour) / minute);
            let seconds = Math.floor((distance % minute) / second);

            // Atualizar os elementos HTML
            document.getElementById("days").innerText = days + " Days";
            document.getElementById("hours").innerText = hours + " Hours";
            document.getElementById("minutes").innerText = minutes + " Minutes";
            document.getElementById("seconds").innerText = seconds + " Seconds";

            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdownElem = document.getElementById("countdown"),
                    content = document.getElementById("content");
                headline.innerText = "Chegou o dia!!!";
                clearInterval(x);
            }
        }, 1000); // ajuste no intervalo para atualizar a cada segundo
})();
