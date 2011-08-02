// JavaScript Document
function menu(){}

menu.handle = function(){
		$("#linkHome").mouseover(
                    function() {
						$("#linkHome").addClass('linkHomeOver');
                        $("#linkHome").removeClass('linkHome');
                    }
            );
            $("#linkHome").mouseout(
                    function() {
                        $("#linkHome").addClass('linkHome');
						$("#linkHome").removeClass('linkHomeOver');                        
                    }
            );
             $("#linkHome").click(
                    function(event) {
                        window.location = 'index.html'
                    }
            );
			
			
			$("#linkGallery").mouseover(
                    function() {
                        $("#linkGallery").addClass('linkGalleryOver');
						$("#linkGallery").removeClass('linkGallery');                        
                    }
            );
            $("#linkGallery").mouseout(
                    function() {
						$("#linkGallery").addClass('linkGallery');
                        $("#linkGallery").removeClass('linkGalleryOver');

                    }
            );
            $("#linkGallery").click(
                    function(event) {                        
                        window.location = 'gallery.html'
                    }
            );
			
			
			$("#linkAboutUs").mouseover(
                    function() {
                        $("#linkAboutUs").addClass('linkAboutUsOver');
						$("#linkAboutUs").removeClass('linkAboutUs');                        
                    }
            );
            $("#linkAboutUs").mouseout(
                    function() {
						$("#linkAboutUs").addClass('linkAboutUs');
                        $("#linkAboutUs").removeClass('linkAboutUsOver');

                    }
            );
            $("#linkAboutUs").click(
                    function(event) {                        
                        window.location = 'about.html'
                    }
            );
			
			
			$("#linkContacts").mouseover(
                    function() {
                        $("#linkContacts").addClass('linkContactsOver');
						$("#linkContacts").removeClass('linkContacts');                        
                    }
            );
            $("#linkContacts").mouseout(
                    function() {
						$("#linkContacts").addClass('linkContacts');
                        $("#linkContacts").removeClass('linkContactsOver');

                    }
            );
            $("#linkContacts").click(
                    function(event) {                        
                        window.location = 'contacts.html'
                    }
            );
			
			$("#linkPortfolio").mouseover(
                    function() {
                        $("#linkPortfolio").addClass('linkPortfolioOver');
						$("#linkPortfolio").removeClass('linkPortfolio');                        
                    }
            );
            $("#linkPortfolio").mouseout(
                    function() {
						$("#linkPortfolio").addClass('linkPortfolio');
                        $("#linkPortfolio").removeClass('linkPortfolioOver');

                    }
            );
            $("#linkPortfolio").click(
                    function(event) {                        
                        window.location = 'portfolio.html'
                    }
            );
	}