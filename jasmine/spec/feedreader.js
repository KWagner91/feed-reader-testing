/* feedreader.js from Udacity https://github.com/udacity/frontend-nanodegree-feedreader
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that are run against the application.
 */

/* All of our tests are within the $() function,
 * since some of these tests may require DOM elements
 */
 
$(function() {    
/**
* @description RSS feed test suite
* @param {array} allFeeds - test whether defined and not empty
* @param {object} allFeeds - Loop through feed and test that URL is defined
* @param {object} allFeeds - Loop through feed and test that name is defined
*/
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('has URL', function() {
			 allFeeds.forEach(function(feed){
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0)
			});
		});

         it('hasName', function() {
			 allFeeds.forEach(function(feed){
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0)

		});
     });

});


/**
* @description Hamburger Menu test suite
* @param {DOM element} className - test whether it contains class "menu-hidden" on page load
* @param {variable} hambugerMenu - "menu-icon-link" DOM element
* @returns {variable} toggle on click ".menu-hidden"
*/
	describe('The menu', function() {

         it('is hidden', function() {
			 
			expect(document.body.className).toContain('menu-hidden');
			 });

          const hamburgerMenu = document.querySelector('.menu-icon-link');
          
           it('toggles the class \'menu-hidden\' on clicking hamburger icon', function() {
			  hamburgerMenu.click()
			  expect(document.body.className).not.toContain('menu-hidden');

			  hamburgerMenu.click();
			  expect(document.body.className).toContain('menu-hidden');
			});
		});
    


/**
* @description Initial Entries test suite
* @param {variable} entries - ".entry" element lengthwithin ".feed" container
* @returns {number} expect entries array to contain elements
*/
    describe('Initial Entries', function() {

         const entries = document.querySelector('.feed').getElementsByClassName('entry').length;
         
         beforeEach(function (done) {
			loadFeed(0, done);
		});
		
          it('has > 1 entry after loadFeed function is called', function(done) {
			  expect(entries).toBeGreaterThan(0);
			  done();
		});
		
	});

   
   
/**
* @description New Feed Selection test suite
* @param {variable} firstContent - ".feed" element before loadFeed function loaded
* @param {variable} newContent - ".feed" element after loadFeed function executed
* @returns {string} expect string entries to be different
*/
	describe('New Feed Selection', function() {
		    
		beforeEach(function(done) {
			loadFeed(0, function() {
				const firstContent = document.querySelector('.feed').innerHTML;

				loadFeed(1, function() {
					done();
			});
		  });
		});
		
		it('changes loaded content', function(done) {
			const newContent = document.querySelector('.feed'.innerHTML);
			expect(firstContent !== newContent);
			done();
         	});
		});
}());
