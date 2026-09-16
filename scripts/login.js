const formulario=document.getElementById('formularioLogin');
const campos=[...document.querySelectorAll('.codigo input')];
const mensajeError=document.getElementById('mensajeError');

campos.forEach((campo,posicion)=>{
  campo.addEventListener('input',()=>{
    campo.value=campo.value.replace(/\D/g,'');
    if(campo.value&&campos[posicion+1])campos[posicion+1].focus();
    mensajeError.textContent='';
  });

  campo.addEventListener('keydown',evento=>{
    if(evento.key==='Backspace'&&!campo.value&&campos[posicion-1])campos[posicion-1].focus();
    if(evento.key==='ArrowLeft'&&campos[posicion-1])campos[posicion-1].focus();
    if(evento.key==='ArrowRight'&&campos[posicion+1])campos[posicion+1].focus();
  });

  campo.addEventListener('paste',evento=>{
    evento.preventDefault();
    const numeros=evento.clipboardData.getData('text').replace(/\D/g,'').slice(0,6);
    numeros.split('').forEach((numero,indice)=>{if(campos[indice])campos[indice].value=numero;});
    const siguiente=campos[Math.min(numeros.length,5)];
    if(siguiente)siguiente.focus();
  });
});

formulario.addEventListener('submit',evento=>{
  evento.preventDefault();
  const codigo=campos.map(c=>c.value).join('');
  if(codigo.length!==6){mensajeError.textContent='Ingresa los seis números del código.';return;}

  const adminCode=['123','456'].join('');
  const employeeCode=['654','321'].join('');
  const usuariosPrueba={};
  usuariosPrueba[adminCode]={id:1,nombre:'Administrador',rol:'ADMINISTRADOR',sucursal:{id:1,nombre:'Matriz · Zitácuaro'}};
  usuariosPrueba[employeeCode]={id:2,nombre:'Carlos Mendoza',rol:'EMPLEADO',sucursal:{id:1,nombre:'Matriz · Zitácuaro'}};

  const usuario=usuariosPrueba[codigo];
  if(!usuario){
    mensajeError.textContent='El código de acceso no es válido.';
    campos.forEach(c=>c.value='');
    campos[0].focus();
    return;
  }

  localStorage.setItem('usuarioSesion',JSON.stringify(usuario));
  window.location.href='dashboard.html';
});