$(document).ready(()=>{
	$('#registerNavLink').on('click', ()=>{
		// Display Overlay
		document.getElementById('overlay').style.display = 'flex';
		// Collapse Dropdown Menu
		document.getElementById('navDropdown').classList.remove('show');
		// If Login Tab Is Currently Active in overlay, change to Register being Active and shown
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
		// If register tab is currently active, change to login being active and shown
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

	// Close overlay when click on x in corner
	$('#closeForm').on('click', ()=>{
		document.getElementById('overlay').style.display = 'none';
	});
	// Bring up logout verification overlay form when logout nav is clicked
	$('#logoutNavLink').on('click', ()=>{
		document.getElementById('logoutOverlay').style.display = 'flex';
	});
	// Close logout overlay if logout 'no' is clicked
	$('#logoutCancel').on('click', ()=>{
		document.getElementById('logoutOverlay').style.display = 'none';
	});
	// Display feedback overlay when feedback nav is clicked
	$('#feedbackNav').on('click', ()=>{
		console.log('display feedback form');
		document.getElementById('feedback').style.display = 'flex';
	});
	// Close feedback overlay when x is clicked
	$('#closeFeedbackForm').on('click', ()=>{
		console.log('closing feedbackForm');
		document.getElementById('feedback').style.display = 'none';
	});

	
	// Display Contact overlay when contact nav is clicked
	$('#contactNav').on('click', ()=>{
		document.getElementById('contact').style.display = 'flex';
	});
	// Close contact overlay when x is clicked
	$('#closeContactForm').on('click', ()=>{
		document.getElementById('contact').style.display = 'none';
	});

});