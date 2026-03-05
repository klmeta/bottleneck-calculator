document.getElementById('btn').addEventListener('click', function() {
    const cpu = parseInt(document.getElementById('cpu').value);
    const gpu = parseInt(document.getElementById('gpu').value);
    const resDiv = document.getElementById('result');
    const resTitle = document.getElementById('res-title');
    const resText = document.getElementById('res-text');
    const adviceText = document.getElementById('advice-text');

    resDiv.classList.remove('hidden');

    const diff = cpu - gpu;

    if (Math.abs(diff) <= 2) {
        resTitle.innerText = "Идеальный баланс!";
        resTitle.style.color = "#22c55e";
        resText.innerText = "Ваша система работает максимально эффективно.";
        adviceText.innerText = "У вас отличная сборка! В ближайшие пару лет апгрейд не требуется. Наслаждайтесь играми!";
    } else if (diff < 0) {
        resTitle.innerText = "Узкое место: Процессор";
        resTitle.style.color = "#ef4444";
        resText.innerText = "Процессор не дает видеокарте работать на полную мощность.";
        adviceText.innerText = "Совет: Рассмотрите замену процессора на более современную модель (например, переход с i3 на i5). Это поднимет минимальный FPS.";
    } else {
        resTitle.innerText = "Узкое место: Видеокарта";
        resTitle.style.color = "#eab308";
        resText.innerText = "Ваша видеокарта слишком слабая для такого процессора.";
        adviceText.innerText = "Совет: Ваш процессор имеет большой запас. В будущем вы можете смело ставить более мощную видеокарту без замены всей системы.";
    }
});
