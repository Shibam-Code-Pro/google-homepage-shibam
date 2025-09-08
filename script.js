// Google Homepage Clone - JavaScript Code

// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the search input box
    const searchInput = document.getElementById('searchInput');
    
    // Automatically focus on the search box when page loads
    searchInput.focus();
    
    // Get the Google Search button
    const googleSearchBtn = document.getElementById('googleSearchBtn');
    
    // When Google Search button is clicked
    googleSearchBtn.addEventListener('click', function() {
        const searchQuery = searchInput.value.trim(); // Get what user typed
        
        if (searchQuery) {
            // Show alert with search query
            alert('Searching for: "' + searchQuery + '"\n\nIn a real Google homepage, this would show search results!');
        } else {
            // Show alert if nothing was typed
            alert('Please enter a search query first!');
        }
    });
    
    // Get the I'm Feeling Lucky button
    const feelingLuckyBtn = document.getElementById('feelingLuckyBtn');
    
    // When I'm Feeling Lucky button is clicked
    feelingLuckyBtn.addEventListener('click', function() {
        const searchQuery = searchInput.value.trim(); // Get what user typed
        
        if (searchQuery) {
            alert('I\'m Feeling Lucky with: "' + searchQuery + '"\n\nThis would take you directly to the top result!');
        } else {
            alert('I\'m Feeling Lucky!\n\nThis would take you to a popular website!');
        }
    });
    
    // When Enter key is pressed in search box
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            googleSearchBtn.click(); // Same as clicking Google Search button
        }
    });
    
    // Get the voice search icon
    const voiceSearch = document.querySelector('.voice-search');
    
    // When voice search icon is clicked
    voiceSearch.addEventListener('click', function() {
        alert('Voice search clicked!\n\nThis would activate microphone for voice search.');
    });
    
    // Get the camera search icon
    const cameraSearch = document.querySelector('.camera-search');
    
    // When camera search icon is clicked
    cameraSearch.addEventListener('click', function() {
        alert('Image search clicked!\n\nThis would open camera for image search.');
    });
    
    // Get the apps menu button
    const appsBtn = document.querySelector('.apps-btn');
    
    // When apps menu is clicked
    appsBtn.addEventListener('click', function() {
        alert('Google Apps menu clicked!\n\nThis would show Google services like Gmail, Drive, etc.');
    });
    
    // Get the search box wrapper for styling effects
    const searchBoxWrapper = document.querySelector('.search-box-wrapper');
    
    // When user clicks in search box, add shadow effect
    searchInput.addEventListener('focus', function() {
        searchBoxWrapper.style.boxShadow = '0 2px 5px 1px rgba(64, 60, 67, 0.16)';
        searchBoxWrapper.style.borderColor = 'transparent';
    });
    
    // When user clicks away from search box, remove shadow if empty
    searchInput.addEventListener('blur', function() {
        if (!searchInput.value) {
            searchBoxWrapper.style.boxShadow = 'none';
            searchBoxWrapper.style.borderColor = '#dfe1e5';
        }
    });

});
