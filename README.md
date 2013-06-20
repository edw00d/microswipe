MICROSWIPE

Have you ever needed to add swipe functionality for iOS devices but not wanted to import huge libraries to do so?

MICROSWIPE works without any external libraries, but works fine as a jQuery plugin as well.

Usage

On its own:

```new MicroSwipe({id:[MY_ELEMENT's ID],onSwipeComplete:CALLBACK});```

eg:

`new MicroSwipe({id:'myElementId',onSwipeComplete:function(){alert('Swipe completed.');}});`

jQuery:

`$([MY_ELEMENT]).microswipe(CALLBACK,[OPTS]);`

eg:

`$('#myid').microswipe(onSwipeComplete:function(){alert('Swipe completed.');},{distance:40,delay:50})`

Options

id                :   The id attribute of the element to be microswiped if you aren't using jQuery.
STRING                You can only use the id as the selector if you aren't using jQuery.
                      Not required if you use jQuery.

distance          :   The distance the swipe has to travel to be considered a swipe.
INT                   The value is interpreted as being pixels. 
                      Lower this value to allow quick flicks to be considered swipes.
                      Raise this value to only include very deliberate swipes.

delay             :   The minimum delay in milliseconds that has to elapse before the action can be considered a swipe.
INT                   Lower this value to allow quick flicks to be considered swipes.
                      Raise this value to only include very deliberate swipes.

onSwipeComplete

