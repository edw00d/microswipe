MICROSWIPE

Have you ever needed to add swipe functionality for iOS and Android devices but not wanted to import libraries to do so?

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

id (STRING) : The id attribute of the element to be microswiped if you aren't using jQuery.
You can only use the id as the selector if you aren't using jQuery.
Not required if you use jQuery.

distance (INT)  :   The distance the swipe has to travel to be considered a swipe. The value is interpreted as being pixels. 
Lower this value to allow quick flicks to be considered swipes.Raise this value to only include very deliberate swipes.

delay (INT) :   The minimum delay in milliseconds that has to elapse before the action can be considered a swipe. Lower this value to allow quick flicks to be considered swipes. Raise this value to only include very deliberate swipes.

onBeforeSwipe (FUNCTION) : Specify a function to be executed before the swipe starts. The Event object is passed as an argument.

onSwipeComplete (FUNCTION) : Specify a function to be executed after the swipe has completed. The Event object is passed as the first argument. An object with the swipeTime (INT), distance (INT) and direction (STRING - 'left' or 'right') is passed as the second.

