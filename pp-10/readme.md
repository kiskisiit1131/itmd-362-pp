# Production Problem 10: A/B Testing on the Cheap

## The Problem

Locate an interface component on a website that you use frequently that you think could be improved. The improvement should be minor.

Take a screenshot of the interface on both a mobile and desktop device. Then, sketch or illustrate your alternate/"b" test. Finally, describe modification and the HTML, CSS, and JavaScript that you would need to write in order to conduct the test.

## Deliverables

* Screenshots of the interface component on mobile and desktop, placed in this directory (`pp-10/`)

* Sketch or illustrate (e.g., in Photoshop) your alternate/"b" test, placed in this directory (`pp-10/`)

* A text description of the modification, and a description of the HTML, CSS, and JavaScript that you would need to write for the test (you do *not* have to write the actual HTML, CSS, and JavaScript, however)


Description:

I love checking the news on NBA.com, but a problem I frequently face is that as soon as I click on an article on the left, the scrollbar will refresh
to the top. That's fine when I'm on the first few articles of news, but when I'm scrolling down it starts to become tedious to have to scroll down and
remember where I left off of. I would modify this so that it doesn't refresh every time, but rather just stays at where you left off so that it's easier
for you to go through all of the news articles. Looking at the already existing HTML, there's a lot of classes existing for CSS purposes, so we can just
transfer those over to JavaScript and create a simple event.preventDefault() function so the scrollbar no longer does this. A good test for this would be to
see webpage interaction with the existing toolbar in comparison to my idea. Hopefully, more people would stay and read more news on the NBA with the 
stagnant bar that I proposed. 

NOTE!!! The mobile version is totally fine because it takes you to a new page anyways (the screen is too small to view both the news article
and news bar at the same time). I added that screenshot regardless, but my test will only focus on the desktop versions.  