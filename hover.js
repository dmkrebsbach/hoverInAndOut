$('img').hover(function() // when mouse moves over photo
    { 
        $(this).attr('src','suit2.jpg');
    },
    function() // when mouse moves off of photo
    { 
        $(this).attr('src','suit1.jpg'); 
    }
);
