$(document).ready(()=>{
	$('#registerNavLink').on('click', ()=>{
		// Display Overlay
		document.getElementById('overlay').style.display = 'flex';
		// Collapse Dropdown Menu
		document.getElementById('navDropdown').classList.remove('show');
		
		if(document.getElementById('loginNav').classList.contains('active')){
			console.log('need to change');
			document.getElementById('registerNav').classList.add('active');
			document.getElementById('registerNav').classList.add('show');
			document.getElementById('loginNav').classList.remove('active');
			document.getElementById('loginNav').classList.remove('show');
			document.getElementById('loginForm').classList.remove('active');
			document.getElementById('registerForm').classList.add('active');
			document.getElementById('loginForm').classList.remove('show');
			document.getElementById('registerForm').classList.add('show');
		}
	});
	$('#loginNavLink').on('click', ()=>{
		// Display Overlay
		document.getElementById('overlay').style.display='flex';
		// Close Dropdown Menu
		document.getElementById('navDropdown').classList.remove('show');

		if(document.getElementById('registerNav').classList.contains('active')){
			console.log('need to change');
			document.getElementById('registerNav').classList.remove('active');
			document.getElementById('registerNav').classList.remove('show');
			document.getElementById('loginNav').classList.add('active');
			document.getElementById('loginNav').classList.add('show');
			document.getElementById('loginForm').classList.add('active');
			document.getElementById('registerForm').classList.remove('active');
			document.getElementById('loginForm').classList.add('show');
			document.getElementById('registerForm').classList.remove('show');
		}
	});

	$('#closeForm').on('click', ()=>{
		document.getElementById('overlay').style.display = 'none';
	});

	$('#logoutNavLink').on('click', ()=>{
		document.getElementById('logoutOverlay').style.display = 'flex';
	});

	$('#logoutCancel').on('click', ()=>{
		document.getElementById('logoutOverlay').style.display = 'none';
	});
});