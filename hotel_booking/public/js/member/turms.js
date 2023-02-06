const checkAll = (target) => {
 const isChecked = target.checked;
  
 document.querySelectorAll(`.b_turms_box input`)
   .forEach(el => {
      el.checked = isChecked;
   }); 
}
