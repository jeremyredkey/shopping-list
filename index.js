$(function() {
    $('#js-shopping-list-form').submit( event => {
    //Prevent Default
    event.preventDefault();
            //get value of the input 
        const shoppingItem = $(this).find(`input[name="shopping-list-entry"]`).val();
        //Append the ul.shopping-list and use the value of the variable
            $(".shopping-list").append(`<li>
                <span class="shopping-item">${shoppingItem}</span>
                <div class="shopping-item-controls">
                  <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                  </button>
                  <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                  </button>
                </div>
              </li>`)

});
});
 
 
    //when shopping-item-delete button is clicked remove
 $(function() { 
    $(".shopping-list").on("click", ".shopping-item-delete", function() {
        // remove li after click of shopping-item-delete button
        this.closest('li').remove();
    });
})

    //reference parent first then trigger event on click of shopping-item-toggle button 
$(".shopping-list").on("click", ".shopping-item-toggle", function()  {
    //strike through shopping item by going to the div then reference the sibling
const check = $(this).closest('div').siblings('.shopping-item');

    //add toggleClass to variable
$(check).toggleClass("shopping-item__checked")

});


