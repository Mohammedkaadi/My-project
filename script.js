// script.js
document.getElementById('taxi-booking-form').addEventListener('submit', function(event) {
    event.preventDefault();  // منع الإرسال الفعلي للنموذج

    // جمع البيانات المدخلة من المستخدم
    const currentLocation = document.getElementById('current-location').value;
    const destination = document.getElementById('destination').value;
    const phone = document.getElementById('phone').value;  // جمع رقم الهاتف
    const carType = document.getElementById('car-type').value;
    const time = document.getElementById('time').value;

    // إعداد الرسالة التي سيتم إرسالها عبر واتساب
    const message = `حجز تاكسي جديد:
الموقع الحالي: ${currentLocation}
الوجهة: ${destination}
رقم الهاتف: ${phone}
نوع السيارة: ${carType}
الوقت: ${time}`;

    // إنشاء رابط واتساب مع الرسالة
    const whatsappLink = `https://wa.me/+963980351186?text=${encodeURIComponent(message)}`;

    // توجيه الزبون إلى رابط واتساب
    window.open(whatsappLink, '_blank');
});
