$('.show-filters').on('click',function(){

    // 1. when our navigation is expanded, collapse it
    // 2. change text of show filters to 'show filters'
    // 3. otherwise, if the nav is collasped, expand it
    // 4. change the text to say 'hide filters'
    
    if ($('.filter-list').is(':visible')){
        $('.filter-list').slideUp(300);
        $('.show-filters').text('Show Filters')
    }else{
        $('.show-filters').text('Hide Filters')
        $('.filter-list').slideDown(300);

    }

    //this will block the default behaviour of the # href jumping
    // to the top of the page
    return false
})

$('.filter-list a').on('click',function(){

    var filter = $(this).attr('data-filter')

    console.log(filter)

    // 1. hide all the products
    // 2. show the products with a particular filter

    $('.product').hide()
    $(filter).show()

    //this will add a class name of selected to the current filter
    // link that we've just clicked on
    $('.filter-list a').removeClass('selected')
    $(this).addClass('selected')

    return false

})

