
 const feetInput = document.getElementById('feetInput');
 const meterInput = document.getElementById('meterInput');


 feetInput.addEventListener('input', () => {
   const feet = parseFloat(feetInput.value);
   if (!isNaN(feet)) {
     meterInput.value = (feet * 0.3048).toFixed(2);
     
   } else {
     meterInput.value = '';
   }
 });

 meterInput.addEventListener('input', () => {
   const meters = parseFloat(meterInput.value);
   if (!isNaN(meters)) {
     feetInput.value = (meters * (1/0.3048)).toFixed(2);
   } else {
     feetInput.value = '';
   }
 });