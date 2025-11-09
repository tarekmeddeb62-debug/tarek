function calculatePower() {
    // 1. الحصول على القيم من المدخلات
    const flow = parseFloat(document.getElementById('flow').value);
    const waterLevel = parseFloat(document.getElementById('waterLevel').value);
    const drop = parseFloat(document.getElementById('drop').value);
    const hpOutput = document.getElementById('hpOutput');

    // التحقق من أن المدخلات أرقام صالحة
    if (isNaN(flow) || isNaN(waterLevel) || isNaN(drop) || flow <= 0) {
        hpOutput.textContent = "يرجى إدخال أرقام صحيحة وموجبة للدفق";
        hpOutput.style.color = "red";
        return;
    }
    hpOutput.style.color = "#28a745"; // إعادة اللون الأخضر في حال كانت المدخلات صحيحة

    // 2. احتساب HMT (الضاغط الكلي)
    // hmt = (منسوب الماء + الانخفاض + 15 + 5)
    const hmt = waterLevel + drop + 15 + 5;

    // 3. احتساب القوة بـ "وحدة الجول" (Q1)
    // Q1 = (الدفق * hmt) / 51
    const Q1_joule = (flow * hmt) / 51;

    // 4. احتساب القوة بالحصان (HP)
    // Q_HP = Q1 / 0.75
    const Q_HP = Q1_joule / 0.75;

    // 5. عرض النتيجة
    hpOutput.textContent = Q_HP.toFixed(2); // عرض النتيجة برقمين عشريين
}