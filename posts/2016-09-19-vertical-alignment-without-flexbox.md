=============================================
title: CSS vertical alignment without flexbox 
=============================================

If you're unlucky enough to have to support [non-flexbox-capable browsers][1],
I'm pretty sure you had nightmares about vertical alignment. It's the most
ridiculously complicated thing in CSS. There are urban legends about people,
who once aligned a box vertically in the middle of the screen, but they have
never been seen again. 

<!--  TEASER -->

Usually, the solution is the following: use absolute positioning, `top: 50%`,
and use negative margins to set the size of the element. If you can `calc()`, 
even better. 

However, this only works if you know the height of the element beforehand. 
This is not always the case: you might want to have a dialog which grows with
the content. And it's counter-intuitive as well: negative margins just don't make sense. 

We do have something though that looks like exactly what we need. It's called
`vertical-align: middle`. Probably the first disappointment in every web developers life. 
It seems to be the obvious solution - but it just doesn't work. 

The reason is that `vertical-align` is for text formatting. It doesn't set the alignment 
of the children of the element, like `text-align`, but it sets the alignment 
of the children themselves, relative to each other. This is a very common issue
in HTML: It is designed around flowing text, not UI, so it feels unnatural 
to do things with it which should be obvious in a UI development framework. 

That doesn't mean we cannot use `vertical-align`, we just need to be a bit creative. 

[1]: http://caniuse.com/#feat=flexbox