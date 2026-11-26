// Počítadlo návštěv 3dz.cz
// Na stránku se vloží: <script type="module" src="/assets/pocitadlo.js?s=uvod"></script>
// Ukládá jen „+1 pro stránku a den“ do Firestore (kolekce navstevy). Nic o lidech:
// žádné IP, cookies ani identifikátory. Jeden prohlížeč se za den počítá jednou (localStorage).
// Čísla vidí jen majitel na /objednavky.html.
const STRANKY = ["uvod", "navrh", "bucpoly", "kreslik", "titulky"];
const FIREBASE = { apiKey:"AIzaSyCKUXFiIS28fhEXGdLtuT2dTUPGT3_T3SY", authDomain:"dz-objednavky.firebaseapp.com", projectId:"dz-objednavky", storageBucket:"dz-objednavky.firebasestorage.app", messagingSenderId:"926222074790", appId:"1:926222074790:web:5d16fd2fb2848f7824c567" };
const V = "10.12.2";

const stranka = new URL(import.meta.url).searchParams.get("s");
const den = new Date().toLocaleDateString("sv-SE", { timeZone:"Europe/Prague" });   // např. 2026-11-22
const klic = "3dz-navsteva-" + stranka;

async function zapocitej() {
  try {
    if (!STRANKY.includes(stranka)) return;
    if (!/(^|\.)3dz\.cz$/.test(location.hostname)) return;      // jen ostrý web, ne testy
    if (navigator.webdriver) return;                             // automatické prohlížeče
    if (localStorage.getItem(klic) === den) return;              // dnes už započítáno
    const { initializeApp } = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`);
    const { getFirestore, doc, setDoc, increment } = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`);
    const db = getFirestore(initializeApp(FIREBASE, "pocitadlo"));
    await setDoc(doc(db, "navstevy", den), { [stranka]: increment(1) }, { merge:true });
    localStorage.setItem(klic, den);
  } catch (e) { /* počítadlo nesmí nikdy rozbít stránku */ }
}
// až po načtení stránky, ať nic nezdržuje
if (document.readyState === "complete") setTimeout(zapocitej, 1500);
else addEventListener("load", () => setTimeout(zapocitej, 1500), { once:true });
