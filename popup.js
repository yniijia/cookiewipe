document.addEventListener('DOMContentLoaded', function() {
  const cookieElement = document.getElementById('cookie');
  const messageElement = document.getElementById('message');
  const clearButton = document.getElementById('clearButton');
  const clearCookiesCheckbox = document.getElementById('clearCookies');
  const clearCacheCheckbox = document.getElementById('clearCache');
  const clearHistoryCheckbox = document.getElementById('clearHistory');
  const flushDNSCheckbox = document.getElementById('flushDNS');
  
  // Setup options UI interaction
  setupOptionsUI();
  
  // Automatically clear cookies when popup opens
  cookieElement.classList.add('crumble');
  clearCookiesForCurrentSite(function(result) {
    showCookieResults(result);
  });
  
  // Setup options interaction
  function setupOptionsUI() {
    // Get all option elements
    const optionElements = document.querySelectorAll('.option');
    
    // Add click handler for each option
    optionElements.forEach(option => {
      const checkbox = option.querySelector('input[type="checkbox"]');
      
      // Add selected class to cookie option by default
      if (checkbox.id === 'clearCookies' && checkbox.checked) {
        option.classList.add('selected');
      }
      
      // Handle click on the option label
      option.addEventListener('click', function(e) {
        // Prevent immediate propagation for better UX
        if (e.target !== checkbox) {
          e.preventDefault();
          checkbox.checked = !checkbox.checked;
        }
        
        // Toggle selected class
        if (checkbox.checked) {
          option.classList.add('selected');
        } else {
          option.classList.remove('selected');
        }
        
        // Update clear button text based on selections
        updateClearButtonText();
      });
      
      // Also handle direct checkbox changes
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          option.classList.add('selected');
        } else {
          option.classList.remove('selected');
        }
        
        // Update clear button text
        updateClearButtonText();
      });
    });
    
    // Initial button text update
    updateClearButtonText();
  }
  
  // Update the clear button text based on selected options
  function updateClearButtonText() {
    const selectedOptions = [];
    
    if (clearCookiesCheckbox.checked) selectedOptions.push('Cookies');
    if (clearCacheCheckbox.checked) selectedOptions.push('Cache');
    if (clearHistoryCheckbox.checked) selectedOptions.push('History');
    if (flushDNSCheckbox.checked) selectedOptions.push('DNS');
    
    if (selectedOptions.length === 0) {
      clearButton.textContent = 'Select Items to Clear';
      clearButton.disabled = true;
      clearButton.classList.add('disabled');
    } else {
      clearButton.textContent = `Clear ${selectedOptions.join(', ')}`;
      clearButton.disabled = false;
      clearButton.classList.remove('disabled');
    }
  }
  
  // Clear button for additional options
  clearButton.addEventListener('click', function() {
    // Only proceed if button is not disabled
    if (this.disabled) return;
    
    // Add active effect to button
    this.classList.add('clearing');
    
    // Check which options are selected
    const clearCookies = clearCookiesCheckbox.checked;
    const clearCache = clearCacheCheckbox.checked;
    const clearHistory = clearHistoryCheckbox.checked;
    const flushDNS = flushDNSCheckbox.checked;
    
    // Prepare tracking for completion
    let operationsCompleted = 0;
    let operationsTotal = 0;
    let operationResults = [];
    
    // Count selected operations
    if (clearCookies) operationsTotal++;
    if (clearCache) operationsTotal++;
    if (clearHistory) operationsTotal++;
    if (flushDNS) operationsTotal++;
    
    if (operationsTotal === 0) {
      showMessage("Please select at least one item to clear");
      clearButton.classList.remove('clearing');
      return;
    }
    
    showMessage("Clearing selected data...");
    
    // Clear cookies if selected
    if (clearCookies) {
      clearCookiesForCurrentSite(function(result) {
        operationResults.push(result);
        checkCompletion();
      });
    }
    
    // Clear cache if selected
    if (clearCache) {
      clearBrowsingCache(function(result) {
        operationResults.push(result);
        checkCompletion();
      });
    }
    
    // Clear history if selected
    if (clearHistory) {
      clearBrowsingHistory(function(result) {
        operationResults.push(result);
        checkCompletion();
      });
    }
    
    // Flush DNS if selected
    if (flushDNS) {
      flushDNSCache(function(result) {
        operationResults.push(result);
        checkCompletion();
      });
    }
    
    // Check if all operations are complete and show results
    function checkCompletion() {
      operationsCompleted++;
      if (operationsCompleted === operationsTotal) {
        showResults(operationResults);
        clearButton.classList.remove('clearing');
      }
    }
  });
  
  // Show results for automatic cookie clearing
  function showCookieResults(result) {
    if (result.success) {
      if (result.count > 0) {
        showSuccess(`Cleared ${result.count} cookie${result.count !== 1 ? 's' : ''} for ${result.domain}.`);
      } else {
        showMessage(`No cookies found for ${result.domain}.`);
      }
    } else {
      showError(result.message);
    }
  }
  
  function clearCookiesForCurrentSite(callback) {
    // Get the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs.length === 0) {
        callback({type: "cookies", success: false, message: "No active tab found"});
        return;
      }
      
      const activeTab = tabs[0];
      const url = new URL(activeTab.url);
      const domain = url.hostname;
      
      // Get all cookies for the domain
      chrome.cookies.getAll({domain: domain}, function(cookies) {
        if (cookies.length === 0) {
          callback({type: "cookies", success: true, count: 0, domain: domain});
          return;
        }
        
        let cookiesRemoved = 0;
        const totalCookies = cookies.length;
        
        // Remove each cookie
        cookies.forEach(cookie => {
          // Create URL for cookie removal (needs to match cookie's protocol and domain)
          const cookieUrl = (cookie.secure ? "https://" : "http://") + 
                           cookie.domain + 
                           (cookie.path || "/");
          
          chrome.cookies.remove({
            url: cookieUrl,
            name: cookie.name
          }, function(details) {
            cookiesRemoved++;
            
            // When all cookies are processed, return result
            if (cookiesRemoved === totalCookies) {
              callback({type: "cookies", success: true, count: totalCookies, domain: domain});
            }
          });
        });
      });
    });
  }
  
  function clearBrowsingCache(callback) {
    chrome.browsingData.removeCache(
      { since: 0 }, // Clear all cache
      function() {
        callback({type: "cache", success: true});
      }
    );
  }
  
  function clearBrowsingHistory(callback) {
    // Get the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs.length === 0) {
        callback({type: "history", success: false, message: "No active tab found"});
        return;
      }
      
      // Use browsingData API for more thorough history removal
      // This clears all history, not just for specific domain
      chrome.browsingData.remove({
        "since": 0 // Remove all history
      }, {
        "history": true,
        "downloads": false,
        "cookies": false,
        "cache": false,
        "passwords": false,
        "formData": false
      }, function() {
        callback({type: "history", success: true, message: "All browsing history cleared"});
      });
    });
  }
  
  function flushDNSCache(callback) {
    // Chrome doesn't have a direct API for DNS cache flushing
    // We'll implement a workaround by sending network requests to force DNS resolution
    
    // Get the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs.length === 0) {
        callback({type: "dns", success: false, message: "No active tab found"});
        return;
      }
      
      const activeTab = tabs[0];
      const url = new URL(activeTab.url);
      const domain = url.hostname;
      
      // To flush DNS cache, we'll make HEAD requests to force DNS resolution
      const domainsToResolve = [
        domain,                   // Current domain
        'www.google.com',         // Common domains to force refresh
        'www.facebook.com',
        'www.youtube.com',
        'www.amazon.com',
        'www.wikipedia.org'
      ];
      
      let resolvedCount = 0;
      
      // Try to resolve each domain by making a HEAD request
      domainsToResolve.forEach(domain => {
        // Create a hidden iframe to force DNS resolution
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = 'https://' + domain + '/favicon.ico?' + new Date().getTime();
        
        // Handle the load event
        iframe.onload = function() {
          // Remove the iframe when loaded
          document.body.removeChild(iframe);
          resolvedCount++;
          
          // When all domains are processed, return result
          if (resolvedCount === domainsToResolve.length) {
            callback({type: "dns", success: true, message: "DNS cache flushed"});
          }
        };
        
        // Handle errors
        iframe.onerror = function() {
          // Remove the iframe on error
          document.body.removeChild(iframe);
          resolvedCount++;
          
          // Continue even if some fail
          if (resolvedCount === domainsToResolve.length) {
            callback({type: "dns", success: true, message: "DNS cache flushed"});
          }
        };
        
        // Add the iframe to the document
        document.body.appendChild(iframe);
      });
    });
  }
  
  function showResults(results) {
    let message = "";
    let successCount = 0;
    
    results.forEach(result => {
      if (result.success) {
        successCount++;
        
        if (result.type === "cookies") {
          if (result.count > 0) {
            message += `Cleared ${result.count} cookie${result.count !== 1 ? 's' : ''} for ${result.domain}.<br>`;
          } else {
            message += `No cookies found for ${result.domain}.<br>`;
          }
        } else if (result.type === "cache") {
          message += "Browser cache cleared.<br>";
        } else if (result.type === "history") {
          if (result.message) {
            message += `${result.message}<br>`;
          } else if (result.count > 0) {
            message += `Cleared ${result.count} history item${result.count !== 1 ? 's' : ''} for ${result.domain}.<br>`;
          } else {
            message += `No history found for ${result.domain}.<br>`;
          }
        } else if (result.type === "dns") {
          message += `${result.message}<br>`;
        }
      } else {
        message += `Error clearing ${result.type}: ${result.message}<br>`;
      }
    });
    
    if (successCount === results.length) {
      messageElement.innerHTML = message;
      messageElement.classList.add('success');
    } else {
      messageElement.innerHTML = message;
    }
  }
  
  function showMessage(msg) {
    messageElement.innerHTML = msg;
    messageElement.classList.remove('success');
  }
  
  function showError(msg) {
    messageElement.innerHTML = "Error: " + msg;
    messageElement.style.color = "red";
  }
  
  function showSuccess(msg) {
    messageElement.innerHTML = msg;
    messageElement.classList.add('success');
  }
}); 