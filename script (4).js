var names={beranda:"Beranda",tentang:"Tentang",layanan:"Layanan",jadwal:"Jadwal",edukasi:"Edukasi",faq:"Tanya Jawab",kontak:"Kontak"};
function route(){
  var h=(location.hash||"#beranda").slice(1);
  if(!names[h]){h="beranda";}
  document.querySelectorAll(".page").forEach(function(p){p.hidden=(p.id!==h);});
  document.querySelectorAll("#nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+h);});
  document.title=names[h]+" · Praktik Mantri Yayat";
  window.scrollTo(0,0);
}
window.addEventListener("hashchange",route);
route();
