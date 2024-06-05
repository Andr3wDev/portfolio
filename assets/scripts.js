(function() {
    $(document).ready(function() {
        var $navbar = $('#header-nav');
        var $navbarToggle = $('.navbar-toggler');
        var $navbarCollapse = $('.navbar-collapse');
        var $navbarOffset = $navbar.outerHeight();

        /* Scroll handler */
        $('.navbar a[href^="#"]').on('click', function(e) {
			console.log('a click!');
            e.preventDefault();
            $('.navbar a').removeClass('active');

            var target = this.hash;
            var $target = $(target);
            $(this).addClass('active');

            if (this.target === '_blank') {
                window.open(target, '_blank');
            } else if ($(this).attr('href').startsWith('mailto:')) {
                window.location.href = $(this).attr('href');
            } else {
                $('html, body').animate({
                    'scrollTop': $target.offset().top - $navbarOffset
                }, 800, 'swing');
            }
            OnNavClose();
        });

        /* Toggler */
        $('.navbar-collapse').on('show.bs.collapse', function() {
            OnNavOpen();
        });

        $('.navbar-collapse').on('hide.bs.collapse', function() {
            OnNavClose();
        });

        $('.social-link').hover(
            function() {
                var tooltipText = $(this).data('tooltip');
                $(this).append('<div class="tooltip">' + tooltipText + '</div>');
            },
            function() {
                $('.tooltip').remove();
            }
        );

        $(document).on('click', function(event) {
            if ($($navbarCollapse).hasClass('show')) {
                OnNavClose();
            }
        });

        function OnNavClose() {
            $($navbarToggle).removeClass('active');
            $($navbarToggle).addClass('collapsed');
            $($navbarCollapse).removeClass('show');
        }

        function OnNavOpen() {
            $($navbarToggle).removeClass('collapsed');
            $($navbarToggle).addClass('active');
        }
    });

    window.onload = function() {
        setTimeout(function() {
            window.scrollTo(0, 0);
            $('#loadingSpinner').remove();
        }, 500);
    };
})();