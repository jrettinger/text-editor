(()=>{const e=document.getElementById("buttonInstall");let n;window.addEventListener("beforeinstallprompt",(e=>{n=e})),e.addEventListener("click",(async()=>{if(null!=n){n.prompt();const{outcome:e}=await n.userChoice;"accepted"===e&&(n=null)}})),window.addEventListener("appinstalled",(e=>{console.log("Thank you for installing JATE!!")}))})();