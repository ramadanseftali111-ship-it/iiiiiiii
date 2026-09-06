// ============================================
// FIREBASE YAPILANDIRMA DOSYASI
// Otomatik oluşturuldu: 13.08.2026 23:00:24
// ============================================

// Firebase Configuration
var firebaseConfig = {
    apiKey: "AIzaSyBiEXcIGsBTCHpuFtQMTDU-uYsuxvASR8I",
    authDomain: "ramadan-seftali.firebaseapp.com",
    databaseURL: "https://ramadan-seftali-default-rtdb.firebaseio.com",
    projectId: "ramadan-seftali",
    storageBucket: "ramadan-seftali.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// Firebase değişkenleri
var database = null;
var storage = null;
var firebaseHazir = false;

// Firebase'i başlat
function initFirebase() {
    if (typeof firebase === 'undefined') {
        console.log('⏳ Firebase SDK yükleniyor...');
        setTimeout(initFirebase, 200);
        return;
    }
    
    try {
        if (!firebase.apps || firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
            console.log('✅ Firebase başlatıldı!');
        }
        
        database = firebase.database();
        if (firebase.storage) {
            storage = firebase.storage();
        }
        
        firebaseHazir = true;
        console.log('✅ Firebase hazır!');
        
    } catch(e) {
        console.error('⚠️ Firebase başlatma hatası:', e.message);
        setTimeout(initFirebase, 200);
    }
}

// Sayfa yüklendiğinde Firebase'i başlat
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFirebase);
} else {
    initFirebase();
}

console.log('📦 Firebase Config yüklendi - Project:', firebaseConfig.projectId);
